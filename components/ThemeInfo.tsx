import Image from 'next/image';

import styles from '@/styles/ThemeInfo.module.css';

interface ThemeInfoProps {
  icon: string;
  name: string;
  publisher: string;
  theme: string;
}

const ThemeInfo = ({ icon, name, publisher, theme }: ThemeInfoProps) => {
  const setTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={icon}
          alt={name}
          height={80}
          width={80}
          className={styles.themeImage}
        />
      </div>
      <div className={styles.info}>
        <div>
          <h3>{name}</h3>
          <h5>{publisher}</h5>
        </div>
        <button onClick={() => setTheme(theme)}>Set Color Theme</button>
      </div>
    </div>
  );
};

export default ThemeInfo;

# touched on 2025-08-14T19:15:44.513908Z
# touched on 2025-08-14T19:34:04.856391Z
# touched on 2025-08-14T19:55:36.656081Z
# touched on 2025-08-14T19:55:46.890524Z
# touched on 2025-08-14T19:55:50.935813Z
# touched on 2025-08-14T19:56:35.855201Z
# touched on 2025-08-14T19:56:57.147028Z
# touched on 2025-08-14T19:56:59.237859Z
# touched on 2025-08-14T19:57:07.523264Z
# touched on 2025-08-14T19:57:58.353943Z
# touched on 2025-08-14T19:58:09.140843Z
# touched on 2025-08-14T19:58:46.210549Z