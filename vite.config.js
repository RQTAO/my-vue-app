import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
// import ElementPlus from 'unplugin-element-plus/vite'
export default defineConfig(({command,mode}){
  const env = loadEnv(mode,process.cwd(),'');
    console.log(import.meta.env,process.cwd());
    return {
        base:'/JSlearn.github.io/',
        // clearScreen:true,
        // envPrefix:"APP_"
        server:{
            // port:3000,
            // strictPort:true
            open:"index.html"
        },
        // logLevel:"silent",
        envDir:'dirname'
    }
  plugins: [
    vue(),
    // ElementPlus(),
    // ...
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
  ],
  //这个是resolve添加的别名
  resolve:{
    alias:[
      {
        find: "@",
        replacement: "/src",
      },
    ],
  },
});
