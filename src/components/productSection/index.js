import PropTypes from 'prop-types';

import './productSection.scss';

const ProductSection = ({
  image, name, description, handleClickShowMore, textPosition,
  backgroundImage, callToActionText, handleClickcallToAction,
}) => (
  <section className={`productSection ${textPosition}`}>
    <div className="product">
      <img src={image} alt="product reference" />
      <h3>{name}</h3>
      <hr />
      <p>{description}</p>
      <span onClick={handleClickShowMore}>
        <span className="arrow">{'>'}</span>
        VER MÁS
      </span>
    </div>

    <div className="backgroundImage">
      <img src={backgroundImage} alt="product in use" />

      {callToActionText && (
        <button onClick={handleClickcallToAction}>{callToActionText}</button>
      )}

      <div className="figure" />
    </div>
  </section>
);

ProductSection.propTypes = {
  textPosition: PropTypes.oneOf(['left', 'right']),
  image: PropTypes.string.isRequired,
};

ProductSection.defaultProps = {
  textPosition: 'left',
};

export default ProductSection;
