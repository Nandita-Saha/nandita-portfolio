import React, { useEffect, useRef } from 'react';

const GridDots = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        const colors = ['#808080', '#FFCCCB', '#87CEEB']; // Gray, Light Red, Sky Blue
        const gridSize = 75.6; // ~2cm
        const dotSize = 7.5; // ~2mm

        interface Dot {
            x: number;
            y: number;
            color: string;
            targetColor: string;
            progress: number;
            speed: number;
        }

        let dots: Dot[] = [];

        const initDots = () => {
            const width = canvas.width = canvas.offsetWidth;
            const height = canvas.height = canvas.offsetHeight;
            dots = [];

            for (let x = gridSize; x < width; x += gridSize) {
                for (let y = gridSize; y < height; y += gridSize) {
                    dots.push({
                        x, y,
                        color: colors[Math.floor(Math.random() * colors.length)],
                        targetColor: colors[Math.floor(Math.random() * colors.length)],
                        progress: Math.random(),
                        speed: 0.005 + Math.random() * 0.01
                    });
                }
            }
        };

        const render = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            dots.forEach(dot => {
                dot.progress += dot.speed;
                if (dot.progress >= 1) {
                    dot.progress = 0;
                    dot.color = dot.targetColor;
                    dot.targetColor = colors[Math.floor(Math.random() * colors.length)];
                }

                // Sine wave scaling: 0 -> 1 -> 0
                const scale = Math.sin(dot.progress * Math.PI);
                const currentSize = scale * dotSize;

                if (currentSize > 0) {
                    ctx.fillStyle = dot.color;
                    ctx.beginPath();
                    ctx.arc(dot.x, dot.y, currentSize / 2, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        initDots();
        window.addEventListener('resize', initDots);
        render();

        return () => {
            window.removeEventListener('resize', initDots);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />;
};

export default GridDots;
