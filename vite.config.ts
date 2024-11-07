import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    build: {
        target: 'esnext',
        minify: 'terser',
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'cmmv',
            fileName: (format) => `cmmv.${format}.js`,
            formats: ['es', 'cjs', 'umd', 'iife']
        },
        rollupOptions: {
            external: ['vue'],                  
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')    
        }
    }
})