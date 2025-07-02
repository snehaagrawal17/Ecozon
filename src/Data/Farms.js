export const farms = [
  {
    farmId: 'greenValleyOrganicFarm',
    name: 'Gopal Farm',
    description: 'We are focused on growing heirloom Indian ethnic specialty vegetables, tropical fruits, spices and Ayurvedic herbs sourced from seeds harvested from different regions of India including from the foothills of the Himalayas.',
    sustainability: 5,
    acres: 120,
    ecoFriendly: true,
    certifications: ['USDA Organic', 'Certified Naturally Grown'],
    model3d: 'modern_chair_11_fbx.compressed_kecte1-14-4-2025',
    location: {
      address: '332 Springtown Rd, New Paltz, NY 12561, USA',
      coordinates: { lat: 41.793556, lng: -74.085028 } // Converted DMS to decimal
    },
    images: [
      {
        url: 'https://res.cloudinary.com/dahht3ac1/image/upload/v1747333498/istockphoto-182796666-612x612_foir8l.jpg',
        caption: 'Lush Green Fields'
      },
      {
        url: 'https://res.cloudinary.com/dahht3ac1/image/upload/v1747333499/istockphoto-910244288-612x612_lirjch.jpg',
        caption: 'Freshly Harvested Organic Vegetables Plants'
      },
      {
        url: 'https://res.cloudinary.com/dahht3ac1/image/upload/v1747333494/istockphoto-1174111702-612x612_p49tpm.jpg',
        caption: 'Community Supported Agriculture Box'
      }
    ],
    price: 25.00,
    attribution: 'Images from Unsplash',
    plans: [
      {
        id: 'gvof_plan_1',
        name: 'Seasonal Vegetable Box',
        price: 50.00,
        frequency: 'Weekly',
        description: 'A selection of seasonal vegetables harvested fresh from our fields.'
      },
      {
        id: 'gvof_plan_2',
        name: 'Fruit and Vegetable Mix',
        price: 65.00,
        frequency: 'Weekly',
        description: 'Our popular mix of seasonal fruits and vegetables for a balanced diet.'
      },
      {
        id: 'gvof_plan_3',
        name: 'Treasure Box',
        price: 80.00,
        frequency: 'Bi-weekly',
        description: 'Our premium selection including vegetables, fruits, herbs, and a surprise item.'
      }
    ],
    addOns: [
      { id: 'gvof_addon_1', name: 'Gongura', price: 46.00, unit: 'Lbs' },
      { id: 'gvof_addon_2', name: 'Bottle Gourd Squash', price: 10.00, unit: 'Piece' }
    ]
  },
  {
    farmId: 'greenLeafFarm',
    name: 'Leafy Luxe Acres',
    description: 'Their innovative farming techniques have adapted hydroponic methods to the local climate, providing pesticide-free, chemical-free vegetables to health-conscious consumers in Mangaluru.',
    sustainability: 5,
    acres: 15,
    certifications: ['USDA Organic'],
    model3d: 'modern_chair_11_fbx.compressed_kecte1-14-4-2025',
    location: {
      address: 'Alibaug, Maharashtra',
      coordinates: { lat: 12.9141, lng: 74.8560 }
    },
    images: [
      {
        url: 'https://res.cloudinary.com/dahht3ac1/image/upload/v1747333501/green_fields_i7id9p.jpg',
        caption: 'Farm Overview at Green Leaf'
      },
      {
        url: 'https://res.cloudinary.com/dahht3ac1/image/upload/v1747333497/istockphoto-1365689821-612x612_hc6kna.jpg',
        caption: 'Fresh Organic Vegetables Pile'
      },
      {
        url: 'https://res.cloudinary.com/dahht3ac1/image/upload/v1747333499/istockphoto-910244288-612x612_lirjch.jpg',
        caption: 'Our Expansive Greenhouse'
      },
      {
        url: 'https://res.cloudinary.com/dahht3ac1/image/upload/v1747333945/green_box_zpbeaw.jpg',
        caption: 'Weekly Harvest Box from Green Leaf'
      }
    ],
    price: 49.99,
    attribution: 'Images from Unsplash',
    plans: [
      { id: 'glf_plan_1', name: 'Standard Veggie Box', price: 49.99, frequency: 'Weekly', description: 'A curated box of 7-9 types of seasonal organic vegetables and herbs.' },
      { id: 'glf_plan_2', name: 'Large Veggie Box', price: 65.00, frequency: 'Weekly', description: 'A larger selection of 10-12 types of seasonal organic vegetables and herbs for bigger households.' },
      { id: 'glf_plan_3', name: 'Herb Lover\'s Delight', price: 25.00, frequency: 'Bi-Weekly', description: 'A special selection of culinary and medicinal herbs.' }
    ],
    addOns: [
      { id: 'glf_addon_1', name: 'Organic Eggs', price: 7.00, unit: 'dozen' },
      { id: 'glf_addon_2', name: 'Microgreens Kit', price: 12.00, unit: 'kit' },
      { id: 'glf_addon_3', name: 'Artisanal Salad Dressing', price: 6.00, unit: 'bottle' }
    ]
  },
  {
    farmId: 'mountainViewFarm',
    name: 'Zen Veggie Retreat',
    description: 'Located at the base of snow-capped mountains, Zen Veggie Retreat is more than a farm – it’s a rejuvenating escape. The farm spans 10 acres and grows organic, non-GMO vegetables, from vibrant cherry tomatoes to crispy spinach. Visitors can book weekend retreats to experience the farm-to-table lifestyle and enjoy organic meals amidst nature.',
    sustainability: 5,
    acres: 10,
    certifications: ['Bee Friendly Farming', 'Certified Naturally Grown', 'State Forest Stewardship Program'],
    location: {
      address: 'Blue Mountain, Arkansas',
      coordinates: { lat: 47.7511, lng: -120.7401 }
    },
    images: [
      {
        url: 'https://res.cloudinary.com/dahht3ac1/image/upload/v1747334324/v_wixegk.jpg',
        caption: 'Scenic Mountain Terrain surrounding the Farm'
      },
      {
        url: 'https://res.cloudinary.com/dahht3ac1/image/upload/v1747334527/blueberries_gm47wx.jpg',
        caption: 'Hand-picked Wild Blueberries'
      },
      {
        url: 'https://res.cloudinary.com/dahht3ac1/image/upload/v1747333498/istockphoto-530253685-612x612_jcqrx0.jpg',
        caption: 'Crispy Spinach and Fresh Herbs'
      }
    ],
    price: 64.99,
    attribution: 'Images from Unsplash',
    plans: [
      { id: 'mvf_plan_1', name: 'Wild Blueberry Box (Seasonal)', price: 45.00, frequency: 'Weekly (July-Sept)', description: '5 lbs of fresh, wild mountain blueberries.' },
      { id: 'mvf_plan_2', name: 'Honey Lover\'s Subscription', price: 30.00, frequency: 'Monthly', description: 'Two jars of different seasonal raw honey varieties.' },
      { id: 'mvf_plan_3', name: 'Mountain Bounty Box', price: 64.99, frequency: 'Bi-Weekly (Seasonal)', description: 'A mix of blueberries, honey, cider, and other mountain treats.' }
    ],
    addOns: [
      { id: 'mvf_addon_1', name: 'Beeswax Candles (Set of 3)', price: 18.00, unit: 'set' },
      { id: 'mvf_addon_2', name: 'Blueberry Jam', price: 9.00, unit: 'jar' },
      { id: 'mvf_addon_3', name: 'Hard Cider (4-pack)', price: 20.00, unit: 'pack' },
      { id: 'mvf_addon_4', name: 'Crispy Spinach and Fresh Herbs (Seasonal)', price: 15.00, unit: '0.5lb' }
    ]
  },
  {
    farmId: 'oceanBreezeFarm',
    name: 'Verdant Valley Farmstead',
    description: 'A sprawling 30-acre farm nestled in the green valleys of Wayanad, Verdant Valley Farmstead offers a blend of traditional and modern farming practices. The farm is renowned for its pesticide-free, organic cucumbers, bell peppers, and leafy greens. Guests can book a stay at the farm’s eco-lodges and take part in seasonal harvesting events.',
    sustainability: 4,
    acres: 30,
    certifications: ['Marine Stewardship Council (MSC) Certified Sustainable Seafood (for wild catch)', 'Organic Seaweed Certified (ASC-MSC)', 'Best Aquaculture Practices (BAP) for farmed items'],
    location: {
      address: 'Wayanad, Kerala',
      coordinates: { lat: 43.6615, lng: -70.2553 }
    },
    images: [
      {
        url: 'https://res.cloudinary.com/dahht3ac1/image/upload/v1747334324/v_wixegk.jpg',
        caption: 'Stunning Coastal Views near Ocean Breeze Farm'
      },
      {
        url: 'https://res.cloudinary.com/dahht3ac1/image/upload/v1747335086/4_pm6toh.jpg',
        caption: 'Freshly Farmed'
      },
      {
        url: 'https://res.cloudinary.com/dahht3ac1/image/upload/v1747335085/2_gq4riu.jpg',
        caption: 'The Catch of the Day'
      },
      {
        url: 'https://res.cloudinary.com/dahht3ac1/image/upload/v1747334527/blueberries_gm47wx.jpg',
        caption: 'Harvesting Organic Seaweed'
      }
    ],
    price: 89.99,
    attribution: 'Images from Unsplash',
    plans: [
      { id: 'obf_plan_1', name: 'Organic Cucumbers Box', price: 89.99, frequency: 'Bi-weekly', description: 'A curated selection of 3-4 types of fresh, local seafood (approx 4-5 lbs total).' },
      { id: 'obf_plan_2', name: 'Leafy Greens Pack', price: 35.00, frequency: 'Monthly', description: 'A variety pack of fresh and dried organic leaves.' },
      { id: 'obf_plan_3', name: 'Bell Peppers', price: 75.00, frequency: 'Bi-weekly', description: 'Includes varieties (seasonal availability).' }
    ],
    addOns: [
      { id: 'obf_addon_1', name: 'Organic Cucumbers Box', price: 18.00, unit: 'lb' },
      { id: 'obf_addon_2', name: 'Leafy Greens Pack', price: 22.00, unit: '0.5lb pack' },
      { id: 'obf_addon_3', name: 'Bell Peppers', price: 10.00, unit: 'bag' }
    ]
  },
  {
    farmId: 'riverBendFarm',
    name: 'Green Haven Farm',
    description: 'Set amidst the misty hills of Coorg, Green Haven Farms is a haven for organic vegetable enthusiasts. This farm spans over 25 acres, cultivating a variety of leafy greens, root vegetables, and exotic herbs. With its eco-friendly practices, the farm ensures pesticide-free produce and also offers guided farm tours for visitors to learn about sustainable farming techniques.',
    sustainability: 4,
    acres: 25,
    certifications: ['American Grassfed Association', 'Animal Welfare Approved', 'Certified Cheese Professional on Staff'],
    location: {
      address: 'Coorg, Karnataka',
      coordinates: { lat: 46.8797, lng: -110.3626 }
    },
    images: [
      {
        url: 'https://res.cloudinary.com/dahht3ac1/image/upload/v1747333497/istockphoto-692869260-612x612_bgsqv9.jpg',
        caption: 'Expansive Fields at River Bend Farm'
      },
      {
        url: 'https://res.cloudinary.com/dahht3ac1/image/upload/v1747333496/istockphoto-1277767891-612x612_bdmvbu.jpg',
        caption: 'Content Grass-fed Cattle'
      },
      {
        url: 'https://res.cloudinary.com/dahht3ac1/image/upload/v1747334150/display_rupoyu.jpg',
        caption: 'Our Farmers Market Stand Display'
      },
      {
        url: 'https://res.cloudinary.com/dahht3ac1/image/upload/v1747334323/sel_vntmlk.jpg',
        caption: 'Selection of Artisanal Cheeses'
      }
    ],
    price: 159.99,
    attribution: 'Images from Unsplash',
    plans: [
      { id: 'rbf_plan_1', name: 'Grass-Fed Beef Box', price: 159.99, frequency: 'Monthly', description: 'Approx. 10 lbs of mixed grass-fed beef cuts (steaks, ground, roasts).' },
      { id: 'rbf_plan_2', name: 'Artisanal Cheese Selection', price: 75.00, frequency: 'Monthly', description: 'A curated selection of 4-5 artisanal cheeses made on-farm.' },
      { id: 'rbf_plan_3', name: 'Surf & Turf Special (Seasonal)', price: 199.00, frequency: 'Monthly', description: 'Beef box plus a selection of local partner\'s seafood.' }
    ],
    addOns: [
      { id: 'rbf_addon_1', name: 'Aged Cheddar Block', price: 15.00, unit: 'lb' },
      { id: 'rbf_addon_2', name: 'Summer Sausage', price: 12.00, unit: 'stick' },
      { id: 'rbf_addon_3', name: 'Fresh Ricotta', price: 9.00, unit: 'container' },
      { id: 'rbf_addon_4', name: 'Beef Jerky', price: 10.00, unit: 'bag' }
    ]
  },
  {
    farmId: 'goldenHarvestFarm',
    name: 'Ardor Roots Farm',
    description: 'Ardor Roots Farm focuses on cultivating rare and exotic vegetable varieties such as rainbow chard, purple broccoli, and multicolored carrots. Spanning over 12 acres in the cool valleys of Dehradun, the farm integrates regenerative agricultural practices, promoting soil health and biodiversity. The farm also conducts weekend workshops on composting and organic farming.',
    sustainability: 5,
    acres: 12,
    certifications: ['USDA Organic', 'Demeter Biodynamic Certified', 'Real Organic Project'],
    location: {
      address: 'Dehradun, Uttarakhand',
      coordinates: { lat: 38.9637, lng: -99.7000 }
    },
    images: [
      {
        url: 'https://res.cloudinary.com/dahht3ac1/image/upload/v1747335399/rainbow_gnzfym.jpg',
        caption: 'Rainbow chard'
      },
      {
        url: 'https://res.cloudinary.com/dahht3ac1/image/upload/v1747335400/purp_ox155s.jpg',
        caption: 'Purple broccoli'
      },
      {
        url: 'https://res.cloudinary.com/dahht3ac1/image/upload/v1747335399/purple_ste9bk.jpg',
        caption: 'Multicolored carrots'
      }
    ],
    price: 52.99,
    attribution: 'Images from Unsplash',
    plans: [
      { id: 'ghf_plan_1', name: 'Multicolored Carrots Box', price: 52.99, frequency: 'Monthly', description: 'A selection of 4-5 types of organic multicolored carrots.' },
      { id: 'ghf_plan_2', name: 'Purple Broccoli', price: 45.00, frequency: 'Monthly', description: 'A variety of broccoli.' },
      { id: 'ghf_plan_3', name: 'Rainbow Chard Box', price: 60.00, frequency: 'Monthly', description: 'Includes fresh rainbow chard.' }
    ],
    addOns: [
      { id: 'ghf_addon_1', name: 'Multicolored Carrots Box', price: 8.00, unit: '2 KG' },
      { id: 'ghf_addon_2', name: 'Organic Purple Broccoli', price: 6.00, unit: '1 Piece' },
      { id: 'ghf_addon_3', name: 'Rainbow Chard Box', price: 7.00, unit: '1 box' }
    ]
  }
];