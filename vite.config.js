import { defineConfig } from 'vite'

export default defineConfig({
        root: 'src',
        base: './',
        publicDir: '../public',
        build: {
                outDir: '../public',
                emptyOutDir: true,
        },
        server: {
                port: 3000,
        },
})
