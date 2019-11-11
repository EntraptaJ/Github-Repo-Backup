// src/index.ts
import { cloneRepo } from './Modules/Git';
import { getRepos } from './Modules/GitHub';

async function startGitBackups(): Promise<void> {
  console.log('Starting Git Backups');

  const reposInfo = await getRepos();

  const repos = await Promise.all(reposInfo.map(cloneRepo));

  await Promise.all(repos.map(repo => repo.fetch('origin')));
}

startGitBackups();
