JS Webpack Bootstrap
====================

Boilerplate configuration and repository structure for a Web Frontend JS project using Webpack.

I will try to keep this up to date with the latest dependency versions.

## Basic setup:

* (`npm cache clean --force`)
* `npm init`
* Webpack, Plugins and Loaders:
	* `npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin favicons favicons-webpack-plugin babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react css-loader style-loader webpack-bundle-analyzer`
* React:
	* `npm install react react-dom`
* Jest for testing:
	* `npm install --save-dev jest`
* Add commands for building, cleaning, testing, running, **(TODO)** linting and bundle analysis

## Inclusions:

* Webpack
	* webpack-cli
	* webpack-dev-server (for local execution)
	* html-webpack-plugin (for automatic HTML generation, but no template)
	* favicons-webpack-plugin (for automatic Favicon generation, plus a default favicon)
	* \[Built-in\] HotModuleReplacementPlugin (for hot-swapping locally running code)
* React (and ReactDOM)
* Babel
	* @babel/preset-env (for transpiling ES2015+)
	* @babel/preset-react (for transipiling JSX)
* Webpack-recommended source maps
* Bundle Analysis

## Exclusions:

* Yarn
* TypeScript support
* Flow (prefer TypeScript)
* React extras (react-intl, react-router, etc)
* Styling libraries (SCSS, styled-components, etc)
* State management (Redux, ModX, etc)

## Webpack Configuration Notes

* Adding `{ runtime: 'automatic'}` to `@babel/preset-react` removes the need to `import React from 'react'` in every source file using JSX.
* HtmlWebpackPlugin will likely get more complex later, if using a template for `index.html`.
