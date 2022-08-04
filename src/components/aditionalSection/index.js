import PropTypes from 'prop-types';

import './aditionalSection.scss';

const AditionalSection = ({
  className, name, title, helperText , children,
}) => (
  <section className={['aditionalSection', className].join(' ')}>
    <div className="header">
      <span className="sectionName">{name}</span>
      <h2>{title}</h2>
      {helperText && <p>{helperText}</p>}
    </div>
    {children}
  </section>
);

AditionalSection.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  children: PropTypes.shape().isRequired,
};

AditionalSection.defaultProps = {
  className: '',
  helperText: null,
};

export default AditionalSection;
