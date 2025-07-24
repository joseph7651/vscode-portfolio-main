import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { VscChevronRight } from "react-icons/vsc";

import styles from "@/styles/Explorer.module.css";

const explorerItems = [
  {
    name: "home.tsx",
    path: "/",
    icon: "/logos/react_icon.svg",
  },
  {
    name: "about.html",
    path: "/about",
    icon: "/logos/html_icon.svg",
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: "/logos/css_icon.svg",
  },
  {
    name: "projects.js",
    path: "/projects",
    icon: "/logos/js_icon.svg",
  },
  {
    name: "github.md",
    path: "/github",
    icon: "/logos/markdown_icon.svg",
  },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <VscChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: "rotate(90deg)" } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: "block" } : { display: "none" }}
        >
          {explorerItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <div className={styles.file}>
                <Image src={item.icon} alt={item.name} height={18} width={18} />{" "}
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;

# touched on 2025-08-14T19:55:34.433277Z
# touched on 2025-08-14T19:55:46.890189Z
# touched on 2025-08-14T19:56:07.005460Z
# touched on 2025-08-14T19:56:20.950331Z
# touched on 2025-08-14T19:56:46.272447Z
# touched on 2025-08-14T19:56:50.716192Z
# touched on 2025-08-14T19:56:57.146711Z
# touched on 2025-08-14T19:56:59.237313Z