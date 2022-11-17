import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.scss';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import LoginForm from './components/Auth/loginForm';
// import RegisterForm from './components/Auth/RegisterForm';
// import CreateNFT from './components/CreateNft';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: '/login',
//     element: <LoginForm />,
//   },
//   {
//     path: '/register',
//     element: <RegisterForm />,
//   },
//   {
//     path: '/createnft',
//     element: <CreateNFT />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
