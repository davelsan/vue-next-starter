<h1 align=center>Vue-Next Starter</h1>

<p align=center>A <a href="https://github.com/vuejs/vue-next">vue-next</a> progressive web application with TypeScript support.</p>

## Overview

This branch contains a minimal starter app built from scratch, configured to use [webpack](https://webpack.js.org/). The main benefits of not using the [Vue CLI](https://cli.vuejs.org/) are full access to webpack configuration, and having a non-flat `node_modules` folder structure managed by [pnpm](https://pnpm.js.org/).


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
pnpm run stats      # generate a source-map-explorer report
```

## Configuration

### Lint

Linting is configured to use the recommended `vue3-essential` rules from [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue). For more information, check the [documentation](https://eslint.vuejs.org/rules/). A few extra rules have been added for `template`, `script`  and `*.ts` indentation. There is basic support for linting `*.js` config files, but neither [babel](https://babeljs.io/) or [core-js](https://github.com/zloirock/core-js) are installed.

### Style

The original components have been modified to use [Tailwind CSS](https://tailwindcss.com/) utility classes. Relevant configuration files are `postcss.config.js`, `tailwind.config.js`, and `src/css/tailwind.css`.

## Pending

- [ ] Add [Jest](https://jestjs.io/) support (check the [vue-test-utils-next](https://github.com/vuejs/vue-test-utils-next?ref=madewithvuejs.com) docs)
- [ ] Study adding full `.js` support. This will require [babel](https://babeljs.io/), [@vue/babel-preset-app](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app) and [core-js](https://github.com/zloirock/core-js).
- [ ] Keep working on the module-based system, with an emphasis on state management (with and without [Vuex 4](https://github.com/vuejs/vuex/tree/4.0)).
- [ ] Check that PWA functionality works correctly.
- [ ] Customize webpack build output.

## Issues

In Apr 16, 2020, [vue-next](https://github.com/vuejs/vue-next) entered the public beta stage. This means that, even though the API has reached feature parity with `v2.x`, bugs are expected. Moreover, the ecosystem is still catching up and many popular packages might not fully work out of the box, yet. Finally, this is an experimental repository created without aid from the official CLI toolchain.

### source-map-explorer

Bundle size is analyzed using [source-map-explorer](https://github.com/danvk/source-map-explorer). For the transpiled `{home,about}.js` components, there is a significant unmapped percentage. The `main.css` map cannot be parsed, possibly due to a problem with the way I configured the `/\.css$/` rule in `webpack.config.ts`.

### vue-router

To use [vue-router-next](https://github.com/vuejs/vue-router-next) with TypeScript, a `*.vue` module declaration was added to `shims.d.ts`. Read issues [#7](https://github.com/vuejs/vue-cli-plugin-vue-next/issues/7) and [#18](https://github.com/vuejs/vue-cli-plugin-vue-next/issues/18) for more information, and this [file](https://github.com/vuejs/vue-router-next/blob/master/playground/shim.d.ts) for an example.

### webpack

To allow the named `VueLoaderPlugin` export in `webpack.config.ts`, a `vue-loader` module declaration was added in `shims.d.ts`. A `@ts-ignore` flag was also added to the `new` instance in the plugins section. This should be fixed as soon as the corresponding type export is added to the package (see [PR#1542](https://github.com/vuejs/vue-loader/pull/1542) for a good example).