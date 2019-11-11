// src/Modules/GitHub/Octokit.ts
import Octokit from '@octokit/rest';
import { config } from '../../Config';

export const octokit = new Octokit({ auth: config.githubAuth.apiToken });
