import { Product } from '../context/CartContext'

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Sunny the Snail',
    description: 'A cheerful yellow snail with a beautiful spiral shell pattern. Perfect for brightening any room!',
    price: 28.99,
    image: '/products/sunny-snail.svg',
    category: 'Garden Friends',
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Luna the Owl',
    description: 'A wise and cuddly owl in soft purple and cream colors. Great bedtime companion!',
    price: 32.99,
    image: '/products/luna-owl.svg',
    category: 'Woodland Creatures',
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Rosie the Rabbit',
    description: 'An adorable pink bunny with long ears and a fluffy tail. Perfect for Easter or year-round cuddles!',
    price: 24.99,
    image: '/products/rosie-rabbit.svg',
    category: 'Woodland Creatures',
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: 'Oscar the Octopus',
    description: 'A friendly orange octopus with eight tentacles perfect for hugging. Made with super soft yarn.',
    price: 35.99,
    image: '/products/oscar-octopus.svg',
    category: 'Sea Friends',
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'Bella the Bear',
    description: 'A cuddly brown teddy bear with a red bow tie. A classic companion for all ages.',
    price: 29.99,
    image: '/products/bella-bear.svg',
    category: 'Woodland Creatures',
    inStock: true
  },
  {
    id: '6',
    name: 'Finn the Fox',
    description: 'A clever red fox with white markings and a bushy tail. Crafted with attention to every detail.',
    price: 31.99,
    image: '/products/finn-fox.svg',
    category: 'Woodland Creatures',
    inStock: true
  },
  {
    id: '7',
    name: 'Penelope the Penguin',
    description: 'A tuxedo-clad penguin with orange feet and beak. Waddle into your heart!',
    price: 26.99,
    image: '/products/penelope-penguin.svg',
    category: 'Arctic Friends',
    inStock: false
  },
  {
    id: '8',
    name: 'Charlie the Chameleon',
    description: 'A colorful chameleon that changes your mood! Made with rainbow-colored yarn.',
    price: 33.99,
    image: '/products/charlie-chameleon.svg',
    category: 'Tropical Friends',
    inStock: true
  },
  {
    id: '9',
    name: 'Daisy the Dinosaur',
    description: 'A friendly green brontosaurus perfect for little paleontologists. Soft and squeezable!',
    price: 38.99,
    image: '/products/daisy-dinosaur.svg',
    category: 'Prehistoric Pals',
    inStock: true
  },
  {
    id: '10',
    name: 'Sparkle the Unicorn',
    description: 'A magical white unicorn with rainbow mane and silver horn. Make wishes come true!',
    price: 42.99,
    image: '/products/sparkle-unicorn.svg',
    category: 'Magical Creatures',
    inStock: true
  }
]

export const categories = [
  'Garden Friends',
  'Woodland Creatures', 
  'Sea Friends',
  'Arctic Friends',
  'Tropical Friends',
  'Prehistoric Pals',
  'Magical Creatures'
]
