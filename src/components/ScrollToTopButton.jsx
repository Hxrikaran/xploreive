import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="scroll-to-top-btn d-inline-flex align-items-center justify-content-center"
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'var(--accent-gold)',
        color: 'var(--primary-bg)',
        border: 'none',
        boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
      aria-label="Scroll to top"
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.6)';
        e.currentTarget.style.backgroundColor = '#E3B474';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.5)';
        e.currentTarget.style.backgroundColor = 'var(--accent-gold)';
      }}
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;
