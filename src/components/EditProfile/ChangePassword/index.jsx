import './style.scss';

const ChangePassword = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // eslint-disable-next-line no-console
    console.log('Submit');
  };

  return (
    <main className="changepass">
      <form onSubmit={handleSubmit}>
        <section className="changepass-header">
          <h3 className="changepass-header_title">Change Password</h3>
          <p className="changepass-header_subtitle">
            Password are a critical part of Information and network security.
            Password serve to protect user accounts but a poorly chosen password,
            if compromised, could put the entire newtwork at risk.
          </p>
        </section>
        <hr className="changepass-hr" />
        <section className="changepass-content">
          <div className="changepass-content_email">
            <p>Enter Email</p>
            <input className="changepass-content_email_input" />
          </div>
          <div className="changepass-content_password">
            <div className="changepass-content_password_old">
              <p>Enter Old Password</p>
              <input className="changepass-content_password_old_input" />
            </div>
            <div className="changepass-content_password_new">
              <p>Create New Password</p>
              <input className="changepass-content_password_new_input" />
            </div>
          </div>
          <div className="changepass-content_confirm">
            <p>Confirm Password</p>
            <input className="changepass-content_confirm_input" />
          </div>
        </section>
        <div className="changepass-button">
          <button className="changepass-button_submit" type="submit">Save</button>
        </div>
      </form>
    </main>
  );
};

export default ChangePassword;
