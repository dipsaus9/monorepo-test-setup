# Storybook

## Storybook 7

Storybook 7 is currently still in alpha stage and is expected to contain bugs, for example the production build seems to be broken beyond the first page load. Don't hesitate to create an issue with storybook, if one doesn't exist already, to see it resolved sooner rather than later.

## Getting started

### Installing dependencies

```shell
pnpm install
```

### Starting the development server

```shell
pnpm dev
```

### Building the production application

```shell
pnpm build
```

### Preview the production application

```shell
pnpm preview
```

## "Standalone" application

### Storybook peer dependencies

Normally the following dependencies are peerDependencies, and would use the version provided by your application:

- @babel/core
- react
- react-dom
- typescript

Since we're shipping storybook as a standalone application in our monorepo we need to provide it with its own
dependencies.

### Storybook composition

In the future we might opt to ship each package and app with its own storybook instance and use [Storybook Composition](https://storybook.js.org/docs/7.0/react/sharing/storybook-composition)
to combine them into a single storybook application.
