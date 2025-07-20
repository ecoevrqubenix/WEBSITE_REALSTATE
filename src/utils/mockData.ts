export interface PropertyListing {
  id: string;
  title: string;
  type: 'apartment' | 'house' | 'villa' | 'penthouse';
  rent: number;
  deposit: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  furnishing: 'unfurnished' | 'semi-furnished' | 'fully-furnished';
  description: string;
  location: {
    address: string;
    city: string;
    state: string;
  };
  amenities: string[];
  images: string[];
  listedOn: string;
  owner: {
    id: string;
    name: string;
    phone: string;
  };
  isAvailable: boolean;
  allowedTenants: ('bachelors' |'working_professionals' | 'family' | 'couple')[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'tenant' | 'owner';
  avatar: string;
}

export const propertyListings: PropertyListing[] = [
  {
    id: "1",
    title: "Modern 2BHK in Downtown",
    type: "apartment",
    rent: 22000,
    deposit: 44000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    furnishing: "fully-furnished",
    description: "A beautiful modern apartment with all amenities including gym, swimming pool and 24/7 security.",
    location: {
      address: "123 Main St, Koramangala",
      city: "Bangalore",
      state: "Karnataka",
    },
    amenities: ["gym", "pool", "parking", "security", "elevator", "wifi"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
    ],
    listedOn: "2023-03-15",
    owner: {
      id: "o1",
      name: "Rajesh Kumar",
      phone: "987-654-3210",
    },
    isAvailable: true,
    allowedTenants: ["bachelor", "family", "couple"],
  },
  {
    id: "2",
    title: "Spacious 3BHK Villa",
    type: "villa",
    rent: 45000,
    deposit: 90000,
    bedrooms: 3,
    bathrooms: 3.5,
    area: 2500,
    furnishing: "semi-furnished",
    description: "Luxurious villa with garden, modern kitchen and spacious living area. Perfect for families.",
    location: {
      address: "456 Park Avenue, Bandra West",
      city: "Mumbai",
      state: "Maharashtra",
    },
    amenities: ["garden", "parking", "security", "air conditioning", "heating"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    ],
    listedOn: "2023-02-28",
    owner: {
      id: "o2",
      name: "Priya Sharma",
      phone: "987-654-3210",
    },
    isAvailable: true,
    allowedTenants: ["family"],
  },
  {
    id: "3",
    title: "Cozy 1BHK Near Campus",
    type: "apartment",
    rent: 12000,
    deposit: 24000,
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    furnishing: "semi-furnished",
    description: "Perfect for students. Close to university campus with great public transport.",
    location: {
      address: "789 College Road, Aundh",
      city: "Pune",
      state: "Maharashtra",
    },
    amenities: ["internet", "laundry", "heating", "study desk"],
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    ],
    listedOn: "2023-04-01",
    owner: {
      id: "o3",
      name: "Vikram Singh",
      phone: "555-123-4567",
    },
    isAvailable: true,
    allowedTenants: ["bachelor", "couple"],
  },
  {
    id: "4",
    title: "Luxury Penthouse with City View",
    type: "penthouse",
    rent: 75000,
    deposit: 150000,
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    furnishing: "fully-furnished",
    description: "Stunning penthouse with panoramic city views, designer furniture, and private terrace.",
    location: {
      address: "1000 Skyline Drive, Golf Course Road",
      city: "Gurgaon",
      state: "Haryana",
    },
    amenities: ["pool", "gym", "sauna", "concierge", "private elevator", "smart home", "terrace"],
    images: [
      "https://images.unsplash.com/photo-1545046171-a0273c978788",
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    ],
    listedOn: "2023-01-15",
    owner: {
      id: "o4",
      name: "Ritu Kapoor",
      phone: "305-789-0123",
    },
    isAvailable: true,
    allowedTenants: ["family", "couple"],
  },
  {
    id: "5",
    title: "Studio Apartment in Downtown",
    type: "apartment",
    rent: 16000,
    deposit: 16000,
    bedrooms: 0,
    bathrooms: 1,
    area: 500,
    furnishing: "unfurnished",
    description: "Compact studio apartment ideal for young professionals. Close to business district and nightlife.",
    location: {
      address: "50 Urban Street, Indira Nagar",
      city: "Delhi",
      state: "Delhi",
    },
    amenities: ["elevator", "security", "bike storage"],
    images: [
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80",
      "https://images.unsplash.com/photo-1530629013299-6cb10d168419",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    ],
    listedOn: "2023-04-15",
    owner: {
      id: "o5",
      name: "Arjun Mehta",
      phone: "312-555-6789",
    },
    isAvailable: true,
    allowedTenants: ["bachelor", "couple"],
  },
  {
    id: "6",
    title: "Family Home with Garden",
    type: "house",
    rent: 32000,
    deposit: 64000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    furnishing: "semi-furnished",
    description: "Spacious family home in quiet neighborhood with garden and modern kitchen.",
    location: {
      address: "123 Maple Street, Anna Nagar",
      city: "Chennai",
      state: "Tamil Nadu",
    },
    amenities: ["garden", "garage", "patio", "fireplace", "washer/dryer"],
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126",
    ],
    listedOn: "2023-03-20",
    owner: {
      id: "o6",
      name: "Anita Wilson",
      phone: "206-444-3322",
    },
    isAvailable: true,
    allowedTenants: ["family"],
  }
];

export const cities = [
  { name: "Bangalore", state: "Karnataka", count: 245 },
  { name: "Mumbai", state: "Maharashtra", count: 186 },
  { name: "Delhi", state: "Delhi", count: 120 },
  { name: "Chennai", state: "Tamil Nadu", count: 95 },
  { name: "Pune", state: "Maharashtra", count: 78 },
  { name: "Hyderabad", state: "Telangana", count: 112 },
];

export const users: User[] = [
  {
    id: "u1",
    name: "Alex Johnson",
    email: "alex@example.com",
    phone: "123-456-7890",
    role: "tenant",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: "u2",
    name: "Emma Davis",
    email: "emma@example.com",
    phone: "987-654-3210",
    role: "tenant",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: "o1",
    name: "John Smith",
    email: "john@example.com",
    phone: "123-456-7890",
    role: "owner",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    id: "o2",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "987-654-3210",
    role: "owner",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg"
  }
];

export const testimonials = [
  {
    id: "t1",
    name: "Jessica Williams",
    role: "Tenant",
    content: "I found my dream apartment in just two days. The zero brokerage model saved me thousands!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: "t2",
    name: "Robert Brown",
    role: "Owner",
    content: "As a property owner, I've had a seamless experience finding reliable tenants through this platform.",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg"
  },
  {
    id: "t3",
    name: "Michelle Garcia",
    role: "Tenant",
    content: "The direct communication with owners made the entire process transparent and hassle-free.",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg"
  }
];

export const benefits = [
  {
    id: "b1",
    title: "Zero Brokerage",
    description: "Save thousands with our no-commission model",
    icon: "wallet"
  },
  {
    id: "b2",
    title: "Verified Listings",
    description: "All properties and owners are verified by our team",
    icon: "check"
  },
  {
    id: "b3",
    title: "Direct Contact",
    description: "Communicate directly with property owners",
    icon: "message-circle"
  },
  {
    id: "b4",
    title: "Virtual Tours",
    description: "View properties virtually before visiting",
    icon: "video"
  }
];
