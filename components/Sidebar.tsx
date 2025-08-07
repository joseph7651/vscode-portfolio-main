import Link from "next/link";
import { useRouter } from "next/router";
import {
  VscAccount,
  VscSettings,
  VscMail,
  VscGithubAlt,
  VscCode,
  VscFiles,
} from "react-icons/vsc";

import styles from "@/styles/Sidebar.module.css";

const sidebarTopItems = [
  { Icon: VscFiles, path: "/" },
  { Icon: VscGithubAlt, path: "/github" },
  { Icon: VscCode, path: "/projects" },
  { Icon: VscMail, path: "/contact" },
];

const sidebarBottomItems = [
  { Icon: VscAccount, path: "/about" },
  { Icon: VscSettings, path: "/settings" },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                router.pathname === path && styles.active
              }`}
            >
              <Icon
                size={16}
                fill={
                  router.pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <div className={styles.iconContainer} key={path}>
            <Link href={path}>
              <Icon
                fill={
                  router.pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className={styles.icon}
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;

# touched on 2025-08-14T19:12:00.373160Z
# touched on 2025-08-14T19:55:42.849712Z
# touched on 2025-08-14T19:56:00.972060Z
# touched on 2025-08-14T19:56:11.970744Z
# touched on 2025-08-14T19:56:14.196619Z
# touched on 2025-08-14T19:56:46.272871Z
# touched on 2025-08-14T19:57:25.122389Z
# touched on 2025-08-14T19:57:43.041369Z
# touched on 2025-08-14T19:58:04.886927Z
# touched on 2025-08-14T19:58:12.198811Z
# touched on 2025-08-14T19:58:18.610382Z
# touched on 2025-08-14T19:58:23.240126Z