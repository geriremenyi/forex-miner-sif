# forex-miner-sif

Frontend implementation for forex-miner.com. The repo's name is coming from the Norse mythology, in which [Sif](https://en.wikipedia.org/wiki/Sif) is a goddess associated with Earth and the wife of the thunder god Thor.

## Getting started

### Prerequisites

- [Node](https://nodejs.org/en/) to build, run etc.
- [Yarn](https://classic.yarnpkg.com/en/docs/install) for package dependencies.
- [Docker](https://www.docker.com/products/docker-desktop) (optional) to containerize.
- [Visual Studio Code](https://code.visualstudio.com/) (optional) as the IDE.

### Local setup

In the project directory, you can run the following commands:

1. Clone this repo
```bash
# HTTPS
https://github.com/geriremenyi/forex-miner-sif.git
# SSH
git@github.com:geriremenyi/forex-miner-sif.git
```

2. Navigate to the root of the project and install all dependencies
```bash
yarn install
```

### Run

To run a local server with the mock backend API execute the following command.
```bash
npm start
```
This runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

### Tests

To run the tests run the following command:
```bash
npm test
```

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Build

To create a production build which uses the [real backend API](https://github.com/geriremenyi/forex-miner-heimdallr) execute the command
```bash
npm run build
```

It builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

## Deployment

This chapter guides you through the CI/CD setup and the deployment steps for the frontend.

### GitHub Actions

There are continuous integration and deployment steps setup as GitHub actions to be able to test on every pull-request and to be able to deliver fast.

#### Continuous integration

All pull request opened against any branches triggers a continuous integration workflow to run.

The steps are defined in the [`continuous_integration.yaml` file](.github/workflows/continuous_integration.yaml).

Recently ran integrations can be found [here](https://github.com/geriremenyi/forex-miner-sif/actions?query=workflow%3A"Continuous+Integration").

#### Continuous deployment

All changes on the [master branch](https://github.com/geriremenyi/forex-miner-sif/tree/master) triggers a deployment to the [kubernetes cluster behind the `forex-miner.com` domain](https://github.com/geriremenyi/forex-miner-asgard).

The steps are defined in the [`continuous_deployment.yaml` file](.github/workflows/continuous_deployment.yaml).

Recently ran deployments can be found [here](https://github.com/geriremenyi/forex-miner-sif/actions?query=workflow%3A"Continuous+Deployment").

To create and deploy a new version of the service run the following:

1. Checkout from [develop branch](https://github.com/geriremenyi/forex-miner-sif/tree/develop) and create a new release branch
```bash
git checkout -b releases/x.y.z
```

2. Bump the version
```bash
# Bump patch version (x.y.z -> x.y.z+1)
./scripts/bump_version patch
# Bump minor version (x.y.z -> x.y+1.z)
./scripts/bump_version minor
# Bump major version (x.y.z -> x+1.y.z)
./scripts/bump_version major
```

3. Commit changes
```bash
git add .
git commit -m "Release x.y.z"
```

4. Checkout, update master and merge it to the release branch
```bash
git checkout master
git pull
git checkout releases/x.y.z
git merge master --strategy-option ours
```

5. Push it to GitHub
```bash
git push --set-upstream origin releases/x.y.z
```

6. Open a PR against the [master](https://github.com/geriremenyi/forex-miner-sif/tree/master) and the [develop](https://github.com/geriremenyi/forex-miner-sif/tree/develop) branch

7. After completing the PR against the master branch the CD workflow kicks in and will deploy the new version

### Kubernetes Cluster

The kubernetes deployments are defined under the [k8s folder](k8s).

To deploy the latest docker images to a kubernetes cluster run the following commands.
1. If not yet created, create a namespace called `forex-miner` and add the GitHub Container Registry pull secret to it (can be found in the documentation)
```bash
kubectl create namespace forex-miner
kubectl create secret ghcr-secret pullsecret --docker-server=https://ghcr.io/ --docker-username=notneeded --docker-password={PULL_SECRET_VALUE}
```
2. Deploy app
```bash
kubectl apply -f ./k8s/app.yaml
```
3. Deploy service (to expose the frontend)
```bash
kubectl apply -f ./k8s/service.yaml
```