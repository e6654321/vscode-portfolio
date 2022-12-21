import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'elram.dev',
    href: 'https://elram.dev',
  },
  {
    social: 'email',
    link: 'enespra@gmail.com',
    href: 'mailto:enespra@gmail.com',
  },
  {
    social: 'github',
    link: 'e6654321',
    href: 'https://github.com/e6654321',
  },
  {
    social: 'linkedin',
    link: 'elram-espra',
    href: 'https://www.linkedin.com/in/elram-espra/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item) => (
        <p className={styles.line} key={`item-${item.social}`}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item) => (
        <p className={styles.line} key={`link-${item.link}`}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
