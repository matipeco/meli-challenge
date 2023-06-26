const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors');
const axios = require('axios');
const {
  findId, getDecimals, getCategories, translateCondition,
} = require('./utils');

const server = express();

server.use(cors());

server.get('/api/items', async (req, res) => {
  try {
    const { q } = req.query;
    const { data } = await axios(`https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=4`);
    let categories;
    if (data.filters.length > 0) {
      categories = data.filters[0].values[0].path_from_root.map((category) => category.name);
    } else {
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
        condition: translateCondition(prod.condition),
        free_shipping: prod.shipping.free_shipping,
      })),
    };

    res.json(searchResult);
  } catch (error) {
    // eslint-disable-next-line no-console
    // console.error(error);
    res.status(500).json({ message: 'El producto no existe' });
  }
});

server.get('/api/items/:id', async (req, res) => {
  try {
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
        condition: translateCondition(data.condition),
        free_shipping: data.shipping.free_shipping,
        sold_quantity: data.sold_quantity,
        // eslint-disable-next-line camelcase
        description: info.data.plain_text,
      },
      categories: getCategories(categoriesData),
    };

    res.json(product);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      res.status(404).json({ message: 'No existen productos con ese id' });
    } else {
      res.status(500).json({ message: 'Error al obtener los datos de un producto' });
    }
  }
});

server.use((req, res) => {
  res.status(404).json({ message: 'Parece que esta página no existe' });
});

server.listen(3001, () => {
  console.log('Escuchando en el puerto 3001');
});
