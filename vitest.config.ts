import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'node_modules')
        },
    },
    test: {
        globals: true,
        environment: 'node',
    },
});
