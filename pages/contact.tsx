import ContactCode from '@/components/ContactCode';

import styles from '@/styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Contact Me</h1>
      <p className={styles.pageSubtitle}>
        Feel free to reach out to me through any of the social platforms below.
        I&apos;m always open to new opportunities and connections.
      </p>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <ContactCode />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;

# touched on 2025-08-14T19:56:14.196213Z
# touched on 2025-08-14T19:56:20.950436Z
# touched on 2025-08-14T19:56:38.009919Z
# touched on 2025-08-14T19:56:57.147143Z
# touched on 2025-08-14T19:57:14.326880Z
# touched on 2025-08-14T19:57:18.457873Z
# touched on 2025-08-14T19:58:02.504382Z
# touched on 2025-08-14T19:58:36.932281Z