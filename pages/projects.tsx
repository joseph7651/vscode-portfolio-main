import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

import styles from '@/styles/ProjectsPage.module.css';

const ProjectsPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Projects</h1>
      <p className={styles.pageSubtitle}>
        Here&apos;s a collection of my recent work. These projects showcase my
        skills in web development, design, and problem-solving.
      </p>

      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Projects' },
  };
}

export default ProjectsPage;

# touched on 2025-08-14T19:25:23.865826Z
# touched on 2025-08-14T19:55:48.952957Z
# touched on 2025-08-14T19:55:54.948496Z
# touched on 2025-08-14T19:57:01.340921Z