import { Star } from 'lucide-react';
import { reviews } from '../data/mockData';

const Reviews = () => {
  return (
    <section className="section-padding bg-secondary-dark">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-5 fw-bold mb-3">Traveler Experiences</h2>
          <p className="text-silver mx-auto" style={{ maxWidth: '600px' }}>
            Stories from those who explored beyond the roads.
          </p>
        </div>

        <div className="row g-4">
          {reviews.map((review) => (
            <div key={review.id} className="col-md-6" data-aos="fade-up">
              <div className="glass-card h-100 d-flex flex-column">
                <div className="d-flex align-items-center mb-4">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="rounded-circle object-fit-cover me-3"
                    style={{ width: '60px', height: '60px', border: '2px solid var(--luxury-gold)' }}
                  />
                  <div>
                    <h5 className="mb-1 text-white">{review.name}</h5>
                    <div className="d-flex text-gold">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-silver mb-4 flex-grow-1" style={{ fontStyle: 'italic' }}>
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="rounded overflow-hidden" style={{ height: '200px' }}>
                  <img 
                    src={review.tripPhoto} 
                    alt={`${review.name}'s trip`} 
                    className="w-100 h-100 object-fit-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
