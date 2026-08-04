import { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, CarFront } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchFilter = ({ externalDestination }) => {
  const navigate = useNavigate();
  const from = 'Coimbatore';
  const [to, setTo] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [bikeType, setBikeType] = useState('commuter');
  const [customVehicle, setCustomVehicle] = useState('');
  const [date, setDate] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const [searchError, setSearchError] = useState('');

  const availableDestinations = [
    'Ooty', 'Valparai', 'Kodaikanal', 'Coonoor', 'Kotagiri', 'Yercaud', 
    'Munnar', 'Athirappilly', 'Wayanad', 'Vagamon', 
    'Coorg', 'Chikmagalur', 'Agumbe', 'Sakleshpur'
  ];

  useEffect(() => {
    if (externalDestination) {
      setTo(externalDestination);
    }
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, [externalDestination]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (from && to) {
      const isValidDestination = availableDestinations.some(d => d.toLowerCase() === to.toLowerCase());
      if (!isValidDestination) {
        setSearchError('Data not found');
        return;
      }
      setSearchError('');

      const selectedVehicle = vehicle === 'bike' ? `bike-${bikeType}` : (vehicle === 'custom' ? customVehicle : vehicle);
      const routeId = `${from.toLowerCase().replace(/\s+/g, '')}-${to.toLowerCase().replace(/\s+/g, '')}`;
      
      const newSearch = { from, to, vehicle: selectedVehicle, id: routeId, date };
      const savedSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
      let updatedSearches = savedSearches.filter(s => s.id !== newSearch.id);
      updatedSearches.unshift(newSearch);
      updatedSearches = updatedSearches.slice(0, 3);
      localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
      setRecentSearches(updatedSearches);

      navigate(`/route/${routeId}?vehicle=${selectedVehicle}${date ? `&date=${date}` : ''}`);
    }
  };

  return (
    <section id="search-filter-section" className="section-padding search-filter-container">
      <div className="container">
        <div className="glass-card p-4 p-md-5 mx-auto shadow-lg" style={{ maxWidth: '1000px' }}>
          <form onSubmit={handleSearch} className="row g-4 align-items-end">
            <div className="col-md-3">
              <label className="text-silver mb-2 d-flex align-items-center gap-2" style={{ fontSize: '0.85rem' }}>
                <MapPin size={16} className="text-gold" /> FROM
              </label>
              <input 
                type="text" 
                className="form-control glass-input" 
                value={from}
                readOnly
              />
            </div>
            <div className="col-md-3">
              <label className="text-silver mb-2 d-flex align-items-center gap-2" style={{ fontSize: '0.85rem' }}>
                <MapPin size={16} className="text-gold" /> TO
              </label>
              <input 
                type="text" 
                className="form-control glass-input" 
                list="destinationOptions"
                value={to}
                onChange={(e) => {
                  setTo(e.target.value);
                  setSearchError('');
                }}
                required
              />
              <datalist id="destinationOptions">
                {availableDestinations.map((dest, idx) => (
                  <option key={idx} value={dest} />
                ))}
              </datalist>
              {searchError && (
                <div className="text-danger mt-1 fw-bold" style={{ fontSize: '0.85rem' }}>{searchError}</div>
              )}
            </div>
            <div className="col-md-2">
              <label className="text-silver mb-2 d-flex align-items-center gap-2" style={{ fontSize: '0.85rem' }}>
                <CarFront size={16} className="text-gold" /> VEHICLE
              </label>
              <select className="form-select glass-input" value={vehicle} onChange={(e) => setVehicle(e.target.value)} required>
                <option value="" disabled>Select Vehicle</option>
                <option value="car">Car</option>
                <option value="bike">Bike</option>
                <option value="custom">Write your option</option>
              </select>
            </div>
            {vehicle === 'bike' && (
              <div className="col-md-2">
                <label className="text-silver mb-2 d-flex align-items-center gap-2" style={{ fontSize: '0.85rem' }}>
                  <CarFront size={16} className="text-gold" /> BIKE TYPE
                </label>
                <select className="form-select glass-input" value={bikeType} onChange={(e) => setBikeType(e.target.value)}>
                  <option value="commuter">Commuter (60 kmpl)</option>
                  <option value="cruiser">Cruiser (35 kmpl)</option>
                  <option value="sports">Sports (25 kmpl)</option>
                </select>
              </div>
            )}
            {vehicle === 'custom' && (
              <div className="col-md-2">
                <label className="text-silver mb-2 d-flex align-items-center gap-2" style={{ fontSize: '0.85rem' }}>
                  <CarFront size={16} className="text-gold" /> OPTION
                </label>
                <input 
                  type="text" 
                  className="form-control glass-input" 
                  placeholder="E.g. Bus"
                  value={customVehicle}
                  onChange={(e) => setCustomVehicle(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="col-md-2">
              <label className="text-silver mb-2 d-flex align-items-center gap-2" style={{ fontSize: '0.85rem' }}>
                <Calendar size={16} className="text-gold" /> DATE
              </label>
              <input type="date" className="form-control glass-input" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn-luxury w-100 d-flex align-items-center justify-content-center gap-2">
                <Search size={18} /> Plan
              </button>
            </div>
          </form>

          {recentSearches.length > 0 && (
            <div className="mt-4 pt-4 border-top" style={{ borderColor: 'rgba(194, 155, 98, 0.3) !important' }}>
              <p className="text-silver mb-3" style={{ fontSize: '0.9rem' }}>Recent Searches:</p>
              <div className="d-flex flex-wrap gap-3">
                {recentSearches.map((route, idx) => (
                  <span 
                    key={idx} 
                    className="rounded-pill px-3 py-1 d-inline-block"
                    style={{ background: 'rgba(194, 155, 98, 0.05)', color: 'var(--silver)', border: '1px solid rgba(194, 155, 98, 0.2)', fontSize: '0.85rem' }}
                  >
                    {route.from} → {route.to} {route.date && <span className="opacity-75 ms-1">({new Date(route.date).toLocaleDateString('en-GB', {day: 'numeric', month: 'short'})})</span>}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchFilter;
