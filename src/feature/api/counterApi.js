const API = 'http://localhost:8080/api';

// eslint-disable-next-line import/prefer-default-export
export async function GetData(data) {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(`${API}/allData`, payload);
    // eslint-disable-next-line no-shadow
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
