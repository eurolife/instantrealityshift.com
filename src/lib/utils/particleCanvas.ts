export function sporeCanvas(
  targetElementClassName: string,
  particleCount: number = 400,
  particleMinSize: number = 1,
  particleMaxSize: number = 3.5,
  particleMinSpeed: number = 0.1,
  particleMaxSpeed: number = 1.5,
  particleWobbleSpeed: number = 0.2,
  particleWobble: number = 0.5,
  canvasSize: number = 2000
) {
  // Reduce particle count on mobile devices
  if (window.innerWidth < 768) {
    particleCount = particleCount > 40 ? 20 : particleCount;
    canvasSize = canvasSize > 1000 ? 1000 : canvasSize;
  }

  const canvasElements = document.querySelectorAll(targetElementClassName) as NodeListOf<HTMLCanvasElement>;

  canvasElements.forEach((canvas) => {
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    const particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      wobble: number;
      wobbleSpeed: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * (particleMaxSize - particleMinSize) + particleMinSize;
        this.speedY = Math.random() * (particleMaxSpeed - particleMinSpeed) - particleMaxSpeed;
        this.wobble = Math.random() * particleWobble;
        this.wobbleSpeed = Math.random() * particleWobbleSpeed;
      }

      update() {
        this.y += this.speedY;
        this.x += Math.sin(this.y * this.wobbleSpeed) * this.wobble;

        if (this.y < -20) {
          this.y = canvas.height + Math.random() * 20;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.fillStyle = "rgba(255, 255, 255)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();
  });

  window.addEventListener("resize", () => {
    canvasElements.forEach((canvas) => {
      canvas.width = canvasSize;
      canvas.height = canvasSize;
    });
  });
}
