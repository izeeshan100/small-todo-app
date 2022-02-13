export const sortByDate = (arr) => {
  const sorter = (a, b) => {
    return (
      new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
    );
  };
  arr.sort(sorter);
  return arr;
};
