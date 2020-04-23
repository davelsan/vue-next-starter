declare module '*.vue' {
  import { ComponentOptions } from 'vue';
  const component: ComponentOptions;
  export default component;
}

declare module 'vue-loader/dist/plugin' {
  import { Plugin, Compiler } from 'webpack';
  export class VueLoaderPlugin implements Plugin {
    apply(compiler: Compiler): void;
  }
}
