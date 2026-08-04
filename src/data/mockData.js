export const destinations = {
  tamilNadu: [
    { name: 'Ooty', image: '/ooty.jpg' },
    { name: 'Valparai', image: '/valparai.jpg' },
    { name: 'Kodaikanal', image: '/kodaikanal.jpg' },
    { name: 'Coonoor', image: '/coonoor_new.png' },
    { name: 'Kotagiri', image: '/kotagiri.png' },
    { name: 'Yercaud', image: '/yercaud.png' }
  ],
  kerala: [
    { name: 'Munnar', image: '/munnar.png' },
    { name: 'Athirappilly', image: '/athirappilly.png' },
    { name: 'Wayanad', image: '/wayanad.png' },
    { name: 'Vagamon', image: '/vagamon.png' }
  ],
  karnataka: [
    { name: 'Coorg', image: '/coorg.jpg' },
    { name: 'Chikmagalur', image: '/chikmagalur.png' },
    { name: 'Agumbe', image: '/agumbe.png' },
    { name: 'Sakleshpur', image: '/sakleshpur.png' }
  ]
};


export const routeDetails = {
  'coimbatore-valparai': {
    title: 'Coimbatore to Valparai',
    stats: {
      distance: '109 km',
      time: '4 hours',
      condition: 'Excellent, 40 Hairpin Bends',
      fuelEstimate: { bike: '3 Liters (₹320)', car: '8 Liters (₹850)', suv: '12 Liters (₹1250)' }
    },
    timeline: [
      { id: 1, name: 'Coimbatore', desc: 'Starting Point' },
      { id: 2, name: 'Eachanari', desc: 'Temple Town' },
      { id: 3, name: 'Kinathukadavu', desc: 'Highway Drive' },
      { id: 4, name: 'Pollachi', desc: 'Coconut City' },
      { id: 5, name: 'Aliyar Dam', desc: 'Reservoir View' },
      { id: 6, name: 'Monkey Falls', desc: 'Scenic Waterfall' },
      { id: 7, name: 'Aliyar Check Post', desc: 'Forest Entry' },
      { id: 8, name: '40 Hairpin Bends', desc: 'Steep Ghat Section' },
      { id: 9, name: "Loam's View Point", desc: '9th Hairpin Bend' },
      { id: 10, name: 'Tiger Valley View Point', desc: 'Deep Valley' },
      { id: 11, name: 'Birla Waterfalls View', desc: 'Roadside Cascade' },
      { id: 12, name: 'Rottikadai View Point', desc: 'Estate View' },
      { id: 13, name: 'Karumalai View Point', desc: 'Tea Gardens' },
      { id: 14, name: 'Waterfall Estate View', desc: 'Lush Greenery' },
      { id: 15, name: 'Tea Estate View Point', desc: 'Vast Plantations' },
      { id: 16, name: 'Balaji Temple', desc: 'Hilltop Shrine' },
      { id: 17, name: 'Valparai Town', desc: 'Main Hub' },
      { id: 18, name: 'Nallamudi Poonjolai View Point', desc: 'Breathtaking Valley' },
      { id: 19, name: 'Koolangal River View', desc: 'Pebble River' },
      { id: 20, name: 'Chinnakallar', desc: 'Wettest Place' },
      { id: 21, name: 'Chinnakallar Waterfalls', desc: 'Deep Forest Fall' },
      { id: 22, name: 'Upper Sholayar Dam', desc: 'Massive Reservoir' },
      { id: 23, name: 'Sholayar View Point', desc: 'Dam Panorama' },
      { id: 24, name: 'Grass Hills View (Permission Required)', desc: 'Protected Area' },
      { id: 25, name: 'Parambikulam View Point', desc: 'Tiger Reserve View' },
      { id: 26, name: 'Akkamalai Grasslands', desc: 'Rolling Meadows' },
      { id: 27, name: 'Valparai', desc: 'Final Destination' }
    ],
    viewpoints: [
      {
        id: 1,
        name: 'Coimbatore',
        desc: 'Starting Point. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 2,
        name: 'Aliyar Dam',
        desc: 'Reservoir View. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 3,
        name: 'Monkey Falls',
        desc: 'Scenic Waterfall. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1585011910629-4505370eb0d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 4,
        name: 'Loam\'s View Point',
        desc: '9th Hairpin Bend. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1610010978864-44a6ff417855?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 5,
        name: 'Tiger Valley View Point',
        desc: 'Deep Valley. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1626082895617-2c6ad5f8386f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 6,
        name: 'Birla Waterfalls View',
        desc: 'Roadside Cascade. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1605658607312-3f5f3e4c4bf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 7,
        name: 'Rottikadai View Point',
        desc: 'Estate View. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 8,
        name: 'Karumalai View Point',
        desc: 'Tea Gardens. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ],
    roadDetails: {
      type: 'Mountain Road (State Highway)',
      width: 'Double Lane (Narrow at bends)',
      quality: 'Excellent',
      hairpins: '40 Bends (Intermediate Difficulty)',
      forestArea: '60% Dense Forest',
      wildlife: 'Yes (Elephants, Leopards, Lion-tailed macaques)',
      fogLevel: 'High (especially mornings)',
      rainProb: '65% (Monsoon season)',
      nightRide: 'Not Recommended (Wildlife movement)',
      traffic: 'Low to Medium',
      difficulty: 'Intermediate'
    },
    weather: {
      temp: '18',
      humidity: '85',
      rainChance: '40',
      fog: 'Dense in mornings',
      wind: '15',
      sunrise: '06:15 AM',
      sunset: '06:30 PM',
      visibility: '500'
    },
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1458668383970-45f43e50af5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1470071131384-001b85755b36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1426681224150-136f0db5b4f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511497584788-8770ef241680?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    cost: {
      'bike-commuter': { fuel: '180', food: '500', hotel: '1000', parking: '50', entry: '100', total: '1830' },
      'bike-cruiser': { fuel: '320', food: '500', hotel: '1000', parking: '50', entry: '100', total: '1970' },
      'bike-sports': { fuel: '450', food: '500', hotel: '1000', parking: '50', entry: '100', total: '2100' },
      car: { fuel: '850', food: '1500', hotel: '3000', parking: '150', entry: '300', total: '5800' },
      suv: { fuel: '1250', food: '2000', hotel: '4000', parking: '200', entry: '400', total: '7850' }
    }
  },
  'coimbatore-ooty': {
    title: 'Coimbatore to Ooty',
    stats: {
      distance: '85 km',
      time: '3.5 hours',
      condition: 'Good, 14 Hairpin Bends',
      fuelEstimate: { bike: '2.5 Liters', car: '7 Liters', suv: '10 Liters' }
    },
    timeline: [
      { id: 1, name: 'Coimbatore', desc: 'Starting Point' },
      { id: 2, name: 'Mettupalayam', desc: 'Foothills' },
      { id: 3, name: 'Kallar Check Post', desc: 'Forest Entry' },
      { id: 4, name: 'Kallar River View', desc: 'Scenic View' },
      { id: 5, name: 'Burliar View Point', desc: 'Valley View' },
      { id: 6, name: '14 Hairpin Bends', desc: 'Steep Climb' },
      { id: 7, name: 'Hillgrove Railway Station', desc: 'Heritage Railway' },
      { id: 8, name: 'Adderly View Point', desc: 'Photo Stop' },
      { id: 9, name: 'Coonoor View Point', desc: 'City View' },
      { id: 10, name: "Sim's Park", desc: 'Botanical Garden' },
      { id: 11, name: "Lamb's Rock", desc: 'Cliff View' },
      { id: 12, name: "Dolphin's Nose View Point", desc: 'Stunning Valley' },
      { id: 13, name: 'Tea Factory & Tea Museum', desc: 'Fresh Tea' },
      { id: 14, name: 'Ketti Valley View Point', desc: 'Switzerland of South India' },
      { id: 15, name: 'Lovedale', desc: 'Quiet Town' },
      { id: 16, name: 'Ooty Lake', desc: 'Boating' },
      { id: 17, name: 'Government Botanical Garden', desc: 'Floral display' },
      { id: 18, name: 'Government Rose Garden', desc: 'Thousands of roses' },
      { id: 19, name: 'Thread Garden', desc: 'Artificial flowers' },
      { id: 20, name: 'Doddabetta Peak', desc: 'Highest point in Nilgiris' },
      { id: 21, name: 'Pykara Lake', desc: 'Serene lake' },
      { id: 22, name: 'Pykara Waterfalls', desc: 'Scenic falls' },
      { id: 23, name: 'Shooting Point (6th Mile)', desc: 'Movie location' },
      { id: 24, name: '9th Mile Shooting Point', desc: 'Expansive views' },
      { id: 25, name: 'Wenlock Downs', desc: 'Rolling hills' },
      { id: 26, name: 'Pine Forest', desc: 'Dense pine trees' },
      { id: 27, name: 'Needle Rock View Point', desc: '360 degree view' },
      { id: 28, name: 'Mudumalai View Point', desc: 'Wildlife sanctuary view' },
      { id: 29, name: 'Ooty', desc: 'Final Destination' }
    ],
    viewpoints: [
      {
        id: 1,
        name: 'Coimbatore',
        desc: 'Starting Point. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 2,
        name: 'Kallar River View',
        desc: 'Scenic View. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 3,
        name: 'Burliar View Point',
        desc: 'Valley View. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1585011910629-4505370eb0d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 4,
        name: 'Adderly View Point',
        desc: 'Photo Stop. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1610010978864-44a6ff417855?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 5,
        name: 'Coonoor View Point',
        desc: 'City View. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1626082895617-2c6ad5f8386f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 6,
        name: 'Sim\'s Park',
        desc: 'Botanical Garden. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1605658607312-3f5f3e4c4bf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 7,
        name: 'Lamb\'s Rock',
        desc: 'Cliff View. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 8,
        name: 'Dolphin\'s Nose View Point',
        desc: 'Stunning Valley. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ],
    roadDetails: {
      type: 'Mountain Road (National Highway)',
      width: 'Double Lane',
      quality: 'Good',
      hairpins: '14 Bends (Intermediate Difficulty)',
      forestArea: '30% Dense Forest',
      wildlife: 'Yes (Elephants, Monkeys)',
      fogLevel: 'Medium to High',
      rainProb: '40% (Depends on season)',
      nightRide: 'Not Recommended (Fog and Wildlife)',
      traffic: 'High',
      difficulty: 'Intermediate'
    },
    weather: {
      temp: '15',
      humidity: '80',
      rainChance: '25',
      fog: 'Mild in mornings',
      wind: '12',
      sunrise: '06:10 AM',
      sunset: '06:25 PM',
      visibility: '800'
    },
    gallery: [
      'https://images.unsplash.com/photo-1492011251392-570a256a4be8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1444459048701-447dd844ebad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    cost: {
      'bike-commuter': { fuel: '150', food: '600', hotel: '1200', parking: '60', entry: '150', total: '2160' },
      'bike-cruiser': { fuel: '250', food: '600', hotel: '1200', parking: '60', entry: '150', total: '2260' },
      'bike-sports': { fuel: '350', food: '600', hotel: '1200', parking: '60', entry: '150', total: '2360' },
      car: { fuel: '700', food: '1800', hotel: '3500', parking: '200', entry: '450', total: '6650' },
      suv: { fuel: '1000', food: '2400', hotel: '4500', parking: '300', entry: '600', total: '8800' }
    }
  },
  'coimbatore-kodaikanal': {
    title: 'Coimbatore to Kodaikanal',
    stats: {
      distance: '175 km',
      time: '5 hours',
      condition: 'Good, Ghat Roads',
      fuelEstimate: { bike: '4 Liters', car: '12 Liters', suv: '16 Liters' }
    },
    timeline: [
      { id: 1, name: 'Coimbatore', desc: 'Starting Point' },
      { id: 2, name: 'Paladam', desc: 'Highway Stretch' },
      { id: 3, name: 'Dharapuram', desc: 'Windmill Views' },
      { id: 4, name: 'Oddanchatram', desc: 'Vegetable Market Hub' },
      { id: 5, name: 'Red Arch (Kodaikanal Foothills)', desc: 'Start of Ghat Road' },
      { id: 6, name: 'Silver Cascade Falls', desc: 'Beautiful Waterfall' },
      { id: 7, name: 'Kodaikanal Welcome Arch', desc: 'City Entry' },
      { id: 8, name: 'Upper Lake View', desc: 'Lake Panorama' },
      { id: 9, name: 'Kodai Lake', desc: 'Star Shaped Lake' },
      { id: 10, name: 'Bryant Park', desc: 'Botanical Garden' },
      { id: 11, name: "Coaker's Walk", desc: 'Scenic Pedestrian Path' },
      { id: 12, name: 'Chettiar Park', desc: 'Quiet Garden' },
      { id: 13, name: 'Kurinji Andavar Temple', desc: 'Hill Temple' },
      { id: 14, name: 'Green Valley View', desc: 'Deep Valley' },
      { id: 15, name: 'Pillar Rocks', desc: 'Giant Boulders' },
      { id: 16, name: "Guna Caves (Devil's Kitchen)", desc: 'Historic Caves' },
      { id: 17, name: 'Pine Forest', desc: 'Dense Woodlands' },
      { id: 18, name: 'Moir Point', desc: 'Valley Vista' },
      { id: 19, name: 'Berijam Lake View Point', desc: 'Forest Lake View' },
      { id: 20, name: 'Silent Valley View', desc: 'Peaceful Overlook' },
      { id: 21, name: 'Mannavanur Lake', desc: 'Meadows and Lake' },
      { id: 22, name: 'Poombarai View Point', desc: 'Terraced Farming' },
      { id: 23, name: 'Poombarai Village', desc: 'Ancient Temple' },
      { id: 24, name: "Dolphin's Nose View Point", desc: 'Cliff Edge' },
      { id: 25, name: 'Vattakanal Falls', desc: 'Hidden Cascade' },
      { id: 26, name: 'Vattakanal View Point', desc: 'Little Israel' },
      { id: 27, name: 'Kodaikanal Solar Observatory', desc: 'Science Museum' },
      { id: 28, name: 'Kodaikanal', desc: 'Final Destination' }
    ],
    viewpoints: [
      {
        id: 1,
        name: 'Coimbatore',
        desc: 'Starting Point. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 2,
        name: 'Dharapuram',
        desc: 'Windmill Views. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 3,
        name: 'Silver Cascade Falls',
        desc: 'Beautiful Waterfall. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1585011910629-4505370eb0d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 4,
        name: 'Upper Lake View',
        desc: 'Lake Panorama. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1610010978864-44a6ff417855?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 5,
        name: 'Kodai Lake',
        desc: 'Star Shaped Lake. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1626082895617-2c6ad5f8386f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 6,
        name: 'Bryant Park',
        desc: 'Botanical Garden. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1605658607312-3f5f3e4c4bf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 7,
        name: 'Chettiar Park',
        desc: 'Quiet Garden. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 8,
        name: 'Green Valley View',
        desc: 'Deep Valley. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ],
    roadDetails: {
      type: 'Mountain Ghat Road',
      width: 'Double Lane',
      quality: 'Good to Excellent',
      hairpins: 'Continuous bends, less steep than Valparai',
      forestArea: '50% Forest Cover',
      wildlife: 'Possible (Bison, Monkeys)',
      fogLevel: 'Very High',
      rainProb: '45% (Unpredictable showers)',
      nightRide: 'Not Recommended (Heavy Fog)',
      traffic: 'Very High on Weekends',
      difficulty: 'Intermediate'
    },
    weather: {
      temp: '16',
      humidity: '75',
      rainChance: '35',
      fog: 'High',
      wind: '18',
      sunrise: '06:15 AM',
      sunset: '06:20 PM',
      visibility: '600'
    },
    gallery: [
      'https://images.unsplash.com/photo-1505300587285-d6027a052ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1469521669192-cg13b9423b9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1421791240217-a0cb080b080a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1447752809965-0b04df16b6ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465935343323-28c0b2961e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504829817516-00445d4483a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    cost: {
      'bike-commuter': { fuel: '300', food: '600', hotel: '1500', parking: '100', entry: '200', total: '2700' },
      'bike-cruiser': { fuel: '500', food: '600', hotel: '1500', parking: '100', entry: '200', total: '2900' },
      'bike-sports': { fuel: '700', food: '600', hotel: '1500', parking: '100', entry: '200', total: '3100' },
      car: { fuel: '1200', food: '2000', hotel: '4000', parking: '300', entry: '500', total: '8000' },
      suv: { fuel: '1800', food: '2500', hotel: '5000', parking: '400', entry: '700', total: '10400' }
    }
  },
  'coimbatore-coonoor': {
    title: 'Coimbatore to Coonoor',
    stats: {
      distance: '70 km',
      time: '2.5 hours',
      condition: 'Good, Ghat Roads',
      fuelEstimate: { bike: '2 Liters', car: '6 Liters', suv: '8 Liters' }
    },
    timeline: [
      { id: 1, name: 'Coimbatore', desc: 'Starting Point' },
      { id: 2, name: 'Mettupalayam', desc: 'Foothills' },
      { id: 3, name: 'Kallar Check Post', desc: 'Forest Entry' },
      { id: 4, name: 'Kallar River View', desc: 'Scenic View' },
      { id: 5, name: 'Burliar View Point', desc: 'Valley View' },
      { id: 6, name: '14 Hairpin Bends', desc: 'Steep Climb' },
      { id: 7, name: 'Hillgrove Railway Station', desc: 'Heritage Railway' },
      { id: 8, name: 'Adderly View Point', desc: 'Photo Stop' },
      { id: 9, name: 'Coonoor Welcome View', desc: 'City Entry' },
      { id: 10, name: "Sim's Park", desc: 'Botanical Garden' },
      { id: 11, name: "Lamb's Rock", desc: 'Cliff View' },
      { id: 12, name: "Dolphin's Nose View Point", desc: 'Stunning Valley' },
      { id: 13, name: 'Catherine Falls View', desc: 'Waterfall Vista' },
      { id: 14, name: 'Tea Factory & Tea Museum', desc: 'Fresh Tea' },
      { id: 15, name: "Lady Canning's Seat", desc: 'Panoramic Overlook' },
      { id: 16, name: 'Hidden Valley View', desc: 'Secret Retreat' },
      { id: 17, name: 'Droog Fort View Point', desc: 'Historic Ruins' },
      { id: 18, name: 'Highfield Tea Estate', desc: 'Tea Gardens' },
      { id: 19, name: "Law's Falls", desc: 'Roadside Cascade' },
      { id: 20, name: 'Wellington', desc: 'Military Cantonment' },
      { id: 21, name: 'Coonoor', desc: 'Final Destination' }
    ],
    viewpoints: [
      {
        id: 1,
        name: 'Coimbatore',
        desc: 'Starting Point. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 2,
        name: 'Kallar River View',
        desc: 'Scenic View. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 3,
        name: 'Burliar View Point',
        desc: 'Valley View. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1585011910629-4505370eb0d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 4,
        name: 'Adderly View Point',
        desc: 'Photo Stop. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1610010978864-44a6ff417855?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 5,
        name: 'Coonoor Welcome View',
        desc: 'City Entry. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1626082895617-2c6ad5f8386f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 6,
        name: 'Sim\'s Park',
        desc: 'Botanical Garden. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1605658607312-3f5f3e4c4bf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 7,
        name: 'Lamb\'s Rock',
        desc: 'Cliff View. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 8,
        name: 'Dolphin\'s Nose View Point',
        desc: 'Stunning Valley. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ],
    roadDetails: {
      type: 'Mountain Ghat Road',
      width: 'Double Lane',
      quality: 'Good to Excellent',
      hairpins: '14 Bends',
      forestArea: '40% Forest Cover',
      wildlife: 'Possible (Monkeys)',
      fogLevel: 'High',
      rainProb: '40% (Showers)',
      nightRide: 'Exercise Caution',
      traffic: 'High on Weekends',
      difficulty: 'Intermediate'
    },
    weather: {
      temp: '18',
      humidity: '75',
      rainChance: '35',
      fog: 'High',
      wind: '18',
      sunrise: '06:15 AM',
      sunset: '06:20 PM',
      visibility: '600'
    },
    gallery: [
      'https://images.unsplash.com/photo-1465056836041-7977a44fceb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1430043922894-3860bb632128?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506198642301-4b71a2fc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1431631580251-409fc6d288d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1480074568708-e8b5c0103784?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508197775510-44ec0a997d4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    cost: {
      'bike-commuter': { fuel: '200', food: '500', hotel: '1000', parking: '50', entry: '150', total: '1900' },
      'bike-cruiser': { fuel: '350', food: '500', hotel: '1000', parking: '50', entry: '150', total: '2050' },
      'bike-sports': { fuel: '500', food: '500', hotel: '1000', parking: '50', entry: '150', total: '2200' },
      car: { fuel: '800', food: '1500', hotel: '2500', parking: '150', entry: '300', total: '5250' },
      suv: { fuel: '1200', food: '2000', hotel: '3500', parking: '200', entry: '500', total: '7400' }
    }
  },
  'coimbatore-kotagiri': {
    title: 'Coimbatore to Kotagiri',
    stats: {
      distance: '65 km',
      time: '2 hours',
      condition: 'Good, Ghat Roads',
      fuelEstimate: { bike: '2 Liters', car: '5 Liters', suv: '7 Liters' }
    },
    timeline: [
      { id: 1, name: 'Coimbatore', desc: 'Starting Point' },
      { id: 2, name: 'Mettupalayam', desc: 'Foothills' },
      { id: 3, name: 'Kallar Check Post', desc: 'Forest Entry' },
      { id: 4, name: 'Kallar River View', desc: 'Scenic View' },
      { id: 5, name: 'Burliar View Point', desc: 'Valley View' },
      { id: 6, name: '14 Hairpin Bends', desc: 'Steep Climb' },
      { id: 7, name: 'Hillgrove Railway Station', desc: 'Heritage Railway' },
      { id: 8, name: 'Coonoor', desc: 'Major Hill Station' },
      { id: 9, name: 'Katteri View Point', desc: 'Valley Overlook' },
      { id: 10, name: 'Aravenu View Point', desc: 'Scenic Spot' },
      { id: 11, name: 'Rangaswamy Peak View', desc: 'Mountain Vista' },
      { id: 12, name: 'Longwood Shola Forest', desc: 'Dense Reserve' },
      { id: 13, name: 'John Sullivan Memorial', desc: 'Historical Museum' },
      { id: 14, name: 'Kodanad View Point', desc: 'Spectacular Valley' },
      { id: 15, name: 'Kodanad Tea Estate', desc: 'Lush Greenery' },
      { id: 16, name: 'Catherine Falls View Point', desc: 'Waterfall View' },
      { id: 17, name: 'Elk Falls', desc: 'Forest Cascade' },
      { id: 18, name: 'Kotagiri', desc: 'Final Destination' }
    ],
    viewpoints: [
      {
        id: 1,
        name: 'Coimbatore',
        desc: 'Starting Point. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 2,
        name: 'Kallar River View',
        desc: 'Scenic View. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 3,
        name: 'Burliar View Point',
        desc: 'Valley View. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1585011910629-4505370eb0d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 4,
        name: 'Katteri View Point',
        desc: 'Valley Overlook. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1610010978864-44a6ff417855?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 5,
        name: 'Aravenu View Point',
        desc: 'Scenic Spot. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1626082895617-2c6ad5f8386f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 6,
        name: 'Rangaswamy Peak View',
        desc: 'Mountain Vista. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1605658607312-3f5f3e4c4bf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 7,
        name: 'Kodanad View Point',
        desc: 'Spectacular Valley. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 8,
        name: 'Catherine Falls View Point',
        desc: 'Waterfall View. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ],
    roadDetails: {
      type: 'Mountain Ghat Road',
      width: 'Double Lane',
      quality: 'Excellent',
      hairpins: '14 Bends via Coonoor road',
      forestArea: '40% Forest Cover',
      wildlife: 'Possible (Monkeys)',
      fogLevel: 'Medium',
      rainProb: '40% (Showers)',
      nightRide: 'Exercise Caution',
      traffic: 'Moderate',
      difficulty: 'Intermediate'
    },
    weather: {
      temp: '17',
      humidity: '75',
      rainChance: '35',
      fog: 'Medium',
      wind: '16',
      sunrise: '06:15 AM',
      sunset: '06:20 PM',
      visibility: '700'
    },
    gallery: [
      'https://images.unsplash.com/photo-1496303254930-b3bb16410667?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1462002306734-601b0f0b4d45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1471180295874-904eb178b5ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1446776899648-aa14c53d0d82?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1443632864897-a6bdcb2dfce1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1490682143002-421714b62db6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    cost: {
      'bike-commuter': { fuel: '180', food: '500', hotel: '1000', parking: '50', entry: '100', total: '1830' },
      'bike-cruiser': { fuel: '300', food: '500', hotel: '1000', parking: '50', entry: '100', total: '1950' },
      'bike-sports': { fuel: '450', food: '500', hotel: '1000', parking: '50', entry: '100', total: '2100' },
      car: { fuel: '700', food: '1500', hotel: '2500', parking: '150', entry: '200', total: '5050' },
      suv: { fuel: '1000', food: '2000', hotel: '3500', parking: '200', entry: '300', total: '7000' }
    }
  },
  'coimbatore-yercaud': {
    title: 'Coimbatore to Yercaud',
    stats: {
      distance: '190 km',
      time: '4.5 hours',
      condition: 'Excellent Highway, 20 Hairpin Bends',
      fuelEstimate: { bike: '4.5 Liters', car: '13 Liters', suv: '18 Liters' }
    },
    timeline: [
      { id: 1, name: 'Coimbatore', desc: 'Starting Point' },
      { id: 2, name: 'Avinashi', desc: 'Highway Drive' },
      { id: 3, name: 'Perundurai', desc: 'NH 544 Stretch' },
      { id: 4, name: 'Bhavani', desc: 'River Crossing' },
      { id: 5, name: 'Sankagiri', desc: 'Fort View' },
      { id: 6, name: 'Salem', desc: 'Major City Hub' },
      { id: 7, name: 'Yercaud Foothills', desc: 'Start of Ghats' },
      { id: 8, name: '20 Hairpin Bends', desc: 'Steep Winding Road' },
      { id: 9, name: "Lady's Seat", desc: 'Panoramic View' },
      { id: 10, name: "Gent's Seat", desc: 'Valley Overlook' },
      { id: 11, name: "Children's Seat", desc: 'Scenic Spot' },
      { id: 12, name: 'Pagoda Point', desc: 'Stone Pagodas View' },
      { id: 13, name: 'Yercaud Lake', desc: 'Emerald Lake Boating' },
      { id: 14, name: 'Anna Park', desc: 'Floral Garden' },
      { id: 15, name: 'Botanical Garden', desc: 'Rare Flora' },
      { id: 16, name: 'Rose Garden', desc: 'Blooming Roses' },
      { id: 17, name: 'Silk Farm', desc: 'Silkworm Rearing' },
      { id: 18, name: "Bear's Cave", desc: 'Ancient Hideout' },
      { id: 19, name: 'Kiliyur Falls', desc: 'Monsoon Cascade' },
      { id: 20, name: 'Loop Road View Point', desc: 'Forest Drive' },
      { id: 21, name: 'Karadiyur View Point', desc: 'Stunning Sunsets' },
      { id: 22, name: 'Tipperary View Point', desc: 'Estate View' },
      { id: 23, name: 'Arthur Seat', desc: 'Bird’s Eye View' },
      { id: 24, name: 'Shevaroy Temple', desc: 'Highest Shrine' },
      { id: 25, name: 'Shevaroy Peak', desc: 'Highest Point' },
      { id: 26, name: 'Yercaud', desc: 'Final Destination' }
    ],
    viewpoints: [
      {
        id: 1,
        name: 'Coimbatore',
        desc: 'Starting Point. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 2,
        name: 'Bhavani',
        desc: 'River Crossing. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 3,
        name: 'Sankagiri',
        desc: 'Fort View. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1585011910629-4505370eb0d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 4,
        name: 'Lady\'s Seat',
        desc: 'Panoramic View. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1610010978864-44a6ff417855?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 5,
        name: 'Gent\'s Seat',
        desc: 'Valley Overlook. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1626082895617-2c6ad5f8386f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 6,
        name: 'Children\'s Seat',
        desc: 'Scenic Spot. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1605658607312-3f5f3e4c4bf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 7,
        name: 'Pagoda Point',
        desc: 'Stone Pagodas View. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 8,
        name: 'Yercaud Lake',
        desc: 'Emerald Lake Boating. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ],
    roadDetails: {
      type: 'National Highway & Ghat Road',
      width: '4-Lane (Highway), Double Lane (Ghats)',
      quality: 'Excellent',
      hairpins: '20 Bends',
      forestArea: '20% Forest Cover',
      wildlife: 'Rare (Monkeys at viewpoints)',
      fogLevel: 'Low to Medium',
      rainProb: '20% (Mostly Dry)',
      nightRide: 'Safe on Highway, Caution on Ghats',
      traffic: 'High near Salem',
      difficulty: 'Easy to Intermediate'
    },
    weather: {
      temp: '20',
      humidity: '65',
      rainChance: '15',
      fog: 'Mild',
      wind: '14',
      sunrise: '06:10 AM',
      sunset: '06:25 PM',
      visibility: '900'
    },
    gallery: [
      'https://images.unsplash.com/photo-1476903273183-fcf9a1ef1709?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505963779589-3286b24d9c72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1470763261775-689369d7a228?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465181702598-a37e5e31ce60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460599544977-96a84d436ec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1434151744838-8c0c4a456da8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    cost: {
      'bike-commuter': { fuel: '350', food: '500', hotel: '1000', parking: '50', entry: '150', total: '2050' },
      'bike-cruiser': { fuel: '550', food: '500', hotel: '1000', parking: '50', entry: '150', total: '2250' },
      'bike-sports': { fuel: '750', food: '500', hotel: '1000', parking: '50', entry: '150', total: '2450' },
      car: { fuel: '1300', food: '1500', hotel: '2500', parking: '200', entry: '400', total: '5900' },
      suv: { fuel: '1800', food: '2000', hotel: '3500', parking: '250', entry: '600', total: '8150' }
    }
  },
  'coimbatore-munnar': {
    title: 'Coimbatore to Munnar',
    stats: {
      distance: '160 km',
      time: '4.5 hours',
      condition: 'Good, Forest Ghat Roads',
      fuelEstimate: { bike: '4 Liters', car: '12 Liters', suv: '16 Liters' }
    },
    timeline: [
      { id: 1, name: 'Coimbatore', desc: 'Starting Point' },
      { id: 2, name: 'Pollachi', desc: 'Highway Stretch' },
      { id: 3, name: 'Udumalpet', desc: 'Foothills' },
      { id: 4, name: 'Chinnar Wildlife Sanctuary', desc: 'Forest Drive' },
      { id: 5, name: 'Marayoor', desc: 'Sandalwood Forests' },
      { id: 6, name: 'Muniyara Dolmens', desc: 'Ancient Tombs' },
      { id: 7, name: 'Lakkam Waterfalls', desc: 'Scenic Cascade' },
      { id: 8, name: 'Eravikulam National Park', desc: 'Nilgiri Tahr' },
      { id: 9, name: 'Rajamalai View Point', desc: 'Hilltop View' },
      { id: 10, name: 'Tea Museum', desc: 'Tea History' },
      { id: 11, name: 'Photo Point', desc: 'Tea Gardens' },
      { id: 12, name: 'Mattupetty Dam', desc: 'Boating Lake' },
      { id: 13, name: 'Echo Point', desc: 'Mountain Echoes' },
      { id: 14, name: 'Kundala Lake', desc: 'Shikara Rides' },
      { id: 15, name: 'Top Station', desc: 'Highest Viewpoint' },
      { id: 16, name: 'Pothamedu View Point', desc: 'Valley Overlook' },
      { id: 17, name: 'Lockhart Gap View Point', desc: 'Breathtaking Vista' },
      { id: 18, name: 'Attukad Waterfalls', desc: 'Rolling Falls' },
      { id: 19, name: 'Blossom International Park', desc: 'Flora & Fauna' },
      { id: 20, name: 'Munnar', desc: 'Final Destination' }
    ],
    viewpoints: [
      {
        id: 1,
        name: 'Coimbatore',
        desc: 'Starting Point. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 2,
        name: 'Eravikulam National Park',
        desc: 'Nilgiri Tahr. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 3,
        name: 'Rajamalai View Point',
        desc: 'Hilltop View. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1585011910629-4505370eb0d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 4,
        name: 'Photo Point',
        desc: 'Tea Gardens. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1610010978864-44a6ff417855?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 5,
        name: 'Mattupetty Dam',
        desc: 'Boating Lake. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1626082895617-2c6ad5f8386f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 6,
        name: 'Echo Point',
        desc: 'Mountain Echoes. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1605658607312-3f5f3e4c4bf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 7,
        name: 'Kundala Lake',
        desc: 'Shikara Rides. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 8,
        name: 'Top Station',
        desc: 'Highest Viewpoint. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ],
    roadDetails: {
      type: 'National Highway & Ghat Road',
      width: 'Double Lane',
      quality: 'Good (Patchy in forest)',
      hairpins: 'Several bends through Chinnar',
      forestArea: '60% Forest Cover',
      wildlife: 'High (Elephants in Chinnar)',
      fogLevel: 'Medium to High',
      rainProb: '50%',
      nightRide: 'Not Allowed through Chinnar',
      traffic: 'Moderate',
      difficulty: 'Intermediate'
    },
    weather: { temp: '16', humidity: '75', rainChance: '45', fog: 'High', wind: '15', sunrise: '06:15 AM', sunset: '06:20 PM', visibility: '700' },
    gallery: [
      'https://images.unsplash.com/photo-1502482367527-313463ffecf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1443689123861-12c8b0e88229?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1433838552654-1b1e06db1eb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1446413251785-5ee3f4bbbd2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1477517604430-b6a3be34f593?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1445831034292-6a84f3c05f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    cost: {
      'bike-commuter': { fuel: '300', food: '600', hotel: '1500', parking: '100', entry: '200', total: '2700' },
      'bike-cruiser': { fuel: '500', food: '600', hotel: '1500', parking: '100', entry: '200', total: '2900' },
      'bike-sports': { fuel: '700', food: '600', hotel: '1500', parking: '100', entry: '200', total: '3100' },
      car: { fuel: '1200', food: '2000', hotel: '4000', parking: '300', entry: '500', total: '8000' },
      suv: { fuel: '1800', food: '2500', hotel: '5000', parking: '400', entry: '700', total: '10400' }
    }
  },
  'coimbatore-athirappilly': {
    title: 'Coimbatore to Athirappilly',
    stats: {
      distance: '180 km',
      time: '6 hours',
      condition: 'Scenic but Slow, Forest Roads',
      fuelEstimate: { bike: '4.5 Liters', car: '14 Liters', suv: '19 Liters' }
    },
    timeline: [
      { id: 1, name: 'Coimbatore', desc: 'Starting Point' },
      { id: 2, name: 'Pollachi', desc: 'Highway Stretch' },
      { id: 3, name: 'Aliyar Dam', desc: 'Reservoir View' },
      { id: 4, name: 'Monkey Falls', desc: 'Scenic Cascade' },
      { id: 5, name: '40 Hairpin Bends', desc: 'Steep Climb' },
      { id: 6, name: "Loam's View Point", desc: 'Dam Panorama' },
      { id: 7, name: 'Valparai', desc: 'Hill Station Stop' },
      { id: 8, name: 'Nallamudi Poonjolai View Point', desc: 'Deep Valley' },
      { id: 9, name: 'Sholayar Dam', desc: 'Massive Dam' },
      { id: 10, name: 'Malakkappara Check Post', desc: 'Kerala Border' },
      { id: 11, name: 'Vazhachal Forest', desc: 'Dense Jungle Drive' },
      { id: 12, name: 'Vazhachal Waterfalls', desc: 'River Rapids' },
      { id: 13, name: 'Charpa Waterfalls', desc: 'Roadside Falls' },
      { id: 14, name: 'Athirappilly Waterfalls', desc: 'The Niagara of India' },
      { id: 15, name: 'Athirappilly', desc: 'Final Destination' }
    ],
    viewpoints: [
      {
        id: 1,
        name: 'Coimbatore',
        desc: 'Starting Point. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 2,
        name: 'Aliyar Dam',
        desc: 'Reservoir View. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 3,
        name: 'Monkey Falls',
        desc: 'Scenic Cascade. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1585011910629-4505370eb0d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 4,
        name: 'Loam\'s View Point',
        desc: 'Dam Panorama. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1610010978864-44a6ff417855?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 5,
        name: 'Nallamudi Poonjolai View Point',
        desc: 'Deep Valley. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1626082895617-2c6ad5f8386f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 6,
        name: 'Sholayar Dam',
        desc: 'Massive Dam. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1605658607312-3f5f3e4c4bf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 7,
        name: 'Vazhachal Waterfalls',
        desc: 'River Rapids. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 8,
        name: 'Charpa Waterfalls',
        desc: 'Roadside Falls. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ],
    roadDetails: {
      type: 'Mountain & Deep Forest Road',
      width: 'Single/Double Lane',
      quality: 'Average (Bumpy in Kerala forest)',
      hairpins: '40 Bends',
      forestArea: '80% Deep Forest',
      wildlife: 'Very High (Elephants, Leopards)',
      fogLevel: 'High',
      rainProb: '60%',
      nightRide: 'Strictly Prohibited',
      traffic: 'Low',
      difficulty: 'Expert'
    },
    weather: { temp: '22', humidity: '85', rainChance: '55', fog: 'High', wind: '12', sunrise: '06:15 AM', sunset: '06:25 PM', visibility: '600' },
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1458668383970-45f43e50af5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1470071131384-001b85755b36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1426681224150-136f0db5b4f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511497584788-8770ef241680?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    cost: {
      'bike-commuter': { fuel: '350', food: '600', hotel: '1500', parking: '100', entry: '200', total: '2750' },
      'bike-cruiser': { fuel: '550', food: '600', hotel: '1500', parking: '100', entry: '200', total: '2950' },
      'bike-sports': { fuel: '750', food: '600', hotel: '1500', parking: '100', entry: '200', total: '3150' },
      car: { fuel: '1400', food: '2000', hotel: '4000', parking: '300', entry: '500', total: '8200' },
      suv: { fuel: '1900', food: '2500', hotel: '5000', parking: '400', entry: '700', total: '10500' }
    }
  },
  'coimbatore-wayanad': {
    title: 'Coimbatore to Wayanad',
    stats: {
      distance: '210 km',
      time: '6 hours',
      condition: 'Excellent Highway, Forest Sections',
      fuelEstimate: { bike: '5.5 Liters', car: '16 Liters', suv: '22 Liters' }
    },
    timeline: [
      { id: 1, name: 'Coimbatore', desc: 'Starting Point' },
      { id: 2, name: 'Mettupalayam', desc: 'Foothills' },
      { id: 3, name: 'Coonoor', desc: 'Tea Gardens' },
      { id: 4, name: 'Ooty', desc: 'Queen of Hill Stations' },
      { id: 5, name: 'Pykara Lake', desc: 'Scenic Boating' },
      { id: 6, name: 'Pykara Waterfalls', desc: 'Cascade' },
      { id: 7, name: 'Needle Rock View Point', desc: 'Panoramic Vista' },
      { id: 8, name: 'Mudumalai National Park', desc: 'Tiger Reserve' },
      { id: 9, name: 'Bandipur Forest', desc: 'Karnataka Border' },
      { id: 10, name: 'Gundlupet', desc: 'Sunflower Fields (Seasonal)' },
      { id: 11, name: 'Muthanga Wildlife Sanctuary', desc: 'Kerala Border' },
      { id: 12, name: 'Sulthan Bathery', desc: 'Town Center' },
      { id: 13, name: 'Edakkal Caves', desc: 'Ancient Petroglyphs' },
      { id: 14, name: 'Phantom Rock', desc: 'Skull Shaped Rock' },
      { id: 15, name: 'Karapuzha Dam', desc: 'Earth Dam' },
      { id: 16, name: 'Banasura Sagar Dam', desc: 'Largest Earth Dam' },
      { id: 17, name: 'Meenmutty Waterfalls', desc: '3-Tier Waterfall' },
      { id: 18, name: 'Soochipara Waterfalls', desc: 'Sentinel Rock Falls' },
      { id: 19, name: 'Chembra Peak', desc: 'Heart Shaped Lake' },
      { id: 20, name: 'Wayanad', desc: 'Final Destination' }
    ],
    viewpoints: [
      {
        id: 1,
        name: 'Coimbatore',
        desc: 'Starting Point. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 2,
        name: 'Coonoor',
        desc: 'Tea Gardens. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 3,
        name: 'Pykara Lake',
        desc: 'Scenic Boating. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1585011910629-4505370eb0d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 4,
        name: 'Needle Rock View Point',
        desc: 'Panoramic Vista. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1610010978864-44a6ff417855?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 5,
        name: 'Mudumalai National Park',
        desc: 'Tiger Reserve. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1626082895617-2c6ad5f8386f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 6,
        name: 'Edakkal Caves',
        desc: 'Ancient Petroglyphs. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1605658607312-3f5f3e4c4bf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 7,
        name: 'Karapuzha Dam',
        desc: 'Earth Dam. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 8,
        name: 'Banasura Sagar Dam',
        desc: 'Largest Earth Dam. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ],
    roadDetails: {
      type: 'Highway & Inter-State Forest Road',
      width: 'Double Lane',
      quality: 'Good to Excellent',
      hairpins: '36 Bends (Ooty route)',
      forestArea: '40% Forest Cover',
      wildlife: 'High (Mudumalai, Bandipur, Muthanga)',
      fogLevel: 'Medium',
      rainProb: '45%',
      nightRide: 'Prohibited in Forest Zones (9 PM to 6 AM)',
      traffic: 'Heavy near Ooty',
      difficulty: 'Intermediate'
    },
    weather: { temp: '20', humidity: '80', rainChance: '45', fog: 'Medium', wind: '14', sunrise: '06:20 AM', sunset: '06:30 PM', visibility: '800' },
    gallery: [
      'https://images.unsplash.com/photo-1492011251392-570a256a4be8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1444459048701-447dd844ebad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    cost: {
      'bike-commuter': { fuel: '400', food: '700', hotel: '1500', parking: '100', entry: '250', total: '2950' },
      'bike-cruiser': { fuel: '650', food: '700', hotel: '1500', parking: '100', entry: '250', total: '3200' },
      'bike-sports': { fuel: '900', food: '700', hotel: '1500', parking: '100', entry: '250', total: '3450' },
      car: { fuel: '1600', food: '2200', hotel: '4000', parking: '300', entry: '600', total: '8700' },
      suv: { fuel: '2200', food: '2800', hotel: '5000', parking: '400', entry: '800', total: '11200' }
    }
  },
  'coimbatore-vagamon': {
    title: 'Coimbatore to Vagamon',
    stats: {
      distance: '240 km',
      time: '6.5 hours',
      condition: 'Highway & Winding Ghats',
      fuelEstimate: { bike: '6 Liters', car: '18 Liters', suv: '24 Liters' }
    },
    timeline: [
      { id: 1, name: 'Coimbatore', desc: 'Starting Point' },
      { id: 2, name: 'Pollachi', desc: 'Highway Stretch' },
      { id: 3, name: 'Udumalpet', desc: 'Foothills' },
      { id: 4, name: 'Marayoor', desc: 'Sandalwood Forests' },
      { id: 5, name: 'Munnar', desc: 'Tea Estates' },
      { id: 6, name: 'Lockhart Gap View Point', desc: 'Valley Overlook' },
      { id: 7, name: 'Anayirangal Dam', desc: 'Elephant Lake' },
      { id: 8, name: 'Poopara', desc: 'Spice Gardens' },
      { id: 9, name: 'Kuttikkanam', desc: 'Mist Covered Hills' },
      { id: 10, name: 'Pine Forest', desc: 'Walk in the Woods' },
      { id: 11, name: 'Parunthumpara View Point', desc: 'Eagle Rock' },
      { id: 12, name: 'Marmala Waterfalls', desc: 'Hidden Cascade' },
      { id: 13, name: 'Vagamon Meadows', desc: 'Rolling Green Hills' },
      { id: 14, name: 'Vagamon Lake', desc: 'Boating' },
      { id: 15, name: 'Thangal Para', desc: 'Spherical Rock Formation' },
      { id: 16, name: 'Murugan Hill', desc: 'Rock Cut Temple' },
      { id: 17, name: 'Kurisumala', desc: 'Dairy Farm & Ashram' },
      { id: 18, name: 'Vagamon', desc: 'Final Destination' }
    ],
    viewpoints: [
      {
        id: 1,
        name: 'Coimbatore',
        desc: 'Starting Point. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 2,
        name: 'Lockhart Gap View Point',
        desc: 'Valley Overlook. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 3,
        name: 'Anayirangal Dam',
        desc: 'Elephant Lake. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1585011910629-4505370eb0d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 4,
        name: 'Poopara',
        desc: 'Spice Gardens. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1610010978864-44a6ff417855?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 5,
        name: 'Kuttikkanam',
        desc: 'Mist Covered Hills. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1626082895617-2c6ad5f8386f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 6,
        name: 'Parunthumpara View Point',
        desc: 'Eagle Rock. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1605658607312-3f5f3e4c4bf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 7,
        name: 'Vagamon Meadows',
        desc: 'Rolling Green Hills. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 8,
        name: 'Vagamon Lake',
        desc: 'Boating. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ],
    roadDetails: {
      type: 'State Highway & Ghat Road',
      width: 'Double Lane',
      quality: 'Good',
      hairpins: 'Continuous Winding Curves',
      forestArea: '30% Forest Cover',
      wildlife: 'Low',
      fogLevel: 'Very High',
      rainProb: '55%',
      nightRide: 'Not Recommended (Heavy Fog)',
      traffic: 'Moderate',
      difficulty: 'Intermediate'
    },
    weather: { temp: '19', humidity: '78', rainChance: '50', fog: 'Very High', wind: '16', sunrise: '06:20 AM', sunset: '06:25 PM', visibility: '500' },
    gallery: [
      'https://images.unsplash.com/photo-1505300587285-d6027a052ff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1469521669192-cg13b9423b9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1421791240217-a0cb080b080a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1447752809965-0b04df16b6ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465935343323-28c0b2961e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504829817516-00445d4483a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    cost: {
      'bike-commuter': { fuel: '450', food: '700', hotel: '1200', parking: '100', entry: '200', total: '2650' },
      'bike-cruiser': { fuel: '700', food: '700', hotel: '1200', parking: '100', entry: '200', total: '2900' },
      'bike-sports': { fuel: '950', food: '700', hotel: '1200', parking: '100', entry: '200', total: '3150' },
      car: { fuel: '1800', food: '2200', hotel: '3500', parking: '300', entry: '500', total: '8300' },
      suv: { fuel: '2400', food: '2800', hotel: '4500', parking: '400', entry: '700', total: '10800' }
    }
  },
  'coimbatore-coorg': {
    title: 'Coimbatore to Coorg',
    stats: {
      distance: '330 km',
      time: '7 hours',
      condition: 'Highway & Ghat Roads',
      fuelEstimate: { bike: '8 Liters', car: '24 Liters', suv: '32 Liters' }
    },
    timeline: [
      { id: 1, name: 'Coimbatore', desc: 'Starting Point' },
      { id: 2, name: 'Mettupalayam', desc: 'Foothills' },
      { id: 3, name: 'Coonoor', desc: 'Tea Gardens' },
      { id: 4, name: 'Ooty', desc: 'Queen of Hill Stations' },
      { id: 5, name: 'Pykara Lake', desc: 'Scenic Boating' },
      { id: 6, name: 'Pykara Waterfalls', desc: 'Cascade' },
      { id: 7, name: 'Mudumalai National Park', desc: 'Tiger Reserve' },
      { id: 8, name: 'Bandipur National Park', desc: 'Karnataka Border' },
      { id: 9, name: 'Gundlupet', desc: 'Sunflower Fields' },
      { id: 10, name: 'Nanjangud', desc: 'Temple Town' },
      { id: 11, name: 'Mysuru', desc: 'City of Palaces' },
      { id: 12, name: 'Srirangapatna', desc: 'Historical Island' },
      { id: 13, name: 'Kushalnagar', desc: 'Gateway to Coorg' },
      { id: 14, name: 'Golden Temple (Bylakuppe)', desc: 'Tibetan Settlement' },
      { id: 15, name: 'Nisargadhama', desc: 'Bamboo Forest Island' },
      { id: 16, name: 'Dubare Elephant Camp', desc: 'Elephant Interaction' },
      { id: 17, name: 'Harangi Dam', desc: 'Reservoir View' },
      { id: 18, name: "Raja's Seat", desc: 'Sunset Point' },
      { id: 19, name: 'Madikeri Fort', desc: 'Historical Landmark' },
      { id: 20, name: 'Abbey Falls', desc: 'Popular Waterfall' },
      { id: 21, name: 'Mandalpatti View Point', desc: 'Off-road Adventure' },
      { id: 22, name: 'Coorg', desc: 'Final Destination' }
    ],
    viewpoints: [
      {
        id: 1,
        name: 'Coimbatore',
        desc: 'Starting Point. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 2,
        name: 'Coonoor',
        desc: 'Tea Gardens. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 3,
        name: 'Pykara Lake',
        desc: 'Scenic Boating. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1585011910629-4505370eb0d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 4,
        name: 'Mudumalai National Park',
        desc: 'Tiger Reserve. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1610010978864-44a6ff417855?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 5,
        name: 'Bandipur National Park',
        desc: 'Karnataka Border. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1626082895617-2c6ad5f8386f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 6,
        name: 'Harangi Dam',
        desc: 'Reservoir View. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1605658607312-3f5f3e4c4bf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 7,
        name: 'Raja\'s Seat',
        desc: 'Sunset Point. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 8,
        name: 'Madikeri Fort',
        desc: 'Historical Landmark. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ],
    roadDetails: {
      type: 'National Highway & Forest Road',
      width: '4-Lane & Double Lane',
      quality: 'Good to Excellent',
      hairpins: '36 Bends via Ooty',
      forestArea: '50% Forest Cover',
      wildlife: 'High (Bandipur, Mudumalai)',
      fogLevel: 'Low to Medium',
      rainProb: '40%',
      nightRide: 'Prohibited in Forest Zones',
      traffic: 'Moderate',
      difficulty: 'Intermediate'
    },
    weather: { temp: '18', humidity: '70', rainChance: '40', fog: 'Medium', wind: '12', sunrise: '06:15 AM', sunset: '06:30 PM', visibility: '800' },
    gallery: [
      'https://images.unsplash.com/photo-1465056836041-7977a44fceb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1430043922894-3860bb632128?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506198642301-4b71a2fc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1431631580251-409fc6d288d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1480074568708-e8b5c0103784?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508197775510-44ec0a997d4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    cost: {
      'bike-commuter': { fuel: '600', food: '1000', hotel: '2000', parking: '150', entry: '300', total: '4050' },
      'bike-cruiser': { fuel: '950', food: '1000', hotel: '2000', parking: '150', entry: '300', total: '4400' },
      'bike-sports': { fuel: '1300', food: '1000', hotel: '2000', parking: '150', entry: '300', total: '4750' },
      car: { fuel: '2400', food: '3000', hotel: '5000', parking: '400', entry: '800', total: '11600' },
      suv: { fuel: '3200', food: '4000', hotel: '7000', parking: '500', entry: '1000', total: '15700' }
    }
  },
  'coimbatore-chikmagalur': {
    title: 'Coimbatore to Chikmagalur',
    stats: {
      distance: '390 km',
      time: '8.5 hours',
      condition: 'Highway & Winding Ghats',
      fuelEstimate: { bike: '9 Liters', car: '27 Liters', suv: '36 Liters' }
    },
    timeline: [
      { id: 1, name: 'Coimbatore', desc: 'Starting Point' },
      { id: 2, name: 'Sathyamangalam', desc: 'Tiger Reserve' },
      { id: 3, name: 'Chamarajanagar', desc: 'Border Town' },
      { id: 4, name: 'Mysuru', desc: 'Heritage City' },
      { id: 5, name: 'Hassan', desc: 'Architecture Hub' },
      { id: 6, name: 'Belur', desc: 'Hoysala Capital' },
      { id: 7, name: 'Belur Temple', desc: 'Historic Architecture' },
      { id: 8, name: 'Mullayanagiri Base', desc: 'Start of the Peak Climb' },
      { id: 9, name: 'Mullayanagiri Peak', desc: 'Highest Peak in Karnataka' },
      { id: 10, name: 'Seethalayyanagiri', desc: 'Scenic Stop' },
      { id: 11, name: 'Baba Budangiri', desc: 'Sacred Mountain' },
      { id: 12, name: 'Manikyadhara Falls', desc: 'Holy Waterfall' },
      { id: 13, name: 'Jhari Falls', desc: 'Buttermilk Falls' },
      { id: 14, name: 'Hirekolale Lake', desc: 'Peaceful Reservoir' },
      { id: 15, name: 'Ayyanakere Lake', desc: 'Vast Scenic Lake' },
      { id: 16, name: 'Z Point', desc: 'Trekking Spot' },
      { id: 17, name: 'Kemmanagundi View Point', desc: 'Hill Station Overlook' },
      { id: 18, name: 'Chikmagalur', desc: 'Final Destination' }
    ],
    viewpoints: [
      {
        id: 1,
        name: 'Coimbatore',
        desc: 'Starting Point. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 2,
        name: 'Mullayanagiri Base',
        desc: 'Start of the Peak Climb. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 3,
        name: 'Mullayanagiri Peak',
        desc: 'Highest Peak in Karnataka. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1585011910629-4505370eb0d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 4,
        name: 'Manikyadhara Falls',
        desc: 'Holy Waterfall. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1610010978864-44a6ff417855?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 5,
        name: 'Jhari Falls',
        desc: 'Buttermilk Falls. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1626082895617-2c6ad5f8386f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 6,
        name: 'Hirekolale Lake',
        desc: 'Peaceful Reservoir. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1605658607312-3f5f3e4c4bf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 7,
        name: 'Ayyanakere Lake',
        desc: 'Vast Scenic Lake. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 8,
        name: 'Z Point',
        desc: 'Trekking Spot. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ],
    roadDetails: {
      type: 'National Highway & Steep Ghats',
      width: '4-Lane & Single Lane',
      quality: 'Good (Very narrow at peaks)',
      hairpins: 'Continuous Steep Bends near Peak',
      forestArea: '30% Forest Cover',
      wildlife: 'Low',
      fogLevel: 'Very High at Peaks',
      rainProb: '45%',
      nightRide: 'Not Recommended at Peaks',
      traffic: 'Moderate',
      difficulty: 'Expert (Near Mullayanagiri)'
    },
    weather: { temp: '16', humidity: '78', rainChance: '45', fog: 'High', wind: '18', sunrise: '06:15 AM', sunset: '06:25 PM', visibility: '600' },
    gallery: [
      'https://images.unsplash.com/photo-1496303254930-b3bb16410667?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1462002306734-601b0f0b4d45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1471180295874-904eb178b5ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1446776899648-aa14c53d0d82?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1443632864897-a6bdcb2dfce1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1490682143002-421714b62db6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    cost: {
      'bike-commuter': { fuel: '700', food: '1200', hotel: '2000', parking: '150', entry: '300', total: '4350' },
      'bike-cruiser': { fuel: '1100', food: '1200', hotel: '2000', parking: '150', entry: '300', total: '4750' },
      'bike-sports': { fuel: '1500', food: '1200', hotel: '2000', parking: '150', entry: '300', total: '5150' },
      car: { fuel: '2700', food: '3500', hotel: '5500', parking: '400', entry: '800', total: '12900' },
      suv: { fuel: '3600', food: '4500', hotel: '7500', parking: '500', entry: '1000', total: '17100' }
    }
  },
  'coimbatore-agumbe': {
    title: 'Coimbatore to Agumbe',
    stats: {
      distance: '480 km',
      time: '10.5 hours',
      condition: 'Highway & Dense Rainforest',
      fuelEstimate: { bike: '11 Liters', car: '33 Liters', suv: '45 Liters' }
    },
    timeline: [
      { id: 1, name: 'Coimbatore', desc: 'Starting Point' },
      { id: 2, name: 'Sathyamangalam', desc: 'Tiger Reserve' },
      { id: 3, name: 'Mysuru', desc: 'Heritage City' },
      { id: 4, name: 'Hassan', desc: 'Architecture Hub' },
      { id: 5, name: 'Belur', desc: 'Hoysala Capital' },
      { id: 6, name: 'Chikmagalur', desc: 'Coffee Land' },
      { id: 7, name: 'Balehonnur', desc: 'Bhadra River' },
      { id: 8, name: 'Sringeri', desc: 'Temple Town' },
      { id: 9, name: 'Agumbe Ghat', desc: '14 Hairpin Bends' },
      { id: 10, name: 'Agumbe Sunset View Point', desc: 'Arabian Sea View' },
      { id: 11, name: 'Onake Abbi Falls', desc: 'Trekking Destination' },
      { id: 12, name: 'Barkana Falls View', desc: 'Tenth Highest Falls' },
      { id: 13, name: 'Jogigundi Falls', desc: 'Cave Falls' },
      { id: 14, name: 'Kundadri Hills', desc: 'Jain Temple & View' },
      { id: 15, name: 'Rainforest Research Station', desc: 'King Cobra Hub' },
      { id: 16, name: 'Agumbe', desc: 'Final Destination' }
    ],
    viewpoints: [
      {
        id: 1,
        name: 'Coimbatore',
        desc: 'Starting Point. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 2,
        name: 'Balehonnur',
        desc: 'Bhadra River. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 3,
        name: 'Agumbe Sunset View Point',
        desc: 'Arabian Sea View. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1585011910629-4505370eb0d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 4,
        name: 'Onake Abbi Falls',
        desc: 'Trekking Destination. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1610010978864-44a6ff417855?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 5,
        name: 'Barkana Falls View',
        desc: 'Tenth Highest Falls. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1626082895617-2c6ad5f8386f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 6,
        name: 'Jogigundi Falls',
        desc: 'Cave Falls. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1605658607312-3f5f3e4c4bf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 7,
        name: 'Kundadri Hills',
        desc: 'Jain Temple & View. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ],
    roadDetails: {
      type: 'National Highway & Dense Ghat Road',
      width: 'Double Lane',
      quality: 'Good to Excellent',
      hairpins: '14 Bends',
      forestArea: '80% Dense Rainforest',
      wildlife: 'High (King Cobras, Lion-tailed Macaques)',
      fogLevel: 'Very High',
      rainProb: '90% (Cherrapunji of South)',
      nightRide: 'Prohibited',
      traffic: 'Low',
      difficulty: 'Expert'
    },
    weather: { temp: '22', humidity: '95', rainChance: '85', fog: 'Very High', wind: '14', sunrise: '06:20 AM', sunset: '06:35 PM', visibility: '400' },
    gallery: [
      'https://images.unsplash.com/photo-1476903273183-fcf9a1ef1709?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505963779589-3286b24d9c72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1470763261775-689369d7a228?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465181702598-a37e5e31ce60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460599544977-96a84d436ec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1434151744838-8c0c4a456da8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    cost: {
      'bike-commuter': { fuel: '850', food: '1500', hotel: '2500', parking: '200', entry: '400', total: '5450' },
      'bike-cruiser': { fuel: '1350', food: '1500', hotel: '2500', parking: '200', entry: '400', total: '5950' },
      'bike-sports': { fuel: '1850', food: '1500', hotel: '2500', parking: '200', entry: '400', total: '6450' },
      car: { fuel: '3300', food: '4000', hotel: '6500', parking: '500', entry: '1000', total: '15300' },
      suv: { fuel: '4500', food: '5000', hotel: '8500', parking: '600', entry: '1200', total: '19800' }
    }
  },
  'coimbatore-sakleshpur': {
    title: 'Coimbatore to Sakleshpur',
    stats: {
      distance: '370 km',
      time: '8 hours',
      condition: 'Highway & Scenic Ghats',
      fuelEstimate: { bike: '8 Liters', car: '25 Liters', suv: '34 Liters' }
    },
    timeline: [
      { id: 1, name: 'Coimbatore', desc: 'Starting Point' },
      { id: 2, name: 'Sathyamangalam', desc: 'Tiger Reserve' },
      { id: 3, name: 'Chamarajanagar', desc: 'Border Town' },
      { id: 4, name: 'Mysuru', desc: 'Heritage City' },
      { id: 5, name: 'Hassan', desc: 'Architecture Hub' },
      { id: 6, name: 'Manjarabad Fort', desc: 'Star-shaped Fort' },
      { id: 7, name: 'Bisle Ghat View Point', desc: 'Tri-district View' },
      { id: 8, name: 'Jenukal Gudda Peak', desc: 'Second Highest Peak' },
      { id: 9, name: 'Mookanamane Falls', desc: 'Secluded Waterfall' },
      { id: 10, name: 'Magajahalli Waterfalls', desc: 'Hanbal Falls' },
      { id: 11, name: 'Hemavathi Backwaters', desc: 'Peaceful Reservoir' },
      { id: 12, name: 'Patla Betta View Point', desc: 'Stunning Ridge' },
      { id: 13, name: 'Pandavar Gudda', desc: 'Mythological Hill' },
      { id: 14, name: 'Sakleshpur Railway Bridge View', desc: 'Green Route' },
      { id: 15, name: 'Sakleshpur', desc: 'Final Destination' }
    ],
    viewpoints: [
      {
        id: 1,
        name: 'Coimbatore',
        desc: 'Starting Point. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 2,
        name: 'Manjarabad Fort',
        desc: 'Star-shaped Fort. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 3,
        name: 'Bisle Ghat View Point',
        desc: 'Tri-district View. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1585011910629-4505370eb0d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 4,
        name: 'Jenukal Gudda Peak',
        desc: 'Second Highest Peak. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1610010978864-44a6ff417855?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 5,
        name: 'Mookanamane Falls',
        desc: 'Secluded Waterfall. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1626082895617-2c6ad5f8386f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 6,
        name: 'Magajahalli Waterfalls',
        desc: 'Hanbal Falls. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1605658607312-3f5f3e4c4bf2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 7,
        name: 'Patla Betta View Point',
        desc: 'Stunning Ridge. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 8,
        name: 'Sakleshpur Railway Bridge View',
        desc: 'Green Route. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1627997864388-757022067aa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ],
    roadDetails: {
      type: 'National Highway & State Highway',
      width: '4-Lane & Double Lane',
      quality: 'Excellent',
      hairpins: 'Winding roads, minimal hairpins',
      forestArea: '40% Forest Cover',
      wildlife: 'Low',
      fogLevel: 'High',
      rainProb: '50%',
      nightRide: 'Exercise Caution',
      traffic: 'Moderate',
      difficulty: 'Intermediate'
    },
    weather: { temp: '19', humidity: '75', rainChance: '50', fog: 'High', wind: '16', sunrise: '06:15 AM', sunset: '06:25 PM', visibility: '700' },
    gallery: [
      'https://images.unsplash.com/photo-1502482367527-313463ffecf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1443689123861-12c8b0e88229?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1433838552654-1b1e06db1eb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1446413251785-5ee3f4bbbd2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1477517604430-b6a3be34f593?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1445831034292-6a84f3c05f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    cost: {
      'bike-commuter': { fuel: '650', food: '1200', hotel: '2000', parking: '150', entry: '300', total: '4300' },
      'bike-cruiser': { fuel: '1000', food: '1200', hotel: '2000', parking: '150', entry: '300', total: '4650' },
      'bike-sports': { fuel: '1400', food: '1200', hotel: '2000', parking: '150', entry: '300', total: '5050' },
      car: { fuel: '2500', food: '3500', hotel: '5000', parking: '400', entry: '800', total: '12200' },
      suv: { fuel: '3400', food: '4500', hotel: '7000', parking: '500', entry: '1000', total: '16400' }
    }
  }
};

export const reviews = [
  {
    id: 1,
    name: 'Karthikeyan',
    rating: 5,
    text: 'XPLOREIVE made our Valparai trip perfectly planned. The route details were spot on, especially the hairpin bend information!',
    image: 'https://i.pravatar.cc/150?u=karthik',
    tripPhoto: '/motorcycle_trip.png'
  },
  {
    id: 2,
    name: 'Divya Bharathi',
    rating: 5,
    text: 'The weather and road quality details saved us from a foggy night ride. Extremely premium experience.',
    image: 'https://i.pravatar.cc/150?u=divya',
    tripPhoto: '/foggy_ride.png'
  }
];

export const galleryImages = [
  '/ooty.jpg',
  '/valparai.jpg',
  '/kodaikanal.jpg',
  '/coonoor_new.png',
  '/kotagiri.png',
  '/yercaud.png'
];

export const getRouteData = (id) => {
  if (routeDetails[id]) return routeDetails[id];
  
  const parts = id ? id.split('-') : [];
  const from = parts[0] ? parts[0].charAt(0).toUpperCase() + parts[0].slice(1) : 'Origin';
  const to = parts[1] ? parts[1].charAt(0).toUpperCase() + parts[1].slice(1) : 'Destination';
  
  return {
    title: `${from} to ${to}`,
    stats: {
      distance: '150 km',
      time: '4.5 hours',
      condition: 'Scenic Mountain Drive',
      fuelEstimate: { bike: '4 Liters', car: '10 Liters', suv: '15 Liters' }
    },
    timeline: [
      { id: 1, name: from, desc: 'Journey Begins' },
      { id: 2, name: 'Highway Stretch', desc: 'Cruising through the plains' },
      { id: 3, name: 'Mountain Base', desc: 'Start of Ghat Section' },
      { id: 4, name: 'Scenic Viewpoint', desc: 'Midway stop for photos' },
      { id: 5, name: to, desc: 'Destination reached' }
    ],
    viewpoints: [
      {
        id: 1,
        name: 'Scenic Viewpoint',
        desc: 'Midway stop for photos. A beautiful and serene spot perfect for taking a break and capturing some memories.',
        bestTime: 'Morning or Evening',
        photography: 'Excellent',
        parking: 'Available',
        entryFee: 'Nominal/Free',
        durationFromPrev: 'En route',
        image: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ],
    roadDetails: {
      type: 'State Highway & Mountain Road',
      width: 'Double Lane',
      quality: 'Good',
      hairpins: '20+ Bends',
      forestArea: '40% Forest',
      wildlife: 'Possible',
      fogLevel: 'Medium',
      rainProb: '30%',
      nightRide: 'Exercise Caution',
      traffic: 'Medium',
      difficulty: 'Intermediate'
    },
    weather: {
      temp: '22',
      humidity: '70',
      rainChance: '30',
      fog: 'Mild',
      wind: '10',
      sunrise: '06:20 AM',
      sunset: '06:15 PM',
      visibility: '1000'
    },
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1458668383970-45f43e50af5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1470071131384-001b85755b36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1426681224150-136f0db5b4f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511497584788-8770ef241680?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    cost: {
      'bike-commuter': { fuel: '250', food: '400', hotel: '1000', parking: '20', entry: '50', total: '1720' },
      'bike-cruiser': { fuel: '400', food: '400', hotel: '1000', parking: '20', entry: '50', total: '1870' },
      'bike-sports': { fuel: '600', food: '400', hotel: '1000', parking: '20', entry: '50', total: '2070' },
      car: { fuel: '1000', food: '1200', hotel: '3000', parking: '100', entry: '150', total: '5450' },
      suv: { fuel: '1500', food: '1800', hotel: '4000', parking: '150', entry: '200', total: '7650' }
    }
  };
};
