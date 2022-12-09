const API = 'http://localhost:8080/api';

export async function getData(data) {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(`${API}`, payload);
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
