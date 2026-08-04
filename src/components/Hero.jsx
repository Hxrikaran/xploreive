import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="position-relative min-vh-100 w-100 overflow-hidden d-flex flex-column">
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
        <img 
          src="/mountain-bg.jpg" 
          alt="Mountain Background" 
          className="w-100 h-100 object-fit-cover"
          style={{ filter: 'brightness(0.6)' }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 70%, rgba(26, 22, 20, 1) 100%)' }}></div>
      </div>
      
      <div className="container position-relative z-index-1 text-center flex-grow-1 d-flex flex-column justify-content-center mt-5 pt-5 pt-md-0 mt-md-0 pb-5" style={{ zIndex: 1 }}>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="fw-bold text-white mb-4"
        >
          <div className="d-md-none display-4">
            Adventure with Caution. <br />
            <span className="gradient-text">Arrive with Memories.</span>
          </div>
          <div className="d-none d-md-block display-2">
            Adventure with Caution. <br />
            <span className="gradient-text">Arrive with Memories.</span>
          </div>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="lead text-silver mb-5 mx-auto"
          style={{ maxWidth: '800px' }}
        >
          Plan your luxury journey from Coimbatore to the finest hill stations with precision route guidance, scenic viewpoints, travel costs, weather updates, and road safety information.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="d-flex flex-column flex-sm-row justify-content-center gap-3 gap-md-4 px-3 px-sm-0"
        >
          <button 
            className="btn-luxury"
            onClick={() => scrollToSection('destinations')}
          >
            Explore Routes
          </button>
          <button 
            className="btn-outline-luxury"
            onClick={() => scrollToSection('search-filter-section')}
          >
            Plan Journey
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="position-relative pb-4 mt-auto text-center w-100 cursor-pointer"
        style={{ zIndex: 1, cursor: 'pointer' }}
        onClick={() => scrollToSection('search-filter-section')}
      >
        <span className="text-silver d-block mb-2 font-button" style={{ letterSpacing: '2px', fontSize: '12px', textTransform: 'uppercase' }}>Scroll to Explore</span>
        <ChevronDown className="text-gold" size={32} />
      </motion.div>
    </div>
  );
};

export default Hero;
