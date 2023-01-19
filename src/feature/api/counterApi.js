const API = process.env.REACT_APP_API;
const APIUSER = process.env.REACT_APP_USER_LOGIN;

export async function LoginUser(data) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(APIUSER, payload);
    const user = await response.json();
    if (user?.token) {
      localStorage.setItem('token', user.token);
    }
    return user;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return error;
  }
}

export async function GetData() {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  };

  try {
    const response = await fetch(`${API}/product`, payload);
    const data = response.json();
    return data;
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
  }
}

export async function FetchPost(data) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
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
    console.error(error);
  }
}

export async function GetDataUser() {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  };

  try {
    const response = await fetch(`${API}/users`, payload);
    const data = response.json();
    return data;
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
  }
}

export async function UpdateUser(form, idUser) {
  const token = localStorage.getItem('token');

  // eslint-disable-next-line
  console.log('id user: ', idUser);

  const payload = {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  };

  try {
    const response = await fetch(`${API}/users/63beb4859f59b1f1d3445c61`, payload);
    const data = response.json();
    // eslint-disable-next-line
    console.log(data);
    return data;
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
  }
}

export async function LikeNft(like, id) {
  const token = localStorage.getItem('token');

  const payload = {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(like),
  };

  try {
    const response = await fetch(`${API}/product/${id}`, payload);
    response.json();
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
  }
}

export async function BuyNft(paymentMethod, total) {
  const token = localStorage.getItem('token');

  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      paymentMethod,
      amount: Math.floor(total * 100),
    }),
  };
  console.log(payload);

  try {
    const response = await fetch(`${API}/payment/`, payload);
    const data = await response.json();
    console.log('🚀 ~ counterApi ~ buyNft ~ data', data);
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
  }
}
