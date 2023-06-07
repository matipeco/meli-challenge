const express = require('express');
const axios = require('axios');
const { findId, getDecimals, getCategories } = require('./utils');

const server = express();

server.get('/api/items', async (req, res) => {
  const { q } = req.query;
  const { data } = await axios(`https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=4`);

  let categories;
  if (data.filters.length > 0) {
    // eslint-disable-next-line max-len
    categories = data.filters[0].values[0].path_from_root.map((category) => category.name);
  } else {
    // eslint-disable-next-line max-len
    const id = findId(data.available_filters);

    const { data: categoriesData } = await axios(`https://api.mercadolibre.com/categories/${id}`);
    categories = getCategories(categoriesData);
  }
  const searchResult = {
    author: {
      name: 'Matias',
      lastname: 'Pecorale',
    },
    categories,
    items: data.results.map((prod) => ({
      id: prod.id,
      title: prod.title,
      price: {
        currency: prod.currency_id,
        amount: Math.trunc(prod.price),
        decimals: getDecimals(prod.price),
      },
      picture: prod.thumbnail,
      condition: prod.condition,
      free_shipping: prod.shipping.free_shipping,

    })),
  };

  res.json(searchResult);
});

server.get('/api/items/:id', async (req, res) => {
  const { id } = req.params;
  const { data } = await axios(`https://api.mercadolibre.com/items/${id}`);

  // eslint-disable-next-line camelcase
  const info = await axios(`https://api.mercadolibre.com/items/${id}/description`);

  const { data: categoriesData } = await axios(`https://api.mercadolibre.com/categories/${data.category_id}`);

  const product = {
    author: {
      name: 'Matias',
      lastname: 'Pecorale',
    },
    item: {
      id: data.id,
      title: data.title,
      price: {
        currency: data.currency_id,
        amount: Math.trunc(data.price),
        decimals: getDecimals(data.price),
      },
      picture: data.thumbnail,
      condition: data.condition,
      free_shipping: data.shipping.free_shipping,
      sold_quantity: data.sold_quantity,
      // eslint-disable-next-line camelcase
      description: info.data.plain_text,
    },
    categories: getCategories(categoriesData),
  };

  res.json(product);
});

server.listen(3001, () => {
  console.log('Escuchando en el puerto 3001');
});
