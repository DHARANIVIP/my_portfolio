import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    root: 'Dharani_portfolio',
    plugins: [react()],
    build: {
        outDir: '../dist', // Output to root dist folder
        emptyOutDir: true,
        // Enable code splitting
        rollupOptions: {
            output: {
                manualChunks: {
                    // Split vendor code
                    'react-vendor': ['react', 'react-dom', 'react-router-dom'],
                    'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
                    'animation-vendor': ['framer-motion', 'animejs'],
                },
            },
        },
        // Optimize chunk size
        chunkSizeWarningLimit: 1000,
        // Enable minification with esbuild (default, faster than terser)
        minify: 'esbuild',
    },
    // Optimize dependencies
    optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom'],
    },
})
