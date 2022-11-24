/* eslint-disable import/prefer-default-export */
const Api = 'http://localhost:3004';

export const getCollection = async () => {
  const response = await fetch(`${Api}/collection`);
  const data = response.json();
  return data;
};
