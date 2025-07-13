import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'es2018',
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        locations: 'pages/locations.html',
        faq: 'pages/faq.html',
        nmcp: 'pages/nmcp-program.html'
      },
      output: {
        manualChunks: {
          vendor: ['three'],
          maps: ['assets/js/locations.js', 'assets/js/maps.js']
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server: {
    port: 3000,
    host: true,
    open: true
  },
  css: {
    postcss: {
      plugins: [
        require('autoprefixer'),
        require('cssnano')({
          preset: 'default'
        })
      ]
    }
  },
  optimizeDeps: {
    include: ['feather-icons']
  }
})