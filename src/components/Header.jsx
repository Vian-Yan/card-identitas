import Icon from './Social';

function Header() {
  const socialsMedia = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/mtm.yan.9/',
      icon: 'fa-facebook',
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.link/7amdym',
      icon: 'fa-whatsapp',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/viannv___/',
      icon: 'fa-instagram',
    },
    {
      name: 'Telegram',
      href: 'http://t.me/Aowkaowkaks',
      icon: 'fa-telegram',
    },
  ];

  const indexMid = Math.floor(socialsMedia.length / 2);
  const leftSocials = socialsMedia.slice(0, indexMid);
  const rightSocials = socialsMedia.slice(indexMid);
  return (
    <>
      <div className="social-buttons">
        {leftSocials.map((social) => (
          <Icon key={social.name} icon={social.icon} link={social.href} />
        ))}
      </div>
      <div className="social-buttons right">
        {rightSocials.map((social) => (
          <Icon key={social.name} icon={social.icon} link={social.href} />
        ))}
      </div>
    </>
  );
}

export default Header;
