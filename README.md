<h1 align=center>Vue-Next Starter</h1>

<p align=center>A <a href="https://github.com/vuejs/vue-next">vue-next</a> progressive web application with TypeScript support.</p>

## Overview

A minimal starter app built from scratch configured to use [vite](https://github.com/vitejs/vite) (for other versions see: [cli](https://github.com/davelsan/vue-next-starter/tree/cli-version) | [webpack](https://github.com/davelsan/vue-next-starter)).


## Features

- [TypeScript](https://www.typescriptlang.org/) support using the new [Vue Composition API](https://composition-api.vuejs.org/).
- [Tailwind CSS](https://tailwindcss.com/) for component styling.
- [ESLint](https://eslint.org/) support for both `*.ts` files and SFCs.
- A lite, module-based application structure.

## Develop

The project was designed with `pnpm` in mind, but `yarn` or `npm` will work just fine.

### Clone and Setup

```sh
git clone git@github.com:davelsan/vue-next-starter.git
pnpm install
```

### Command Cheatsheet

```sh
pnpm run build      # compile and minify for production
pnpm run lint       # lint and fix typescript files
pnpm run serve      # compile and hot-reload for development
```

## Configuration

### Lint

Linting is configured to use the recommended `vue3-essential` rules from [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue). For more information, check the [documentation](https://eslint.vuejs.org/rules/). A few extra rules have been added for `template`, `script`  and `*.ts` indentation. There is basic support for linting `*.js` config files, but neither [babel](https://babeljs.io/) or [core-js](https://github.com/zloirock/core-js) are installed.

### Style

The original components have been modified to use [Tailwind CSS](https://tailwindcss.com/) utility classes. Relevant configuration files are `postcss.config.js`, `tailwind.config.js`, and `src/css/tailwind.css`.

### Icons

SVG icons are loaded dynamically using a sprite system via a custom `svg-icon` component. Icons are stored in the `assets/svg-defs.svg` file, located either within the global `src` folder, or inside the corresponding module. When loading module icons, the `module` prop must be passed to the `svg-icon` component.

## Pending

- [ ] Add [Jest](https://jestjs.io/) support (check the [vue-test-utils-next](https://github.com/vuejs/vue-test-utils-next?ref=madewithvuejs.com) docs)
- [ ] Study adding full `.js` support. This will require [babel](https://babeljs.io/), [@vue/babel-preset-app](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app) and [core-js](https://github.com/zloirock/core-js).
- [ ] Keep working on the module-based system, with an emphasis on state management (with and without [Vuex 4](https://github.com/vuejs/vuex/tree/4.0)).
- [ ] Implement PWA functionality.

## Issues

In Apr 16, 2020, [vue-next](https://github.com/vuejs/vue-next) entered the public beta stage. This means that, even though the API has reached feature parity with `v2.x`, bugs are expected. Moreover, the ecosystem is still catching up and many popular packages might not fully work out of the box, yet. Finally, this is an experimental repository created without aid from the official CLI toolchain.

### vue-router

To use [vue-router-next](https://github.com/vuejs/vue-router-next) with TypeScript, a `*.vue` module declaration was added to `shims.d.ts`. Read issues [#7](https://github.com/vuejs/vue-cli-plugin-vue-next/issues/7) and [#18](https://github.com/vuejs/vue-cli-plugin-vue-next/issues/18) for more information, and this [file](https://github.com/vuejs/vue-router-next/blob/master/playground/shim.d.ts) for an example.

### hot reload

HMR does not trigger on changes to static content. Read issue [#1669](https://github.com/vuejs/vue-loader/issues/1669) for more information.