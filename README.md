<h1 align=center>Vue-Next Starter</h1>

<p align=center>A <a href="https://github.com/vuejs/vue-next">vue-next</a> single page application with TypeScript support.</p>

<p align="center">
    <a href="https://actions-badge.atrox.dev/davelsan/vue-next-starter/goto?ref=master">
      <img alt="Build Status" src="https://github.com/davelsan/vue-next-starter/workflows/build/badge.svg?branch=master"/>
    </a>
    <a href="https://github.com/davelsan/vue-next-starter/blob/master/LICENSE">
      <img alt="License" src="https://img.shields.io/github/license/davelsan/vue-next-starter"/>
    </a>
</p>

## Overview

A minimal starter app built from scratch configured to use [webpack](https://webpack.js.org/). The main benefits of not using the [Vue CLI](https://cli.vuejs.org/) are full access to webpack configuration, and having a non-flat `node_modules` folder structure managed by [pnpm](https://pnpm.js.org/). For a CLI or Vite version of the app, see the [cli-version](https://github.com/davelsan/vue-next-starter/tree/cli-version) and [vite-version](https://github.com/davelsan/vue-next-starter/tree/vite-version) branches, respectively.


## Features

- [TypeScript](https://www.typescriptlang.org/) support using the new [Vue Composition API](https://composition-api.vuejs.org/).
- [Tailwind CSS](https://tailwindcss.com/) for component styling.
- [ESLint](https://eslint.org/) support for both `*.ts` files and SFCs.

### Pending

- [ ] Try the the new [sfc-script-setup](https://github.com/vuejs/rfcs/blob/sfc-improvements/active-rfcs/0000-sfc-script-setup.md) syntax.
- [ ] Use [vue-svg-loader](https://github.com/visualfanatic/vue-svg-loader/tree/dev#webpack) (it recently added support for vue 3).
- [ ] Add [Jest](https://jestjs.io/) support (check the [vue-test-utils-next](https://github.com/vuejs/vue-test-utils-next?ref=madewithvuejs.com) docs).
- [ ] Keep an eye out for improvements to the the module-based architecture, especially in regards to state management (with or without [Vuex 4](https://github.com/vuejs/vuex/tree/4.0)).
- [ ] Implement PWA functionality.


## Develop

The project was designed with `pnpm` in mind, but `yarn` or `npm` will work just fine.

### Clone

```sh
git clone git@github.com:davelsan/vue-next-starter.git
```

### Scripts

```sh
pnpm install        # install node modules
pnpm run build      # compile and minify for production
pnpm run lint       # lint and fix typescript files
pnpm run serve      # compile and hot-reload for development
```

## Deploy

This repository includes a [workflow](.github/workflows/build.yml) that will automatically deploy the app to [GitHub Pages](https://pages.github.com) on every `push` to the `master` branch. It uses `pnpm` to build for production, and will save and reuse the cached packages.

The `vue-router-next` package is configured use `hash` mode. To deploy using history or memory modes, read the [relevant section](https://next.router.vuejs.org/guide/essentials/history-mode.html#hash-mode) in the docs. The `BASE_URL` environment variable in [.env-cmdrc](.env-cmdrc) controls the base route in which the app is deployed to.

This page features a [live demo](https://davelsan.github.io/vue-next-starter/#/) showcasing the deployed repository using the current configuration.


## Configuration

### Lint

Linting is configured to use the recommended `vue3-essential` rules from [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue). For more information, check the [documentation](https://eslint.vuejs.org/rules/). A few extra rules have been added for `template`, `script`  and `*.ts` indentation. There is basic support for linting `*.js` config files, but neither [babel](https://babeljs.io/) or [core-js](https://github.com/zloirock/core-js) are installed.

### Styles

The original components have been modified to use [Tailwind CSS](https://tailwindcss.com/) utility classes. Relevant configuration files are `postcss.config.js`, `tailwind.config.js`, and `src/css/tailwind.css`.

### Icons

SVG icons are bundled by the [`svg-sprite-loader`](https://github.com/JetBrains/svg-sprite-loader) plugin. An `*.svg` sprites file is supplied by each individual module, and should be imported at the entry component.

Icons are dynamically loaded via a shared [`svg-icon`](./src/modules/shared/components/svg-icon/svg-icon.vue) component. The `id` and `module` (imported `*.svg` filename without extension) props are required to generate the correct path to the sprite.

An example can be found in the [`home.vue`](./src/modules/home/home.vue) component.

## Troubleshooting

### vue-router

To use [vue-router-next](https://github.com/vuejs/vue-router-next) with TypeScript, a `*.vue` module declaration was added to `shims.d.ts`. Read issues [#7](https://github.com/vuejs/vue-cli-plugin-vue-next/issues/7) and [#18](https://github.com/vuejs/vue-cli-plugin-vue-next/issues/18) for more information, and this [file](https://github.com/vuejs/vue-router-next/blob/master/playground/shim.d.ts) for an example.
