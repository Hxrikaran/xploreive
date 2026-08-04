import { useState } from 'react';
import Hero from '../components/Hero';
import SearchFilter from '../components/SearchFilter';
import Destinations from '../components/Destinations';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';


const Home = () => {
  const [selectedDestination, setSelectedDestination] = useState('');
  return (
    <div className="bg-primary-dark min-vh-100">
      <Hero />
      <SearchFilter externalDestination={selectedDestination} />
      <Destinations onSelectDestination={setSelectedDestination} />
      <Gallery />
      <Reviews />
      
    </div>
  );
};

export default Home;
