export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  watchers: number;
  forks: number;
  stargazers_count: number;
  html_url: string;
  homepage: string;
}

export interface User {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
}

# touched on 2025-08-14T19:55:56.992247Z
# touched on 2025-08-14T19:56:00.971588Z
# touched on 2025-08-14T19:57:14.327005Z