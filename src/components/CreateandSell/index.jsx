import './style.scss';
import PropTypes from 'prop-types';

const Create = (props) => {
  const {
    title, imageHeader, titleArticle, description,
  } = props;
  return (
    <section className="box">
      <header className="box__header">
        <p className="box__title">{title}</p>
        <img src={imageHeader} alt="" className="box__image" />
      </header>
      <section className="box__article">
        <h1 className="box__titleArticle">{titleArticle}</h1>
        <p className="box__description">{description}</p>
      </section>

    </section>
  );
};

Create.propTypes = {
  title: PropTypes.string.isRequired,
  imageHeader: PropTypes.string.isRequired,
  titleArticle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Create;
