/**
 * Returns firstNo is what percentage of secondNo
 * @param {number} firstNo
 * @param {number} secondNo
 */

const percentage = (firstNo, secondNo) => {
  return ((firstNo / secondNo) * 100).toFixed();
};

export default percentage;
