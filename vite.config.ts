import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import react from '@vitejs/plugin-react';
import antdDayjs from 'antd-dayjs-vite-plugin';
import { resolve } from 'path';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { defineConfig } from 'vite';

const getPlugin = (mode: 'development' | 'production') => {
  const defaultPlugin = [
    getBabelOutputPlugin({
      allowAllFormats: true,
      exclude: 'node_modules/**', // 只编译源代码
      extensions: ['.ts', '.tsx'],
      plugins: ['@babel/plugin-proposal-optional-chaining'],
    }),
    json(),
    nodeResolve(),
    react(),
    commonjs(),
  ];
  if (mode !== 'development') {
    defaultPlugin.unshift({
      ...typescript({
        check: true,
        tsconfig: resolve(__dirname, './tsconfig.json'), // your tsconfig.json path
        tsconfigOverride: {
          compilerOptions: {
            sourceMap: false,
            declaration: true,
            declarationMap: false,
          },
        },
        abortOnError: true,
      }),
      enforce: 'pre',
    } as any);
  }

  return defaultPlugin;
};

// https://vitejs.dev/config/
export default defineConfig((config: any) => {
  console.log(config);
  return {
    plugins: getPlugin(config.mode),
    resolve: {
      alias: {
        '@': resolve('./package'),
      },
    },
    build: {
      sourcemap: false,
      cssCodeSplit: false,
      lib: {
        entry: resolve(__dirname, 'package/index.ts'),
        name: 'Rats',
        formats: ['umd'],
        fileName: 'index',
      },
      outDir: 'dist',
      emptyOutDir: true,
      rollupOptions: {
        external: [
          'react',
          'antd',
          'antd/dist/antd.css',
          'dayjs',
          './dayjs',
          'react-dom/client',
        ],
        output: {
          exports: 'named',
          globals: {
            react: 'React',
            'react-dom/client': 'ReactDOM',
            antd: 'antd',
            dayjs: 'dayjs',
            './dayjs': 'dayjs',
            'antd/dist/antd.css': 'antd',
          },
        },
        plugins: [json()],
      },
      terserOptions: {
        compress: {
          ecma: 2015,
          drop_console: false,
        },
      },
      commonjsOptions: {
        sourceMap: false,
      },
    },
  };
});
