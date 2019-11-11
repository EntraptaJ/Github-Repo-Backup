// src/Config/index.ts
import dotenv from 'dotenv';

dotenv.config();

/**
 * Git Repo Backup - Configuration Options
 */
interface Config {
  /**
   * Github Authentication
   */
  githubAuth: {
    /**
     * Github Username
     */
    username: string;

    /**
     * Github API Token
     */
    apiToken: string;
  };

  /**
   * Path of persistent data folder
   */
  dataPath: string;
}

/**
 * Git Repo Backup - Configuration
 */
export const config: Config = {
  githubAuth: {
    username: process.env.GITHUB_USERNAME!,
    apiToken: process.env.GITHUB_API_TOKEN!,
  },

  dataPath:
    process.env.DATA_PATH || process.env.NODE_ENV === 'production'
      ? '/data'
      : 'data',
};
