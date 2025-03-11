import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',
    build:{
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            index: 'src/index.html',
            grid: 'src/grid.html',
            display: 'src/display.html',
            table: 'src/table.html',
            position: 'src/position.html',
            image: 'src/image.html'
        }
    },
    server:{
        port: 3000,
        open: true,
    }
});