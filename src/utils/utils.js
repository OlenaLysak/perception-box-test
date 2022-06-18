/**
 * Takes an array of items and returns an array of unique items
 * @param {Array} array of items
 * @returns {Array} array of unique items
 */
export const getUniqueValues = (arr) => {
  return arr.filter((item, i) => {
    return arr.indexOf(item) === i;
  });
};
