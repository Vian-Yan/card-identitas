import PropTypes from 'prop-types';

function Badge({ text }) {
  return (
    <button>
      <div className="height">
        <div className="text">{text}</div>
      </div>
    </button>
  );
}

Badge.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Badge;
