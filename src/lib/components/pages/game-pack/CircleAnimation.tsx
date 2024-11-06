import React from 'react';
import './index.css';

export default function CircleAnimation(){
  return (
    <div>
      <div className="circle-canvas-effect-background"></div>
      <svg>
        <filter id="wavy">
          <feTurbulence x="0" y="0" baseFrequency="0.009" numOctaves="5" speed="2">
            <animate
              attributeName="baseFrequency"
              dur="60s"
              values="0.02; 0.005; 0.02"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="30"></feDisplacementMap>
        </filter>
      </svg>
    </div>
  );
};