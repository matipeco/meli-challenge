const findId = (filtersArray) => {
  const { id } = filtersArray
    .find((filter) => filter.id === 'category')
    .values
    .sort((a, b) => b.results - a.results)[0];

  return id;
};

const getDecimals = (price) => {
  const decimal = price.toString().split('.')[1] || 0;
  return Number(decimal);
};

module.exports = { findId, getDecimals };
