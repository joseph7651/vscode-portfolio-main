import Image from "next/image";

import styles from "@/styles/Titlebar.module.css";

const Titlebar = () => {
  return (
    <section className={styles.titlebar}>
      <Image
        src="/logos/vscode_icon.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      />
      <div className={styles.items}>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <p className={styles.title}>joseph Castellano - Visual Studio Code</p>
      <div className={styles.windowButtons}>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
        <span className={styles.close}></span>
      </div>
    </section>
  );
};

export default Titlebar;

# touched on 2025-08-14T19:55:56.991185Z
# touched on 2025-08-14T19:56:40.081576Z
# touched on 2025-08-14T19:57:05.481885Z
# touched on 2025-08-14T19:57:34.385263Z
# touched on 2025-08-14T19:58:27.683327Z
# touched on 2025-08-14T19:59:05.397743Z
# touched on 2025-08-14T19:59:09.336056Z