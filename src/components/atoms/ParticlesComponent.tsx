import React, { useEffect } from 'react';

const ParticlesComponent = () => {
    useEffect(() => {
        // Load particles.js after the component mounts
        window.particlesJS.load('particles-js', '/particlesjs-config.json', function () {
            console.log('callback - particles.js config loaded');
        });
    }, []);

    return (
        <div id="particles-js" style={{ backgroundColor: '#252A34', width: '100%', height: '100%', margin: 0, padding: 0 }}></div>
    );
};

export default ParticlesComponent;
