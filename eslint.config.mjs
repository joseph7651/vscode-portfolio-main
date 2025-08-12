import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];
export default eslintConfig;

# touched on 2025-08-14T19:15:44.518481Z
# touched on 2025-08-14T19:55:36.657091Z
# touched on 2025-08-14T19:55:40.899453Z
# touched on 2025-08-14T19:56:18.228672Z
# touched on 2025-08-14T19:57:38.707162Z
# touched on 2025-08-14T19:58:56.859605Z
# touched on 2025-08-14T19:59:03.342176Z