"use client";

import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Real estate themed objects
    const objects = [
      // Small houses/buildings
      { type: 'building', width: 40, height: 30, color: '#1ab31a', opacity: 0.1 },
      { type: 'building', width: 60, height: 45, color: '#16a085', opacity: 0.15 },
      { type: 'building', width: 50, height: 40, color: '#27ae60', opacity: 0.12 },
      
      // Trees/plants
      { type: 'tree', size: 25, color: '#2ecc71', opacity: 0.15 },
      { type: 'tree', size: 35, color: '#16a085', opacity: 0.2 },
      
      // Land plots
      { type: 'plot', width: 70, height: 50, color: '#f39c12', opacity: 0.1 },
      { type: 'plot', width: 90, height: 60, color: '#e67e22', opacity: 0.08 },
      
      // Water elements
      { type: 'water', size: 40, color: '#3498db', opacity: 0.15 },
    ];

    // Create moving objects
    const movingObjects = Array(15).fill(0).map(() => {
      const template = objects[Math.floor(Math.random() * objects.length)];
      const sizeFactor = 0.5 + Math.random() * 1.5;
      
      return {
        ...template,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        width: template.width ? template.width * sizeFactor : undefined,
        height: template.height ? template.height * sizeFactor : undefined,
        size: template.size ? template.size * sizeFactor : undefined,
      };
    });

    // Draw functions for each object type
    const drawBuilding = (x: number, y: number, width: number, height: number, color: string, opacity: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Building base
      ctx.fillStyle = color;
      ctx.globalAlpha = opacity;
      ctx.fillRect(-width/2, -height/2, width, height);
      
      // Windows
      ctx.globalAlpha = opacity * 1.5;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      const windowSize = width / 5;
      const windowPadding = width / 10;
      
      for (let wy = -height/2 + windowPadding; wy < height/2 - windowPadding; wy += windowSize + windowPadding/2) {
        for (let wx = -width/2 + windowPadding; wx < width/2 - windowPadding; wx += windowSize + windowPadding/2) {
          ctx.fillRect(wx, wy, windowSize, windowSize);
        }
      }
      
      ctx.restore();
    };

    const drawTree = (x: number, y: number, size: number, color: string, opacity: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Tree leaves
      ctx.beginPath();
      ctx.arc(0, -size/2, size/2, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.globalAlpha = opacity;
      ctx.fill();
      
      // Tree trunk
      ctx.beginPath();
      ctx.rect(-size/8, -size/3, size/4, size/2);
      ctx.fillStyle = '#8b4513';
      ctx.globalAlpha = opacity * 1.5;
      ctx.fill();
      
      ctx.restore();
    };

    const drawPlot = (x: number, y: number, width: number, height: number, color: string, opacity: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Plot boundary
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.globalAlpha = opacity;
      ctx.strokeRect(-width/2, -height/2, width, height);
      
      // Plot divisions
      ctx.beginPath();
      ctx.moveTo(-width/2, -height/4);
      ctx.lineTo(width/2, -height/4);
      ctx.moveTo(-width/2, height/4);
      ctx.lineTo(width/2, height/4);
      ctx.moveTo(-width/4, -height/2);
      ctx.lineTo(-width/4, height/2);
      ctx.moveTo(width/4, -height/2);
      ctx.lineTo(width/4, height/2);
      ctx.stroke();
      
      ctx.restore();
    };

    const drawWater = (x: number, y: number, size: number, color: string, opacity: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Water waves
      ctx.beginPath();
      ctx.moveTo(-size/2, 0);
      for (let i = -size/2; i <= size/2; i += size/10) {
        ctx.lineTo(i, Math.sin(i * 0.2 + Date.now() * 0.001) * size/10);
      }
      ctx.lineTo(size/2, 0);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.globalAlpha = opacity;
      ctx.fill();
      
      ctx.restore();
    };

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      if (!ctx) return;
      
      // Clear with slight fade effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw objects
      movingObjects.forEach(obj => {
        // Update position
        obj.x += obj.speedX;
        obj.y += obj.speedY;
        obj.rotation += obj.rotationSpeed;
        
        // Boundary check
        if (obj.x < -100) obj.x = canvas.width + 100;
        if (obj.x > canvas.width + 100) obj.x = -100;
        if (obj.y < -100) obj.y = canvas.height + 100;
        if (obj.y > canvas.height + 100) obj.y = -100;
        
        // Draw based on type
        switch (obj.type) {
          case 'building':
            drawBuilding(obj.x, obj.y, obj.width!, obj.height!, obj.color, obj.opacity, obj.rotation);
            break;
          case 'tree':
            drawTree(obj.x, obj.y, obj.size!, obj.color, obj.opacity, obj.rotation);
            break;
          case 'plot':
            drawPlot(obj.x, obj.y, obj.width!, obj.height!, obj.color, obj.opacity, obj.rotation);
            break;
          case 'water':
            drawWater(obj.x, obj.y, obj.size!, obj.color, obj.opacity, obj.rotation);
            break;
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);
    
    // Start animation
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default ParticleBackground;