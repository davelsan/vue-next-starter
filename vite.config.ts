import { UserConfig } from 'vite';
import { resolve as pathResolve } from 'path';


const config: UserConfig = {

  alias: {
    '/@/': pathResolve(__dirname, 'src'),
    '/@assets/': pathResolve(__dirname, '/src/assets'),
    '/@shared/': pathResolve(__dirname, '/src/modules/shared'),
  },
  mode: process.env.NODE_ENV,
};

export default config;