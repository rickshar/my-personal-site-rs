# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

This repository is configured to publish to GitHub Pages through GitHub Actions.

When changes are pushed to the `main` branch, the workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml) will build the site and deploy it automatically.

To enable it in GitHub:

1. Open your repository Settings → Pages.
2. Set the source to GitHub Actions.
3. Push to `main` to trigger the deployment.

For local builds, use:

```bash
npm run build
```
