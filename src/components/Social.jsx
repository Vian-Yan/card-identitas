import PropTypes from 'prop-types';

function Icon({ icon, link }) {
  return (
    <>
      <button onClick={() => window.open(link, '_blank')}>
        <i className={`fa-brands ${icon}`}></i>
      </button>
    </>
  );
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default Icon;
