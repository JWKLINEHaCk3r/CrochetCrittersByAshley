# Crochet Critters by Ashley - E-commerce Website

A beautiful, fully-featured e-commerce website for handmade crochet products, built with Next.js, TypeScript, and Tailwind CSS. Ready for deployment on Netlify!

![Crochet Critters Logo](./public/logo.png)

## 🌟 Features

- **Modern Design**: Beautiful, responsive design with Tailwind CSS
- **E-commerce Ready**: Full shopping cart functionality and checkout process
- **User Authentication**: Login/signup system with user profiles
- **Product Management**: Product catalog with search, filtering, and categories
- **Mobile Responsive**: Optimized for all devices
- **Performance Optimized**: Built with Next.js for fast loading
- **SEO Friendly**: Optimized for search engines
- **Payment Integration**: Ready for Stripe payment processing
- **Easy Deployment**: One-click deployment to Netlify

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone and setup the project:**
   ```bash
   cd CrittersAK
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000` to see your website!

## 📁 Project Structure

```
CrittersAK/
├── components/         # Reusable UI components
├── context/           # React Context for state management
├── data/             # Sample product data
├── pages/            # Next.js pages (routing)
├── public/           # Static assets (images, icons)
├── styles/           # Global styles and Tailwind CSS
└── netlify.toml      # Netlify deployment configuration
```

## 🎨 Key Components

- **Header/Footer**: Navigation and site information
- **ProductCard**: Displays individual products
- **Cart System**: Full shopping cart functionality
- **Authentication**: Login/signup forms
- **Checkout**: Complete checkout flow with form validation

## 🛍️ Product Management

Products are currently stored in `data/products.ts`. To add new products:

1. Add product images to `public/products/`
2. Update the product array in `data/products.ts`
3. Follow the existing product structure:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  description: 'Product description',
  price: 29.99,
  image: '/products/product-image.jpg',
  category: 'Category Name',
  inStock: true,
  featured: false // Set to true for homepage
}
```

## 💳 Payment Integration

The site is ready for Stripe integration. To enable payments:

1. Create a Stripe account
2. Add your Stripe keys to environment variables
3. Update the checkout process in `pages/checkout.tsx`

## 🚀 Deployment to Netlify

### Option 1: One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy)

### Option 2: Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Connect to GitHub:**
   - Push your code to a GitHub repository
   - Connect your Netlify account to GitHub

3. **Deploy:**
   - In Netlify, click "New site from Git"
   - Select your repository
   - Build settings are automatically configured via `netlify.toml`

## 📸 Adding Your Logo and Images

1. **Replace the logo:**
   - Add your logo as `public/logo.png`
   - Remove `public/logo.png.placeholder`

2. **Add product images:**
   - Add product images to `public/products/`
   - Use descriptive filenames (e.g., `sunny-snail.jpg`)
   - Update image paths in `data/products.ts`

3. **Hero and about images:**
   - Add `public/hero-critter.jpg`
   - Add `public/ashley-portrait.jpg`

## 🎨 Customization

### Colors and Branding
The color scheme uses Tailwind CSS custom colors defined in `tailwind.config.js`:
- Primary: Teal/turquoise shades
- Secondary: Purple shades
- Custom gradient backgrounds

### Fonts
The site uses Inter font from Google Fonts, configured in `styles/globals.css`.

### Layout and Styling
- Responsive design with mobile-first approach
- Card-based layouts for products
- Smooth animations and hover effects
- Consistent spacing and typography

## 🔧 Configuration

### Environment Variables (for production)
```
STRIPE_PUBLISHABLE_KEY=pk_...
STRIPE_SECRET_KEY=sk_...
NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app
```

### Next.js Configuration
The site is configured for static export in `next.config.js` for optimal Netlify deployment.

## 📱 Mobile Responsiveness

The site is fully responsive with:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized layouts for all screen sizes
- Fast loading on mobile networks

## 🧪 Testing

Test the site locally:
- Check all pages load correctly
- Test the shopping cart functionality
- Verify responsive design on different screen sizes
- Test form submissions and navigation

## 🔍 SEO Features

- Meta tags and descriptions
- Semantic HTML structure
- Image alt texts
- Clean URL structure
- Fast loading times

## 📞 Support

For customization help or questions:
- Review the code comments
- Check Next.js and Tailwind CSS documentation
- Test changes locally before deploying

## 🎯 Next Steps

1. **Add Real Images**: Replace placeholder images with actual product photos
2. **Configure Payments**: Set up Stripe for real payment processing  
3. **Add Content**: Update product descriptions and about page content
4. **Test Everything**: Thoroughly test all functionality
5. **Launch**: Deploy to Netlify and share your beautiful store!

---

Built with ❤️ for Ashley's Crochet Critters
