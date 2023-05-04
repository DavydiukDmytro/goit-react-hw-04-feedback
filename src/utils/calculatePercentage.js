export const calculatePercentage = (amount, total) => {
  if (total === 0) {
    return 0;
  }
  return parseFloat(((amount / total) * 100).toFixed(2));
};
