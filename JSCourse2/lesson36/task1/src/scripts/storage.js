export const setItem = (key, valueList) => localStorage.setItem(key, JSON.stringify(valueList));

export const getItem = (key) => JSON.parse(localStorage.getItem(key));
