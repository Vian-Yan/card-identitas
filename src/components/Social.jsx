import PropTypes from 'prop-types';

function Icon({ icon }) {
  return (
    <>
      <button>
        <i className={`fa-brands ${icon}`}></i>
      </button>
    </>
  );
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;
