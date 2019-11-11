// src/Modules/Git/cloneRepo.ts
import { TeamsListReposResponseItem } from '@octokit/rest';
import { Clone, Repository } from 'nodegit';
import { resolve } from 'path';
import { config } from '../../Config';
import { pathExists } from 'fs-extra';

export async function cloneRepo(
  repo: TeamsListReposResponseItem,
): Promise<Repository> {
  const { username, apiToken } = config.githubAuth;

  const path = resolve(`${config.dataPath}/${repo.owner.login}/${repo.name}`);

  const repoExists = await pathExists(`${path}/.git`);
  if (repoExists) return Repository.open(path);

  const cloneURL = repo.clone_url.replace(
    'https://',
    `https://${username}:${apiToken}@`,
  );

  return Clone.clone(cloneURL, path);
}
