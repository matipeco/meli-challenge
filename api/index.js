const express = require('express');
const axios = require('axios');
const { findId, getDecimals } = require('./utils');

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
    categories = categoriesData.path_from_root.map((categ) => categ.name);
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

server.listen(3001, () => {
  console.log('Escuchando en el puerto 3001');
});
