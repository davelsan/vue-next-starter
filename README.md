<h1 align=center>Vue-Next Starter</h1>

<p align=center>A <a href="https://github.com/vuejs/vue-next">vue-next</a> progressive web application with TypeScript support.</p>

## Overview

This branch contains a minimal starter app created by [Vue CLI 3](https://cli.vuejs.org/) and [cli-plugin-vue-next](https://github.com/vuejs/vue-cli-plugin-vue-next). The function of this branch is to stay in-sync with upstream changes, using the official channels.

## Features

- [TypeScript](https://www.typescriptlang.org/) support via the new [Vue Composition API](https://composition-api.vuejs.org/).
- JavaScript support with [babel]() polyfills and JSX transpiling.
- [Tailwind CSS](https://tailwindcss.com/) for component styling.
- [ESLint](https://eslint.org/) for code linting in JavaScript, TypeScript and SFCs.
- A lite, module-based application structure.

## Develop

The project was created with [pnpm](https://pnpm.js.org/), but `yarn` or `npm` will work just fine.

### Clone and Setup

```sh
git clone git@github.com:davelsan/vue-next-starter.git
pnpm install
```

### Command Cheatsheet

```sh
pnpm run serve      # compile and hot-reload for development
pnpm run build      # compile and minify for production
pnpm run lint       # lint and fix typescript files
```

## Configuration

### Lint

Linting is configured to use the recommended `vue3-essential` rules from [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue). For more information, check the [documentation](https://eslint.vuejs.org/rules/). A few extra rules have been added for `template`, `script`  and `*.ts` indentation. Linting of `*.js` files has been disabled via `.eslintignore`.

### Style

The original components have been modified to use [Tailwind CSS](https://tailwindcss.com/) utility classes. Relevant configuration files are `postcss.config.js`, `tailwind.config.js`, and `src/css/tailwind.css`.

## Pending

- [ ] Add unit tests (check the [vue-test-utils-next](https://github.com/vuejs/vue-test-utils-next?ref=madewithvuejs.com) docs)
- [ ] Keep working on the module-based system, with an emphasis on state management (with and without [Vuex 4](https://github.com/vuejs/vuex/tree/4.0)).
- [ ] Build from scratch

## Issues

In Apr 16, 2020, [vue-next](https://github.com/vuejs/vue-next) entered the public beta stage. This means that, even though the API has reached feature parity with `v2.x`, bugs are expected. Moreover, the ecosystem is still catching up and many popular packages might not fully work out of the box, yet.


### vue-router

To use [vue-router-next](https://github.com/vuejs/vue-router-next) with TypeScript, a [shims.d.ts](https://github.com/vuejs/vue-router-next/blob/master/playground/shim.d.ts) declaration file was added to the `src/` folder. Read issues [#7](https://github.com/vuejs/vue-cli-plugin-vue-next/issues/7) and [#18](https://github.com/vuejs/vue-cli-plugin-vue-next/issues/18) for more information.
