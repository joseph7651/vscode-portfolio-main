import styles from "@/styles/ContactCode.module.css";

const contactItems = [
  {
    social: "email",
    link: "josephcastellano715@gmail.com",
    href: "mailto:josephcastellano715@gmail.com",
  },
  {
    social: "github",
    link: "Joseph",
    href: "https://github.com/joseph7651",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
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

# touched on 2025-08-14T19:56:07.005689Z
# touched on 2025-08-14T19:57:05.482105Z
# touched on 2025-08-14T19:57:43.041591Z
# touched on 2025-08-14T19:58:36.931561Z
# touched on 2025-08-14T19:58:56.859515Z
# touched on 2025-08-14T19:59:09.337250Z