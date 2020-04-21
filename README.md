<h1 align=center>Vue-Next Starter</h1>

<p align=center>A <a href="https://github.com/vuejs/vue-next">vue-next</a> progressive web application with TypeScript support.</p>

## Features

A minimal starter app based on the [cli-plugin-vue-next](https://github.com/vuejs/vue-cli-plugin-vue-next), with the following features:

- [TypeScript](https://www.typescriptlang.org/) support via the new [Vue Composition API](https://composition-api.vuejs.org/).
- [Tailwind CSS](https://tailwindcss.com/) for component styling.
- A lite, module-based application structure.

## Develop

The project was installed with [pnpm](https://pnpm.js.org/), but `yarn` or `npm` will work just fine.

### Clone and Setup

```sh
git clone git@github.com:davelsan/vue-next-starter.git
pnpm install
```

### Command Cheatsheet

```sh
pnpm run serve      # compile and hot-reload for development
pnpm run build      # compile and minify for production
pnpm run test:unit  # run unit tests (not implemented)
pnpm run lint       # lint and fix typescript files
```

## Configuration

### ESLint

Linting is configured to use the recommended `vue3-essential` rules from [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue). For more information, check the [documentation](https://eslint.vuejs.org/rules/). A few extra rules have been added for `template`, `script`  and `*.ts` indentation. Linting of `*.js` files has been disabled via `.eslintignore`.

### Styles

The original components have been modified to use [Tailwind CSS](https://tailwindcss.com/) utility classes. Relevant configuration files are `postcss.config.js`, `tailwind.config.js`, and `src/css/tailwind.css`.

## Pending

- [ ] Add unit tests (check the [vue-test-utils-next](https://github.com/vuejs/vue-test-utils-next?ref=madewithvuejs.com) docs)
- [ ] Keep working on the module-based system, with an emphasis on state management (with and without [Vuex 4.0](https://github.com/vuejs/vuex/tree/4.0)).
- [ ] Build from scratch

## Troubleshoot

In Apr 16, 2020, [vue-next](https://github.com/vuejs/vue-next) entered the public beta stage. This means that, even though the API has reached feature parity with `v2.x`, bugs are expected. Moreover, the ecosystem is still catching up and many popular packages might not fully work out of the box, yet.

Below I'll list some of the issues I run into while developing this repository.

### Router

To use [vue-router-next](https://github.com/vuejs/vue-router-next) with TypeScript, a [shims.d.ts](https://github.com/vuejs/vue-router-next/blob/master/playground/shim.d.ts) declaration file was added to the `src/` folder. Read issues [#7](vuejs/vue-cli-plugin-vue-next/issues/7) and [#18](https://github.com/vuejs/vue-cli-plugin-vue-next/issues/18) for more information.
