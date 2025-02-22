"use client"
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Pattern: React.FC = () => {
  const donutContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = donutContainerRef.current;
    if (!container) return;
    const donuts: HTMLDivElement[] = [];
    const numDonuts = 10;

    for (let i = 0; i < numDonuts; i++) {
      const donut = document.createElement('div');
      donut.className = 'donut';
      donut.style.left = `${Math.random() * 100}vw`;
      donut.style.animationDuration = `${5 + Math.random() * 10}s`;
      donut.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(donut);
      donuts.push(donut);
    }

    return () => {
      donuts.forEach((donut) => container.removeChild(donut));
    };
  }, []);

  return (
    <StyledWrapper>
      <div className="container" />
      <div className="donut-container" ref={donutContainerRef} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;

  .container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.3),
      rgba(255, 223, 186, 0.1)
    );
  }

  .container::before,
  .container::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      from 0deg,
      #ffffff,
      #ffecd2,
      #ffd8b1,
      #ffc4a3,
      #ffb997,
      #ffd8b1,
      #ffecd2,
      #ffffff
    );
    transform: translate(-50%, -50%);
    animation: rotate 8s linear infinite;
    filter: blur(50px);
    opacity: 0.8;
  }

  .container::after {
    width: 180%;
    height: 180%;
    animation: rotate-reverse 10s linear infinite;
    opacity: 0.6;
  }

  .donut-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .donut {
    position: absolute;
    top: -50px;
    width: 60px;
    height: 60px;
    background: radial-gradient(circle, #d2691e, #8b4513);
    border-radius: 50%;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    animation: floatDonut linear infinite;
    overflow: hidden;
  }

  .donut::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    background: #f9f1e7;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  .donut::after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    background: radial-gradient(circle, #ffb6c1, #ff69b4);
    border-radius: 50%;
    z-index: -1;
  }

  @keyframes rotate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @keyframes rotate-reverse {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }

  @keyframes floatDonut {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh);
      opacity: 0;
    }
  }
`;

export default Pattern;
