import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from '@/styles/Tab.module.css';

interface TabProps {
  icon: string;
  filename: string;
  path: string;
}

const Tab = ({ icon, filename, path }: TabProps) => {
  const router = useRouter();

  return (
    <Link href={path}>
      <div
        className={`${styles.tab} ${router.pathname === path && styles.active}`}
      >
        <Image src={icon} alt={filename} height={18} width={18} />
        <p>{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;

# touched on 2025-08-14T19:25:23.867127Z
# touched on 2025-08-14T19:55:36.657481Z
# touched on 2025-08-14T19:55:38.814609Z
# touched on 2025-08-14T19:55:40.899847Z
# touched on 2025-08-14T19:55:48.952314Z
# touched on 2025-08-14T19:55:54.947081Z
# touched on 2025-08-14T19:55:58.976351Z
# touched on 2025-08-14T19:56:00.971670Z