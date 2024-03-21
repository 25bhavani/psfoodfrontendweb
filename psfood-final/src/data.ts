import {Food} from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';

export const sample_foods: Food[] = [
  {
    id:'1',
    name: 'Andhra Lunch',
    description: 'Tasty,spicy and tangy The Andhra Lunch box comes with your favorite pappu, pachadi, podi and ghee along with other deliciouses',
    cookTime: '40-50',
    price: 99,
    favorite: false,
    origins: ['India','Andhra'],
    stars: 4.5,
    imageUrl: 'assets/f1-transformed.webp',
    tags: ['Lunch'],
  },
  {
    id:'2',
    name: 'Kerala Lunch',
    description: 'Coconut oils, rich spices and papaddams is our signature of this exquisite lunch box ',
    price: 99,
    cookTime: '35-40',
    favorite: true,
    origins: ['India','Kerala'],
    stars: 4.7,
    imageUrl: 'assets/f2-transformed.webp',
    tags: [ 'Lunch'],
  },
  {
    id:'3',
    name: 'Kannada Lunch',
    description: 'Dishes with loads of ghee, Jaggery and wide variety of baths makes this box special. ',
    price: 99,
    cookTime: '40-45',
    favorite: false,
    origins: ['India','Karnataka'],
    stars: 3.5,
    imageUrl: 'assets/ff3-transformed.jpeg',
    tags: ['Lunch'],
  },
  {
    id:'4',
    name: 'TamilNadu Lunch',
    description: 'Aromatic, delicious and mouth watering dishes like Sambar poriyal makes this lunch yummy.',
    price: 99,
    cookTime: '30-40',
    favorite: true,
    origins: ['India','TamilNadu'],
    stars: 3.3,
    imageUrl: 'assets/ff4-transformed.jpeg',
    tags: ['Lunch'],
  },
  {
    id:'5',
    name: 'North Indian Lunch',
    description: 'Variety of hot parathas, spicy panner and mouth watering sweets make this box special. ',
    price: 99,
    cookTime: '40-50',
    favorite: false,
    origins: ['india', ],
    stars: 3.0,
    imageUrl: 'assets/ff5-transformed.jpg',
    tags: ['Lunch'],
  },
  {
    id:'6',
    name: 'Veg Biryani',
    description: 'Hot sizzling and spicy dish with right mix of veggies and huge content of ghee makes this extra special. ',
    price: 99,
    cookTime: '25-30',
    favorite: false,
    origins: ['India'],
    stars: 4.0,
    imageUrl: 'assets/veg-biryani .png',
    tags: ['Biryani'],
  },

]

export const sample_tags:Tag[] = [
  { name: 'All', count: 6 },
  { name: 'Lunch', count: 5 },
  { name: 'Biryani', count:1 }

]



export const sample_users: any[] = [
  {
    name: 'Sowmya',
    email: 'sowmya@gmail.com',
    password: '12345',
    address: 'Bangalore',
    isAdmin: true,
  },
  {
    name: 'Bhavani',
    email: 'bhavani@gmail.com',
    password: '67890',
    address: 'Bangalore',
    isAdmin: false,
  },
];
