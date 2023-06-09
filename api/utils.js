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

const getCategories = (data) => {
  const categories = data.path_from_root.map((categ) => categ.name);
  return categories;
};

const translateCondition = (condition) => {
  const translation = {
    new: 'Nuevo',
    used: 'Usado',
    refurbished: 'Reacondicionado',
    not_specified: 'No especificado',
  };
  return translation[condition] || translation.not_specified;
};

module.exports = {
  findId, getDecimals, getCategories, translateCondition,
};
