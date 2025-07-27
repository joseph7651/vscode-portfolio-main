import { Project } from "@/types";

import styles from "@/styles/ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;

# touched on 2025-08-14T19:25:23.864543Z
# touched on 2025-08-14T19:34:04.856840Z
# touched on 2025-08-14T19:55:38.813368Z
# touched on 2025-08-14T19:55:44.855296Z
# touched on 2025-08-14T19:56:20.949558Z
# touched on 2025-08-14T19:56:52.900738Z
# touched on 2025-08-14T19:57:01.341427Z
# touched on 2025-08-14T19:57:14.326663Z
# touched on 2025-08-14T19:57:18.458040Z