React TypeScript Webpack Boilerplate
====================================

Boilerplate configuration and repository structure for a modern React + TypeScript web application using Webpack, with ESLint, Prettier, and Jest pre-configured.

I've attempted to break down the commit history into logical and understandable chunks.

## Commands

### Development
* `npm start` or `npm run start:dev` - Start development server on port 3000
* `npm run start:prod` - Start production server

### Building
* `npm run build` - Production build
* `npm run build:dev` - Development build
* `npm run build:prod` - Production build (explicit)

### Testing
* `npm test` - Run Jest tests
* `npm run test:coverage` - Run tests with coverage report

### Code Quality
* `npm run lint` - Lint source files with ESLint
* `npm run lint:fix` - Auto-fix linting issues
* `npm run format` - Format code with Prettier
* `npm run format:check` - Check code formatting
* `npm run type-check` - TypeScript type checking

### Analysis & Cleanup
* `npm run analyze:bundle` - Generate and analyze webpack bundle
* `npm run clean` - Remove dist directory
* `npm run clean:all` - Remove dist and node_modules

## Basic setup:

* (`npm cache clean --force`)
* `npm init`
* Webpack, Plugins and Loaders:
	* `npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin favicons favicons-webpack-plugin css-loader style-loader webpack-bundle-analyzer`
* TypeScript and Type Definitions:
	* `npm install --save-dev typescript ts-loader @types/react @types/react-dom @types/jest`
* Babel (for JavaScript files and Jest):
	* `npm install --save-dev babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react`
* React:
	* `npm install react react-dom`
* Testing with TypeScript support:
	* `npm install --save-dev jest ts-jest jest-environment-jsdom`
* Linting and Formatting:
	* `npm install --save-dev eslint @eslint/js @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks prettier eslint-plugin-prettier eslint-config-prettier`

## Inclusions:

* TypeScript
	* `typescript` (TypeScript compiler)
	* `ts-loader` (for Webpack integration)
	* Type definitions for React, ReactDOM, and Jest
	* `tsconfig.json` (TypeScript configuration)
* Webpack
	* `webpack-cli`
	* `webpack-dev-server` (for local execution)
	* `html-webpack-plugin` (for automatic HTML generation)
	* `favicons-webpack-plugin` (for automatic Favicon generation, plus a default favicon)
	* \[Built-in\] `HotModuleReplacementPlugin` (for hot-swapping locally running code)
	* `webpack-bundle-analyzer` (for bundle analysis)
	* Webpack-recommended source maps configuration
	* Asset modules for images, fonts, and other resources
* React 18 (with ReactDOM)
	* Modern `createRoot` API
	* Automatic JSX runtime (no need to import React)
* Babel (for JavaScript files and Jest)
	* `@babel/preset-env` (for transpiling ES2015+)
	* `@babel/preset-react` (for transpiling JSX with automatic runtime)
* Jest with TypeScript support
	* `ts-jest` (TypeScript preprocessor for Jest)
	* `jest-environment-jsdom` (for React component testing)
	* `babel.config.cjs` (for Jest with CommonJS)
	* `jest.config.js` (with resource mocking and TypeScript support)
* ESLint with TypeScript support
	* `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin`
	* React and React Hooks plugins
	* Prettier integration
	* `eslint.config.js` (flat config format)
* Prettier
	* Code formatting with ESLint integration
	* Format on save capability
* CSS Support
	* `css-loader` and `style-loader` for importing CSS files

## Exclusions:

* Yarn
* React extras (react-intl, react-router, etc)
* Styling libraries (SCSS, Less, styled-components, etc)
* State management (Redux, MobX, etc)
* Testing libraries beyond Jest (React Testing Library, Enzyme, etc)

## Configuration Notes

### Webpack Configuration
* TypeScript files (.ts, .tsx) are handled by `ts-loader`
* JavaScript files still use Babel loader for compatibility
* Adding `{ runtime: 'automatic'}` to `@babel/preset-react` removes the need to `import React from 'react'` in every source file using JSX
* HtmlWebpackPlugin generates index.html automatically
* Asset modules handle images, fonts, and other static files
* Source maps configured for both development (eval-source-map) and production (source-map)
* Hot Module Replacement enabled in development mode

### TypeScript Configuration
* Strict mode enabled for better type safety
* JSX support configured for React
* Module resolution set to Node
* ES modules as output format
* Type definitions in `src/types/` for custom declarations

### Project Structure
* Entry point: `src/index.tsx`
* Main component: `src/app/index.tsx`
* Build output: `dist/` directory
* Custom type definitions: `src/types/`
* Test files: Use `.test.ts` or `.test.tsx` extensions
