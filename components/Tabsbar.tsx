import Tab from "@/components/Tab";

import styles from "@/styles/Tabsbar.module.css";

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/logos/react_icon.svg" filename="home.tsx" path="/" />
      <Tab icon="/logos/html_icon.svg" filename="about.html" path="/about" />
      <Tab icon="/logos/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab icon="/logos/js_icon.svg" filename="projects.js" path="/projects" />
      <Tab
        icon="/logos/markdown_icon.svg"
        filename="github.md"
        path="/github"
      />
    </div>
  );
};

export default Tabsbar;

# touched on 2025-08-14T19:56:18.228917Z
# touched on 2025-08-14T19:56:40.080633Z
# touched on 2025-08-14T19:56:52.900986Z
# touched on 2025-08-14T19:56:55.060636Z
# touched on 2025-08-14T19:57:11.709578Z