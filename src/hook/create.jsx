const API = process.env.REACT_APP_API;

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

export async function deleteUser(id) {
  const token = localStorage.getItem('token');

  const payload = {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(id),
  };

  try {
    const response = await fetch(`${API}/users/${id}`, payload);
    response.json();
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
  }
}
