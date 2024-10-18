// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: '/Calculator_MERN-stack/',
//   plugins: [react()],
//   server:{
//     proxy: {
//       '/api': 'http://localhost:3000',
//     },
//   },
//   build: {
//     rollupOptions: {
//       external: ['react-router-dom']
//     }
//   }
// })






// export default {
//   base: '/Calculator_MERN-stack/',
//   build: {
//     rollupOptions: {
//       external: ['axios']
//     },
//     outDir: 'dist',
//   }
// };






export default {
  base: '/Calculator_MERN-stack/',
  build: {
    outDir: 'dist',
  }
};
