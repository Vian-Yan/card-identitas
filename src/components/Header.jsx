import Icon from './Social';

function Header() {
  return (
    <>
      <div className="social-buttons">
        <a
          href="https://www.facebook.com/mtm.yan.9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={'fa-facebook'} />
        </a>
        <a
          href="https://wa.link/7amdym"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={'fa-whatsapp'} />
        </a>
      </div>
      <div className="social-buttons right">
        <a
          href="https://www.instagram.com/viannv___/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={'fa-instagram'} />
        </a>
        <a
          href="http://t.me/Aowkaowkaks"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={'fa-telegram'} />
        </a>
      </div>
    </>
  );
}

export default Header;
