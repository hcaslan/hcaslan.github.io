// src/global.d.ts
interface Window {
    particlesJS: {
        load: (domId: string, path: string, callback?: () => void) => void;
    };
}