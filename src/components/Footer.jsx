import ScrollToTopButton from './ScrollToTopButton';

const Footer = () => {
  return (
    <footer className="bg-primary-dark py-5 border-top position-relative" style={{ borderColor: 'rgba(255,255,255,0.05) !important' }}>
      <div className="container text-center">
        <h3 className="text-white font-heading mb-3">XPLOREIVE</h3>
        <p className="text-silver mb-0">Adventure with Caution. Arrive with Memories.</p>
        <div className="mt-5 d-flex flex-column flex-md-row justify-content-between align-items-center w-100">
          <div className="d-none d-md-block" style={{ width: '50px' }}></div>
          <div className="text-silver mb-4 mb-md-0" style={{ fontSize: '0.85rem' }}>
            © 2026 XPLOREIVE Luxury Travel. All rights reserved.
          </div>
          <div>
            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
