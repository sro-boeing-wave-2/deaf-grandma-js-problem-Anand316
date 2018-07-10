/**
 * @fileOverview Checks if the string is in uppercase
 */

/**
 * Checks if the string is in uppercase
 * @param {string} s The string to be checked
 * @returns {boolean}
 */
const isUppercase = (s) => {
  let x;
  if (s === s.toUpperCase()) {
    x = true;
  } else {
    x = false;
  }
  return x;
};
module.exports = isUppercase;
