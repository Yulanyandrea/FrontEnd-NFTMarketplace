import './style.scss';

const notAuthorized = () => {
  return (
    <main className="containerNotAuthorized">
      <h1 className="containerNotAuthorized__title">Not Authorized</h1>
      <p className="containerNotAuthorized__paragraph">You do not have permission to view this page</p>
      <section className="containerNotAuthorized__img">
        <img src="https://media.giphy.com/media/EIbNk3GZnHYOa9Zfz5/giphy.gif" alt="" className="containerNotAuthorized__image" width="400" />
      </section>

    </main>
  );
};
export default notAuthorized;
