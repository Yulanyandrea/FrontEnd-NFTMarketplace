import './styles.scss';

const RegisterForm = () => {
  // const { showLoginForm } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="register-form">
        <h1>Estas en la pagina de registro</h1>
      </div>
      <button type="button" className="basic" onClick={handleSubmit}>
        Log in
      </button>
    </>
  );
};

export default RegisterForm;
