import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const prevPosition = useRef({ x: 0, y: 0 });
  const currentRotation = useRef(0);

  useEffect(() => {
    const updatePosition = (e) => {
      const dx = e.clientX - prevPosition.current.x;
      const dy = e.clientY - prevPosition.current.y;
      
      let newRotation = currentRotation.current;
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
        newRotation = Math.atan2(dy, dx) * (180 / Math.PI) + 45;
        currentRotation.current = newRotation;
      }

      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
        dotRef.current.style.transform = `translate(-50%, -50%) rotate(${newRotation}deg)`;
      }
      
      if (ringRef.current) {
        ringRef.current.style.left = `${e.clientX}px`;
        ringRef.current.style.top = `${e.clientY}px`;
      }

      prevPosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'input' ||
        e.target.tagName.toLowerCase() === 'select' ||
        e.target.closest('.glass-card') ||
        e.target.closest('.btn-luxury')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'input' ||
        e.target.tagName.toLowerCase() === 'select' ||
        e.target.closest('.glass-card') ||
        e.target.closest('.btn-luxury')
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className={isHovering ? 'custom-cursor-hover' : ''}>
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{ left: '-100px', top: '-100px', transform: 'translate(-50%, -50%)' }}
      ></div>
      <div
        ref={ringRef}
        className="custom-cursor-ring"
        style={{
          left: '-100px', top: '-100px',
          transition: 'width 0.3s, height 0.3s, border-color 0.3s, background-color 0.3s, left 0.1s ease-out, top 0.1s ease-out'
        }}
      ></div>
    </div>
  );
};

export default CustomCursor;
