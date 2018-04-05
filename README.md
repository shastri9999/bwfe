![Logo of the project](./src/images/logo.png)

# BW Todos!

> A simple todo app for Employees and Managers

React + TypeScript + Redux + React Router 4 + Webpack + Sass

## Getting started

```shell
git clone git@github.com:shastri9999/bwfe.git
cd bwfe
yarn install
```

Above commands will install all the project production and dev dependencies.

> **_Note:_** Install dependencies through [`yarn`](https://yarnpkg.com/en/) only, don't use npm install.

## Linting

TSLint and Prettier are used with standard presets for liniting and following consistent code guide. Following can be run to do typechecking, linting or both

```shell
yarn check:type # type checking
yarn check:lint # linting
yarn check:all # Both type checking and linting, in that order
```

## Development

During development you can run webpack-dev-server using following npm(yarn) script command

```shell
yarn start
```

## Building Serving

You can run `yarn build` to build the project into dist/ folder.

```shell
yarn build
```

You can choose to deploy this as per your requirement or testing using `yarn serve` which is configured to use spa-http-server.

## Hosted at

[`Firebase`](https://bwfe-81b2c.firebaseapp.com)
