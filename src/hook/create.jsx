const API = 'http://localhost:8080/api';

export async function createUser(user) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  try {
    const response = await fetch(`${API}/users`, payload);
    const data = await response.json();
    // eslint-disable-next-line
    console.log(data);
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
  }
}

export async function createNft(nft) {
  const token = localStorage.getItem('token');

  const payload = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(nft),
  };

  try {
    const response = await fetch(`${API}/product`, payload);
    const data = await response.json();
    // eslint-disable-next-line
    console.log(data);
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
  }
}
