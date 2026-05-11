"use client";

import React, { useState } from "react";

const PuzzleGraphic = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => setHoveredNode(id);
  const handleMouseLeave = () => setHoveredNode(null);

  const getTransform = (id: string) => {
    if (hoveredNode === id) return "scale(1.03)";
    return "scale(1)";
  };

  const getOpacity = (id: string, baseOpacity: string = "1") => {
    if (!hoveredNode) return baseOpacity;
    return hoveredNode === id ? "1" : "0.5";
  };

  // Base colors
  const colors = {
    lime: "#ccff00",
    purple: "#a8b5ff",
    lightGray: "var(--puzzle-gray, #f0f0f0)", // We will use CSS variables or Tailwind classes for dark mode support
    white: "var(--puzzle-white, #ffffff)",
  };

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto animate-in fade-in zoom-in duration-300">
      {/* CSS Variables for Dark Mode */}
      <style dangerouslySetInnerHTML={{
        __html: `
        :root {
            --puzzle-gray: #f3f4f6;
            --puzzle-white: #ffffff;
            --puzzle-stroke: #e5e7eb;
            --puzzle-dot: #d1d5db;
        }
        .dark {
            --puzzle-gray: #1f2937;
            --puzzle-white: #111827;
            --puzzle-stroke: #374151;
            --puzzle-dot: #4b5563;
        }
      `}} />

      <svg
        viewBox="0 0 500 500"
        className="w-full h-full overflow-visible drop-shadow-xl"
        style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.05))" }}
      >
        {/* Background Grid Lines & Dots */}
        <g stroke="var(--puzzle-stroke)" strokeWidth="1" opacity="0.5">
          {[100, 200, 300, 400].map(pos => (
            <React.Fragment key={pos}>
              <line x1={pos} y1="0" x2={pos} y2="500" strokeDasharray="4 4" />
              <line x1="0" y1={pos} x2="500" y2={pos} strokeDasharray="4 4" />
            </React.Fragment>
          ))}
        </g>
        <g fill="var(--puzzle-dot)">
          {[0, 100, 200, 300, 400, 500].map(x =>
            [0, 100, 200, 300, 400, 500].map(y => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="3" />
            ))
          )}
        </g>

        {/* Puzzle Pieces */}
        <g className="transition-all duration-500 ease-out origin-center" style={{ transformOrigin: 'center' }}>

          {/* Lime Green Top Shape */}
          <g
            onMouseEnter={() => handleMouseEnter('lime-top')}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: getTransform('lime-top'),
              transformOrigin: '250px 150px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: getOpacity('lime-top')
            }}
            className="cursor-pointer"
          >
            <path
              d="M 150 100 
                 A 50 50 0 0 1 200 50 
                 L 350 50 
                 A 50 50 0 0 1 400 100 
                 L 400 150 
                 A 50 50 0 0 1 350 200 
                 L 250 200 
                 A 50 50 0 0 0 200 250 
                 L 150 250 
                 A 50 50 0 0 1 100 200 
                 L 100 150 
                 A 50 50 0 0 1 150 100 Z"
              fill={colors.lime}
            />
          </g>

          {/* Purple Right Shape */}
          <g
            onMouseEnter={() => handleMouseEnter('purple')}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: getTransform('purple'),
              transformOrigin: '400px 300px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: getOpacity('purple')
            }}
            className="cursor-pointer"
          >
            <path
              d="M 400 150 
                 A 50 50 0 0 1 450 200 
                 L 450 350 
                 A 50 50 0 0 1 400 400 
                 L 350 400 
                 A 50 50 0 0 1 300 350 
                 L 300 300 
                 A 50 50 0 0 0 250 250 
                 L 300 250 
                 A 50 50 0 0 1 350 200 
                 L 350 150 
                 A 50 50 0 0 1 400 150 Z"
              fill={colors.purple}
            />
            {/* Outline highlights for purple inner joins */}
            <path d="M 350 250 L 400 250" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
            <path d="M 350 300 L 400 300" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
            <path d="M 350 350 L 400 350" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
          </g>

          {/* Lime Green Bottom Shape */}
          <g
            onMouseEnter={() => handleMouseEnter('lime-bottom')}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: getTransform('lime-bottom'),
              transformOrigin: '250px 350px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: getOpacity('lime-bottom')
            }}
            className="cursor-pointer"
          >
            <path
              d="M 200 300 
                 A 50 50 0 0 1 250 250 
                 L 250 250 
                 A 50 50 0 0 1 300 300 
                 L 300 350 
                 A 50 50 0 0 1 250 400 
                 L 250 400 
                 A 50 50 0 0 1 200 350 Z"
              fill={colors.lime}
            />
          </g>

          {/* Large Light Gray Central/Left Shape */}
          <g
            onMouseEnter={() => handleMouseEnter('gray-left')}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: getTransform('gray-left'),
              transformOrigin: '150px 300px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: getOpacity('gray-left', '0.9')
            }}
            className="cursor-pointer"
          >
            <path
              d="M 50 200 
                 A 50 50 0 0 1 100 150 
                 L 150 150 
                 A 50 50 0 0 0 200 200 
                 L 200 300 
                 A 50 50 0 0 0 250 350 
                 L 250 400 
                 A 50 50 0 0 1 200 450 
                 L 50 450 
                 A 50 50 0 0 1 0 400 
                 L 0 250 
                 A 50 50 0 0 1 50 200 Z"
              fill="var(--puzzle-gray)"
            />
          </g>

          {/* White Background Filler Shape (Bottom Right) */}
          <g
            onMouseEnter={() => handleMouseEnter('white-bottom')}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: getTransform('white-bottom'),
              transformOrigin: '350px 400px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: getOpacity('white-bottom', '0.9')
            }}
            className="cursor-pointer"
          >
            <path
              d="M 250 400 
                 A 50 50 0 0 0 300 350 
                 L 350 350 
                 A 50 50 0 0 1 400 400 
                 L 400 450 
                 A 50 50 0 0 1 350 500 
                 L 250 500 
                 A 50 50 0 0 1 200 450 
                 L 200 400 
                 Z"
              fill="var(--puzzle-white)"
              stroke="var(--puzzle-stroke)"
              strokeWidth="2"
            />
          </g>

          {/* White Background Filler Shape (Top Left) */}
          <g
            onMouseEnter={() => handleMouseEnter('white-top')}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: getTransform('white-top'),
              transformOrigin: '100px 100px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: getOpacity('white-top', '0.9')
            }}
            className="cursor-pointer"
          >
            <path
              d="M 50 50 
                 A 50 50 0 0 1 100 0 
                 L 200 0 
                 A 50 50 0 0 1 250 50 
                 L 250 100 
                 A 50 50 0 0 1 200 150 
                 L 150 150 
                 A 50 50 0 0 0 100 200 
                 L 50 200 
                 A 50 50 0 0 1 0 150 
                 L 0 100 
                 A 50 50 0 0 1 50 50 Z"
              fill="var(--puzzle-white)"
              stroke="var(--puzzle-stroke)"
              strokeWidth="2"
            />
          </g>

        </g>
      </svg>
    </div>
  );
};

export default PuzzleGraphic;
