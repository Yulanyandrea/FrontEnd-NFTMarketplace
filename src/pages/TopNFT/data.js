/* eslint-disable import/prefer-default-export */
const Api = 'http://localhost:3004';

export const getData = async () => {
  const response = await fetch(`${Api}/topnft`);
  const data = response.json();
  return data;
};
