import { destinations } from '../data/mockData';

const DestinationCard = ({ dest, onClick, idx }) => {
  const bentoPattern = [
    'col-md-12 col-lg-8', 'col-md-6 col-lg-4',
    'col-md-6 col-lg-4', 'col-md-6 col-lg-4', 'col-md-12 col-lg-4',
    'col-md-6 col-lg-6', 'col-md-6 col-lg-6',
    'col-md-6 col-lg-4', 'col-md-12 col-lg-8'
  ];
  
  const colClass = bentoPattern[idx % bentoPattern.length];

  return (
    <div className={`${colClass} mb-4`} data-aos="fade-up" onClick={() => onClick(dest.name)}>
      <div className="glass-card p-0 overflow-hidden h-100 position-relative group cursor-pointer" style={{ cursor: 'pointer' }}>
        <img 
          src={dest.image} 
          alt={dest.name} 
          className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
          style={{ 
            zIndex: 0, 
            transition: 'transform 0.5s ease',
            padding: '0'
          }}
        />
        <div 
          className="position-absolute top-0 start-0 w-100 h-100" 
          style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.2) 100%)', zIndex: 1 }}
        ></div>
        <div className="position-relative z-index-2 p-3 d-flex flex-column justify-content-end h-100" style={{ zIndex: 2, minHeight: '220px' }}>
          <h5 className="text-white mb-0 fw-bold">{dest.name}</h5>
          <div className="mt-2 opacity-0 group-hover-opacity-100 transition-opacity" style={{ transition: 'opacity 0.3s ease' }}>
            <span className="text-gold" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Explore Routes →</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Destinations = ({ onSelectDestination }) => {
  const handleSelect = (name) => {
    if (onSelectDestination) {
      onSelectDestination(name);
    }
    const searchSection = document.getElementById('search-filter-section');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="destinations" className="section-padding bg-secondary-dark">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-5 fw-bold mb-3">Iconic Hill Stations</h2>
          <p className="text-silver mx-auto" style={{ maxWidth: '600px' }}>
            Discover the most breathtaking elevations across South India. Curated routes for unforgettable journeys.
          </p>
        </div>

        <div className="mb-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-4 text-gold fw-bold mb-2 pb-2 d-inline-block" style={{ letterSpacing: '2px' }}>Tamil Nadu</h2>
          </div>
          <div className="row">
            {destinations.tamilNadu.map((dest, idx) => (
              <DestinationCard key={idx} dest={dest} onClick={handleSelect} idx={idx} />
            ))}
          </div>
        </div>

        <div className="mb-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-4 text-gold fw-bold mb-2 pb-2 d-inline-block" style={{ letterSpacing: '2px' }}>Kerala</h2>
          </div>
          <div className="row">
            {destinations.kerala.map((dest, idx) => (
              <DestinationCard key={idx} dest={dest} onClick={handleSelect} idx={idx} />
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-4 text-gold fw-bold mb-2 pb-2 d-inline-block" style={{ letterSpacing: '2px' }}>Karnataka</h2>
          </div>
          <div className="row">
            {destinations.karnataka.map((dest, idx) => (
              <DestinationCard key={idx} dest={dest} onClick={handleSelect} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
