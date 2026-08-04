import { galleryImages } from '../data/mockData';

const Gallery = () => {
  return (
    <section className="section-padding bg-primary-dark">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-5 fw-bold mb-3">Scenic Views</h2>
          <p className="text-silver mx-auto" style={{ maxWidth: '600px' }}>
            A glimpse into the stunning landscapes that await you.
          </p>
        </div>

        <div className="row g-3 masonry-gallery">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="col-6 col-md-4 col-lg-3 mb-3" data-aos="zoom-in" data-aos-delay={(idx % 4) * 50}>
              <div className="glass-card p-0 overflow-hidden" style={{ height: '200px' }}>
                <img 
                  src={img} 
                  alt={`Gallery ${idx}`} 
                  className="w-100 h-100 object-fit-cover gallery-img"
                  style={{ transition: 'transform 0.5s ease', cursor: 'zoom-in' }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
