// src/Modules/GitHub/getRepos.ts
import {
  Response,
  TeamsListReposResponse,
  TeamsListReposResponseItem,
} from '@octokit/rest';
import { octokit } from './Octokit';

export async function getRepos(): Promise<TeamsListReposResponseItem[]> {
  let repos: TeamsListReposResponseItem[] = [];
  let dataFinished = false;
  let countPerPage = 100;

  for (let i = 0; dataFinished === false; i++) {
    const repoData: Response<TeamsListReposResponse> = await octokit.repos.list(
      {
        per_page: countPerPage,
        page: i,
        type: 'owner',
      },
    );
    repos.push(...repoData.data);

    if (repoData.data.length < countPerPage) dataFinished = true;
  }

  return repos;
}
