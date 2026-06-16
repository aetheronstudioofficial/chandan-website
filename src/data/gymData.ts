export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  intensity: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  category: 'facilities' | 'workouts' | 'classes';
  title: string;
}

export const programs: Program[] = [
  {
    id: 'weight-training',
    title: 'Weight Training',
    description: 'Build muscle, increase strength, and boost metabolism with expert-guided free weights and machine workouts.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    duration: '60 mins',
    intensity: 'Intermediate'
  },
  {
    id: 'cardio-fitness',
    title: 'Cardio Fitness',
    description: 'High-energy cardiovascular exercises designed to improve heart health, burn calories, and build stamina.',
    image: 'https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?q=80&w=800&auto=format&fit=crop',
    duration: '45 mins',
    intensity: 'Beginner'
  },
  {
    id: 'crossfit',
    title: 'CrossFit',
    description: 'High-intensity functional movements scaled for all fitness levels, combining gymnastics, weightlifting, and cardio.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    duration: '60 mins',
    intensity: 'Advanced'
  },
  {
    id: 'yoga',
    title: 'Yoga & Flexibility',
    description: 'Find balance, improve flexibility, and reduce stress in sessions focused on breath control and core alignment.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
    duration: '50 mins',
    intensity: 'All Levels'
  },
  {
    id: 'boxing',
    title: 'Boxing & MMA',
    description: 'Learn striking techniques, improve agility, and build exceptional core strength in a high-octane environment.',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop',
    duration: '60 mins',
    intensity: 'Intermediate'
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    description: 'One-on-one tailored fitness regimes, body compositions, and constant motivation with our elite coaches.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
    duration: 'Custom',
    intensity: 'All Levels'
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: '₹999',
    period: 'month',
    description: 'Perfect for self-guided fitness enthusiasts who want access to premium workout zones.',
    features: [
      'Access to Gym Floor & Cardio Zone',
      'Free Locker & Shower Facility',
      '1 Complimentary Fitness Consultation',
      'Standard Member Support'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    price: '₹1,999',
    period: 'month',
    description: 'Our most popular tier, offering customized mentoring and comprehensive wellness tracking.',
    features: [
      'All Basic Plan benefits',
      'Personal Trainer (2 sessions/week)',
      'Customized Diet & Nutrition Plan',
      'Access to Group Classes (Yoga, CrossFit)',
      'Monthly Body Composition Analysis'
    ],
    isPopular: true
  },
  {
    id: 'elite',
    name: 'Elite Plan',
    price: '₹2,999',
    period: 'month',
    description: 'The ultimate VIP fitness experience with unlimited coaching, premium recovery, and priority access.',
    features: [
      'All Premium Plan benefits',
      'Unlimited 1-on-1 Personal Training',
      'Customized Recovery Plans',
      'VIP Locker Lounge Access',
      'Priority Booking for Classes',
      'Bring a Friend Free (2 visits/month)'
    ]
  }
];

export const trainers: Trainer[] = [
  {
    id: 'rahul-kumar',
    name: 'Rahul Kumar',
    role: 'Strength & Conditioning Coach',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600&auto=format&fit=crop',
    bio: 'Former national powerlifter with over 8 years of coaching experience. Specializes in hypertrophy, strength training, and posture correction.',
    socials: {
      instagram: 'https://instagram.com/rahul',
      twitter: 'https://twitter.com/rahul',
      facebook: 'https://facebook.com/rahul'
    }
  },
  {
    id: 'amit-singh',
    name: 'Amit Singh',
    role: 'Cardio & HIIT Specialist',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop',
    bio: 'Certified HIIT instructor and marathon runner. Amit helps members shatter their fat loss goals while conditioning their cardiovascular endurance.',
    socials: {
      instagram: 'https://instagram.com/amit',
      twitter: 'https://twitter.com/amit'
    }
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    role: 'Yoga & Pilates Trainer',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop',
    bio: 'Completed 500 hours of Yoga Teacher Training in Rishikesh. Combines traditional Hatha Yoga with modern mobility flows for restoration.',
    socials: {
      instagram: 'https://instagram.com/priya',
      facebook: 'https://facebook.com/priya'
    }
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Vikram Aditya',
    role: 'Strength Enthusiast',
    quote: 'Best gym in Jagdishpur with excellent trainers. The premium equipment and space make every session highly efficient.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'test-2',
    name: 'Rohan Gupta',
    role: 'Beginner Athlete',
    quote: 'Extremely clean environment and premium quality equipment. The trainers actually pay attention and guide you step-by-step.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'test-3',
    name: 'Anjali Verma',
    role: 'Yoga & CrossFit Practitioner',
    quote: 'Highly recommended for both beginners and advanced athletes. The combination of intense weights and recovery yoga is fantastic.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    category: 'facilities',
    title: 'Strength Zone'
  },
  {
    id: 'gal-2',
    url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
    category: 'workouts',
    title: 'Barbell Workouts'
  },
  {
    id: 'gal-3',
    url: 'https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?q=80&w=800&auto=format&fit=crop',
    category: 'facilities',
    title: 'Cardio Deck'
  },
  {
    id: 'gal-4',
    url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
    category: 'classes',
    title: 'Yoga Practice'
  },
  {
    id: 'gal-5',
    url: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop',
    category: 'workouts',
    title: 'Boxing Ring'
  },
  {
    id: 'gal-6',
    url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
    category: 'classes',
    title: 'Personal Training Sessions'
  }
];
