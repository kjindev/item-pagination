export const getPagination = <T extends {}>(
  inputData: T[],
  itemCnt: number,
  currentPage: number
): (T & { page: number })[] => {
  const data = [...inputData];

  let tempData: (T & { page: number })[] = data.map((item, i) => ({
    ...item,
    page: Math.ceil((i + 1) / itemCnt),
  }));

  return tempData.filter((item) => item.page === currentPage);
};

export const getTotalPages = <T extends {}>(
  inputData: T[],
  itemCnt: number
): number[] => {
  const lastPage = Math.ceil(inputData.length / itemCnt);
  const tempPageNumbers = Array.from(
    { length: lastPage },
    (_, index) => index + 1
  );

  return tempPageNumbers;
};
