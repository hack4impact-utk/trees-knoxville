# Trees Knoxville
Interactive map for the Trees Knoxville organization.
## Tech Stack
**Frontend:** Next.js/React

**Backend**: MongoDB, Next.js, Google Maps,

**Testing**: Jest

## Dependencies
yarn (package manager simliar to npm)

## How to Run
1. Clone the repository.
2. Run `yarn` or `yarn install` to install/update
3. Run yarn dev for development mode with hot-code reloading, error reporting, and more.
4. Open http://localhost:3000 with your web browser to see the result.

Note: Running yarn build then yarn start will start the application in production mode.
## Tools Used
* Jira for issue tracking
* Figma for mockups
* Confluence for formal documents
## Code/PR Workflow
* Create a new branch in the format `[GITHUB_USERNAME]/TKW-[JIRA ISSUE NUMBER]-[SHORT_DESCRIPTION]` by running `git checkout -b [BRANCH NAME]`
  * This way the issues are closed on Jira when we merge the PR with that branch name
### Example Branch
    rluberto/TKW-12-init-project

* Be sure to lint, format, and type-check your code occasionally to catch errors by running `yarn lint`.
* Commit changes.
* Then push your branch by running `git push -u origin [BRANCH NAME]`. This pushes your branch to remote.
* Create a pull request (PR) on GitHub to merge your branch into `develop`. `main` will serve as production.
* In your PR, briefly describe the changes, then tag Trevor (trevormangrum) and Ray (rluberto) to the PR. Others are welcome to comment and give feedback as well.

## Project Structure
* `src/components/`: Contains most of our front-end code. This is where we put our React components.
* `src/pages/`: Contains files that are associated with a route based on its file name. For more information, see Next.js' [docs](https://nextjs.org/docs/basic-features/pages).
* `public/`: Stores static files like images, see Next.js' [docs](https://nextjs.org/docs/basic-features/static-file-serving).
* `tst/`: Contains files for testing backend code.
* `server/`: Contains almost all of our backend code. This is where we put our business logic. 
* `utils/`: For code used across root directories.
* `styles/`: Contains our SCSS files for global styling, variables, and mixins.
