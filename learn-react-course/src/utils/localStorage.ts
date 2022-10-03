export const getSearchData = () => {
  const data: string | null = localStorage.getItem('search');
  return data;
};

export const saveSearchData = (data: string) => {
  localStorage.setItem('search', data);
};
