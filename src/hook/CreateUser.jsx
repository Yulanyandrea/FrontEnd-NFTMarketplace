const API = 'http://localhost:3004';

const createUser = async (user) => {
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
};

export default createUser;
