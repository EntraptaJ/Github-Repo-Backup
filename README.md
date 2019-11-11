# Github Repo Backup

GitHub Repo Backup is a NodeJS Script that backs up all GitHub repositories owned by the user & token

## Requirement

You need to have

## Usage

Clone or download this repository

Move into the cloned/downloaded repository folder.

**Install dependencies**

Install the NPM dependencies

```
npm install
```

**Secrets**

Create a .env file in the repository directory with your GitHub username & API Token

```
GITHUB_USERNAME=ExampleUser
GITHUB_API_TOKEN=ABCDEFG1245
```

**Running Script**

Run the script (Warning this will clone & fetch all repositories you are the owner of. So if space is an issue, don't do it)

```
npm start
```

You should have all of your repositories in `REPO_DIR/data/USERNAME/`
