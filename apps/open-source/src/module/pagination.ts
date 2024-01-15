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

export default getPagination;
