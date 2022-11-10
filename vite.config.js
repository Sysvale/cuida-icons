import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginRequire from "vite-plugin-require";
import path from 'path'

// export default {
// 	plugins: [
//     vue(),
// 		vitePluginRequire({
// 			// @fileRegex RegExp
// 			// optional：default file processing rules are as follows
// 			// fileRegex:/(.jsx?|.tsx?|.vue)$/
// 		}),
// 	],
// };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: [ 
      { find: "@", replacement: path.resolve(__dirname, './src') },
    ],
  },
})
