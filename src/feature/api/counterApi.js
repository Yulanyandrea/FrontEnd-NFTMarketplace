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
    // eslint-disable-next-line
<<<<<<< HEAD
    console.error(error);
  }
}

export async function FetchPost(data) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-type': 'aplication/json',
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(`${API}/`, payload);
    // eslint-disable-next-line no-shadow
    const data = await response.json();
    return data;
  } catch (error) {
    // eslint-disable-next-line
=======
>>>>>>> af67316a5da8ddde78eb6776db81efdafee97a57
    console.error(error);
  }
}
