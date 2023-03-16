export const save = (key, item) => {
  const data = getAll(key);
  if (data.indexOf(item) !== -1) return;

  data.push(item);
  localStorage.setItem(key, JSON.stringify(data));
  return data;
};

export const saveAll = (key, itens) => {
  localStorage.setItem(key, JSON.stringify(itens));
};

export const getAll = (key) => {
  const data = localStorage.getItem(key);
  if (!data) return [];

  return JSON.parse(data);
};

export const remove = (key, item) => {
  const data = getAll(key);
  const remove = data.findIndex((e) => e.id === item.id);
  data.splice(remove, 1);

  saveAll(key, data);
  return data;
};
