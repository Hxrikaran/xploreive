import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Clock, Map, Droplets, Wind, AlertTriangle, ShieldCheck, Navigation, IndianRupee, Sun, Calendar, Eye, ImageIcon, Camera } from 'lucide-react';
import { getRouteData } from '../data/mockData';
import { useEffect, useState } from 'react';

const RouteDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const vehicle = searchParams.get('vehicle') || 'car';
  const date = searchParams.get('date');
  const formattedDate = date ? new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Open Date';
  
  const route = getRouteData(id);
  const selectedCost = route?.cost?.[vehicle] || route?.cost?.['car'] || route?.cost?.['bike-commuter'] || { fuel: '1000', food: '1000', hotel: '2500', total: '4500' };
  const [activeStopId, setActiveStopId] = useState(route?.timeline?.[0]?.id || null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const getRelatedImage = (name) => {
    const localImages = [
      '/ooty.jpg', '/valparai.jpg', '/kodaikanal.jpg', '/coonoor_new.png', 
      '/kotagiri.png', '/yercaud.png', '/munnar.png', '/athirappilly.png', 
      '/wayanad.png', '/vagamon.png', '/chikmagalur.png', '/agumbe.png', 
      '/sakleshpur.png', '/motorcycle_trip.png', '/foggy_ride.png'
    ];
    
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % localImages.length;
    
    return localImages[index];
  };

  const heroImage = route?.viewpoints?.[0]?.image || '/mountain-bg.jpg';

  return (
    <div className="bg-primary-dark min-vh-100 text-white pb-5">
      <div className="position-relative d-flex flex-column justify-content-between hero-header-section">
        <img 
          src={heroImage.includes('unsplash') ? getRelatedImage(route.title, '') : heroImage} 
          alt="Route Hero" 
          className="position-absolute w-100 h-100 object-fit-cover top-0 start-0 z-0"
          style={{ filter: 'brightness(0.6)' }}
        />
        <div className="w-100 p-3 pt-4 p-md-4 position-relative z-1">
          <button 
            onClick={() => navigate('/')}
            className="btn btn-link text-white text-decoration-none d-flex align-items-center gap-2 glass-card py-2 px-3 px-md-4"
            style={{ width: 'fit-content', borderRadius: '30px' }}
          >
            <ArrowLeft size={20} /> <span className="d-none d-md-inline">Back to Search</span>
          </button>
        </div>
        <div className="w-100 p-4 pt-5 pb-5 px-md-5 position-relative z-1 mt-auto" style={{ background: 'linear-gradient(to top, rgba(18, 19, 16, 0.95) 0%, rgba(18, 19, 16, 0) 100%)' }}>
          <div className="container text-center pt-md-5">
            <h1 className="display-4 fw-bold mb-3 text-shadow">{route.title}</h1>
            <div className="d-flex flex-wrap justify-content-center gap-3 gap-md-4 text-silver">
              <span className="d-flex align-items-center gap-2"><Map size={20} className="text-gold" /> <span className="fs-6 fs-md-5">{route.stats.distance}</span></span>
              <span className="d-flex align-items-center gap-2"><Clock size={20} className="text-gold" /> <span className="fs-6 fs-md-5">{route.stats.time}</span></span>
              <span className="d-flex align-items-center gap-2"><Calendar size={20} className="text-gold" /> <span className="fs-6 fs-md-5">{formattedDate}</span></span>
              <span className="d-flex align-items-center gap-2"><Navigation size={20} className="text-gold" /> <span className="fs-6 fs-md-5">{route.stats.condition}</span></span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4 mb-5" style={{ marginTop: '-40px', position: 'relative', zIndex: 10 }}>
        <div className="row g-4">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="0">
            <div className="glass-card h-100">
              <h4 className="text-gold mb-4 d-flex align-items-center gap-2"><Sun /> Forecast</h4>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h1 className="display-4 text-white mb-0">{route.weather.temp}°C</h1>
                <p className="text-silver mb-0 text-end">{route.weather.fog}</p>
              </div>
              <div className="d-flex justify-content-between text-center border-top border-secondary pt-3">
                <div>
                  <Droplets className="text-info mb-1" size={18} />
                  <span className="d-block text-white small">{route.weather.rainChance}% Rain</span>
                </div>
                <div>
                  <Wind className="text-info mb-1" size={18} />
                  <span className="d-block text-white small">{route.weather.wind} km/h</span>
                </div>
                <div>
                  <Eye className="text-info mb-1" size={18} />
                  <span className="d-block text-white small">{route.weather.visibility}m Vis.</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="glass-card h-100">
              <h4 className="text-gold mb-4 d-flex align-items-center gap-2"><ShieldCheck /> Route Safety</h4>
              <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                <li className="d-flex justify-content-between">
                  <span className="text-silver">Terrain</span>
                  <span className="text-white text-end">{route.roadDetails.type}</span>
                </li>
                <li className="d-flex justify-content-between">
                  <span className="text-silver">Hairpins</span>
                  <span className="text-white text-end">{route.roadDetails.hairpins}</span>
                </li>
                <li className="d-flex justify-content-between">
                  <span className="text-silver">Hazards</span>
                  <span className="text-warning text-end fw-bold d-flex align-items-center gap-1"><AlertTriangle size={14}/> {route.roadDetails.wildlife}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="glass-card h-100 d-flex flex-column justify-content-between">
              <div>
                <h4 className="text-gold mb-4 d-flex align-items-center gap-2"><IndianRupee /> Travel Budget ({vehicle.toUpperCase()})</h4>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-silver">Fuel & Tolls</span>
                  <span className="text-white">₹{selectedCost.fuel || '0'}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span className="text-silver">Food & Stay</span>
                  <span className="text-white">₹{(parseInt(selectedCost.food) || 0) + (parseInt(selectedCost.hotel) || 0)}</span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-3 border-top border-secondary mt-auto">
                <span className="text-gold fw-bold">Total Est.</span>
                <span className="text-white fw-bold fs-3">₹{selectedCost.total || '0'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        
        <section className="mb-5 py-5" data-aos="fade-up">
          <div className="text-center mb-5">
            <h3 className="display-4 text-gold fw-bold mb-2 pb-2 d-inline-block" style={{ letterSpacing: '2px', borderBottom: '2px solid var(--accent-gold)' }}>The Journey</h3>
            <p className="text-silver mt-3">Scroll through the roadmap below to track the journey.</p>
          </div>
          
          <div className="position-relative">
            <div className="sticky-top d-none d-lg-block z-1" style={{ top: '10vh', height: '80vh', pointerEvents: 'none' }}>
              <div className="container h-100 d-flex justify-content-center">
                <div className="glass-card p-2 overflow-hidden position-relative w-100" style={{ maxWidth: '1000px', height: '100%', borderRadius: '25px', boxShadow: '0 20px 40px rgba(0,0,0,0.8)' }}>
                  {route.timeline.map((stop) => (
                    <div 
                      key={`visual-${stop.id}`}
                      className="position-absolute w-100 h-100 top-0 start-0 p-2"
                      style={{ 
                        opacity: activeStopId === stop.id ? 1 : 0, 
                        transition: 'opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
                        zIndex: activeStopId === stop.id ? 2 : 1
                      }}
                    >
                      <img 
                        src={stop.image || getRelatedImage(stop.name, stop.desc)} 
                        alt={stop.name} 
                        className="w-100 h-100 object-fit-cover"
                        style={{ filter: 'brightness(0.4)', borderRadius: '15px' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="container position-relative z-3 journey-roadmap-container">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                  <div className="position-relative py-4">
                    <div className="timeline-divider d-none d-lg-block position-absolute" style={{ left: '50%', transform: 'translateX(-50%)', width: '2px', background: 'linear-gradient(to bottom, transparent, var(--accent-gold), transparent)', height: '100%', top: 0 }}></div>
                    
                    {route.timeline.map((stop, index) => (
                      <div 
                        key={stop.id} 
                        className={`mb-5 position-relative timeline-card d-flex flex-column flex-lg-row ${index % 2 === 0 ? 'justify-content-start' : 'justify-content-end'}`}
                        onMouseEnter={() => setActiveStopId(stop.id)}
                        onTouchStart={() => setActiveStopId(stop.id)}
                      >
                        <div className="d-lg-none w-100 mb-4">
                          <div className="glass-card p-1 overflow-hidden w-100" style={{ height: '250px', borderRadius: '15px' }}>
                            <img 
                              src={stop.image || getRelatedImage(stop.name, stop.desc)} 
                              alt={stop.name} 
                              className="w-100 h-100 object-fit-cover rounded"
                            />
                          </div>
                        </div>

                        <div className="w-100 position-relative d-none d-lg-block" style={{ maxWidth: '45%' }}>
                          <div className="position-absolute align-items-center justify-content-center d-flex" style={{ [index % 2 === 0 ? 'right' : 'left']: '-58px', top: '50%', transform: 'translateY(-50%)', width: '30px', height: '30px', borderRadius: '50%', background: activeStopId === stop.id ? 'var(--accent-gold)' : 'var(--primary-bg)', border: '2px solid var(--accent-gold)', zIndex: 10, transition: 'all 0.3s ease', boxShadow: activeStopId === stop.id ? '0 0 15px rgba(194,155,98,0.6)' : 'none' }}>
                             <div className="rounded-circle" style={{ width: '8px', height: '8px', background: activeStopId === stop.id ? 'var(--primary-bg)' : 'var(--accent-gold)' }}></div>
                          </div>

                          <div 
                            className="glass-card p-4 h-100 w-100 text-start" 
                            style={{ 
                              padding: '2rem', 
                              backgroundColor: activeStopId === stop.id ? 'rgba(15, 23, 36, 0.85)' : 'rgba(15, 23, 36, 0.6)',
                              backdropFilter: 'blur(12px)',
                              WebkitBackdropFilter: 'blur(12px)',
                              boxShadow: activeStopId === stop.id ? '0 10px 40px rgba(194,155,98,0.2)' : '0 10px 30px rgba(0,0,0,0.5)',
                              transform: activeStopId === stop.id ? 'scale(1.03)' : 'scale(1)',
                              border: activeStopId === stop.id ? '1px solid rgba(194, 155, 98, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)',
                              transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                              cursor: 'pointer'
                            }} 
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                          >
                            <h4 className="text-gold mb-3 d-flex align-items-center gap-2 justify-content-between fs-4 fw-bold">
                              {stop.name}
                              <Navigation size={20} className={activeStopId === stop.id ? "text-gold" : "text-silver opacity-30"} style={{ transition: 'all 0.3s ease' }} />
                            </h4>
                            <p className="mb-0 text-silver" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>{stop.desc}</p>
                          </div>
                        </div>

                        <div className="w-100 position-relative d-lg-none">
                           <div className="glass-card p-4 h-100 w-100 text-start">
                            <h4 className="text-gold mb-3 d-flex align-items-center gap-2 justify-content-between fs-4 fw-bold">
                              {stop.name}
                              <Navigation size={20} className="text-gold" />
                            </h4>
                            <p className="mb-0 text-silver" style={{ fontSize: '1rem', lineHeight: '1.6' }}>{stop.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5 py-5" data-aos="fade-up">
          <div className="text-center mb-5">
            <h3 className="display-6 text-white mb-2">Scenic Masterpieces</h3>
            <div className="mx-auto bg-gold" style={{ width: '60px', height: '3px' }}></div>
          </div>
          
          <div className="row g-4">
            {route.viewpoints.map((vp, index) => (
              <div key={vp.id} className="col-12 col-lg-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="cinematic-card">
                  <div className="cinematic-img-wrapper">
                    <img 
                      src={vp.image && !vp.image.includes('unsplash') ? vp.image : getRelatedImage(vp.name, vp.desc)} 
                      alt={vp.name} 
                      className="cinematic-img" 
                    />
                  </div>
                  <div className="cinematic-overlay">
                    <h3 className="text-white mb-2 fw-bold d-flex align-items-center justify-content-between">
                      {vp.name}
                      <ImageIcon size={20} className="text-gold opacity-75" />
                    </h3>
                    <div className="cinematic-content">
                      <p className="text-silver mb-4 mt-2" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>{vp.desc}</p>
                      <div className="row g-3">
                        <div className="col-6">
                          <small className="text-gold d-block mb-1 text-uppercase fw-bold" style={{ fontSize: '0.75rem' }}><Clock size={12} className="me-1"/> Best Time</small>
                          <span className="text-white" style={{ fontSize: '0.85rem' }}>{vp.bestTime}</span>
                        </div>
                        <div className="col-6">
                          <small className="text-gold d-block mb-1 text-uppercase fw-bold" style={{ fontSize: '0.75rem' }}><Camera size={12} className="me-1"/> Photography</small>
                          <span className="text-white" style={{ fontSize: '0.85rem' }}>{vp.photography}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {route.gallery && route.gallery.length > 0 && (
          <section className="mb-5 py-5 border-top border-secondary" data-aos="fade-up">
             <div className="text-center mb-5">
              <h3 className="display-6 text-white mb-2"><ImageIcon size={32} className="me-2 mb-1"/> Visual Archive</h3>
              <div className="mx-auto bg-gold" style={{ width: '60px', height: '3px' }}></div>
            </div>
            
            <div className="row g-4">
              {route.gallery.map((imgUrl, idx) => (
                <div key={idx} className="col-6 col-md-4">
                  <div className="glass-card p-2 h-100 overflow-hidden" style={{ borderRadius: '20px' }}>
                    <img 
                      src={imgUrl && !imgUrl.includes('unsplash') ? imgUrl : getRelatedImage(`gallery-${route.id}-${idx}`, '')} 
                      alt={`${route.title} gallery ${idx + 1}`} 
                      className="w-100 h-100 object-fit-cover rounded" 
                      style={{ minHeight: '180px', maxHeight: '180px', transition: 'transform 0.7s cubic-bezier(0.25, 0.8, 0.25, 1)' }} 
                      onMouseOver={e => e.currentTarget.style.transform = 'scale(1.08)'}
                      onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default RouteDetail;
