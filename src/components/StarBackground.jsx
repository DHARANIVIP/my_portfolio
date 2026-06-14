import { useEffect, useRef } from 'react';

export const StarBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');

        // Configuration
        const STAR_COLOR = '#fff';
        const STAR_SIZE = 3;
        const STAR_MIN_SCALE = 0.2;
        const OVERFLOW_THRESHOLD = 50;
        const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8;

        // Meteor Configuration
        const METEOR_COLOR = '#fff';
        const METEOR_COUNT = 5; // Number of active meteors
        const METEOR_SPEED_MIN = 2;
        const METEOR_SPEED_MAX = 5;
        const METEOR_LENGTH_MIN = 50;
        const METEOR_LENGTH_MAX = 150;

        let scale = 1;
        let width, height;
        let stars = [];
        let meteors = [];
        let velocity = { z: 0.0005 };
        let animationFrameId;

        // --- Stars ---
        function generateStars() {
            stars = [];
            for (let i = 0; i < STAR_COUNT; i++) {
                stars.push({
                    x: 0,
                    y: 0,
                    z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE)
                });
            }
        }

        function placeStar(star) {
            star.x = Math.random() * width;
            star.y = Math.random() * height;
        }

        function recycleStar(star) {
            star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);
            star.x = Math.random() * width;
            star.y = Math.random() * height;
        }

        function updateStars() {
            stars.forEach((star) => {
                star.x += (star.x - width / 2) * velocity.z * star.z;
                star.y += (star.y - height / 2) * velocity.z * star.z;
                star.z += velocity.z;

                if (
                    star.x < -OVERFLOW_THRESHOLD ||
                    star.x > width + OVERFLOW_THRESHOLD ||
                    star.y < -OVERFLOW_THRESHOLD ||
                    star.y > height + OVERFLOW_THRESHOLD
                ) {
                    recycleStar(star);
                }
            });
        }

        function renderStars() {
            stars.forEach((star) => {
                context.beginPath();
                context.lineCap = 'round';
                context.lineWidth = STAR_SIZE * star.z * scale;
                context.globalAlpha = 0.5 + 0.5 * Math.random();
                context.strokeStyle = STAR_COLOR;

                context.beginPath();
                context.moveTo(star.x, star.y);

                let dx = (star.x - width / 2) * velocity.z * star.z;
                let dy = (star.y - height / 2) * velocity.z * star.z;

                let tailX = dx * 20;
                let tailY = dy * 20;

                if (Math.abs(tailX) < 0.5) tailX = 0.5;
                if (Math.abs(tailY) < 0.5) tailY = 0.5;

                const maxTail = 5;
                if (Math.abs(tailX) > maxTail) tailX = Math.sign(tailX) * maxTail;
                if (Math.abs(tailY) > maxTail) tailY = Math.sign(tailY) * maxTail;

                context.lineTo(star.x - tailX, star.y - tailY);
                context.stroke();
            });
        }

        // --- Meteors ---
        function createMeteor(reset = false) {
            const speed = METEOR_SPEED_MIN + Math.random() * (METEOR_SPEED_MAX - METEOR_SPEED_MIN);
            // Start from top or right
            let x, y;
            if (Math.random() < 0.5) {
                // Start from top
                x = Math.random() * width;
                y = -100;
            } else {
                // Start from right
                x = width + 100;
                y = Math.random() * height * 0.5; // Only top half
            }

            return {
                x,
                y,
                length: METEOR_LENGTH_MIN + Math.random() * (METEOR_LENGTH_MAX - METEOR_LENGTH_MIN),
                speed: speed,
                angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1), // ~45 degrees with variation
                opacity: 0,
                fadingIn: true
            };
        }

        function generateMeteors() {
            meteors = [];
            // Don't spawn all at once
            for (let i = 0; i < METEOR_COUNT; i++) {
                // Stagger starts
                setTimeout(() => {
                    meteors.push(createMeteor());
                }, Math.random() * 5000);
            }
        }

        function updateMeteors() {
            // Replenish meteors if needed
            if (meteors.length < METEOR_COUNT && Math.random() < 0.01) {
                meteors.push(createMeteor());
            }

            meteors.forEach((meteor, index) => {
                meteor.x -= meteor.speed * Math.cos(meteor.angle);
                meteor.y += meteor.speed * Math.sin(meteor.angle);

                // Fade in
                if (meteor.fadingIn) {
                    meteor.opacity += 0.02;
                    if (meteor.opacity >= 1) {
                        meteor.opacity = 1;
                        meteor.fadingIn = false;
                    }
                }

                // Remove if out of bounds
                if (meteor.x < -200 || meteor.y > height + 200) {
                    meteors.splice(index, 1);
                }
            });
        }

        function renderMeteors() {
            meteors.forEach(meteor => {
                const tailX = meteor.x + meteor.length * Math.cos(meteor.angle);
                const tailY = meteor.y - meteor.length * Math.sin(meteor.angle);

                const gradient = context.createLinearGradient(meteor.x, meteor.y, tailX, tailY);
                gradient.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity})`);
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                context.beginPath();
                context.strokeStyle = gradient;
                context.lineWidth = 2;
                context.lineCap = 'round';
                context.moveTo(meteor.x, meteor.y);
                context.lineTo(tailX, tailY);
                context.stroke();
            });
        }

        // --- Main Loop ---
        function resize() {
            scale = window.devicePixelRatio || 1;
            width = window.innerWidth * scale;
            height = window.innerHeight * scale;
            canvas.width = width;
            canvas.height = height;
            stars.forEach(placeStar);
        }

        function step() {
            context.clearRect(0, 0, width, height);

            updateStars();
            renderStars();

            updateMeteors();
            renderMeteors();

            animationFrameId = requestAnimationFrame(step);
        }

        // Initialize
        generateStars();
        generateMeteors();
        resize();
        step();

        // Event listeners
        window.addEventListener('resize', resize);

        // Cleanup
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                pointerEvents: 'none',
                background: 'transparent' // Ensure div is transparent
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
            />
        </div>
    );
};