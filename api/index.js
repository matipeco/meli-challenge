const express = require('express');
const axios = require('axios');

const server = express();

server.get('/api/items', async (req, res) => {
  const { q } = req.query;
  const response = await axios(`https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=4`);
  const products = response.data.results;
  // eslint-disable-next-line max-len
  const categories = response.data.filters[0].values[0].path_from_root.map((category) => category.name);

  const searchResult = {
    author: {
      name: 'Matias',
      lastname: 'Pecorale',
    },
    categories,
    items: products.map((prod) => ({
      id: prod.id,
      title: prod.title,
      price: {
        currency: prod.currency_id,
        amount: Number(prod.price.toString().split('.')[0]),
        decimals: Number(prod.price.toString().split('.')[1]) || 0,
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
