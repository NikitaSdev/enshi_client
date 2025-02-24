export const getYears = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 1966;

  const yearsArray = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => ({
      title: `${startYear + index}`,
      id: startYear + index,
    })
  );

  return yearsArray.reverse();
};
