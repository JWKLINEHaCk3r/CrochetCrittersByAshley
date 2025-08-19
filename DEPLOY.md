# 🚀 Deploy to Netlify - Step by Step Guide

This guide will help you deploy your Crochet Critters website to Netlify for free!

## Method 1: Quick Deploy (Recommended)

### Step 1: Prepare Your Code
1. Make sure all your files are saved
2. Test locally with `npm run dev`
3. Build the project with `npm run build` to ensure everything works

### Step 2: Create a GitHub Repository
1. Go to [GitHub.com](https://github.com) and create a new repository
2. Name it something like `crochet-critters-store`
3. Make it public (required for free Netlify hosting)

### Step 3: Upload Your Code to GitHub
```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Crochet Critters store"

# Connect to your GitHub repository (replace with your actual repo URL)
git remote add origin https://github.com/YOUR_USERNAME/crochet-critters-store.git

# Push to GitHub
git push -u origin main
```

### Step 4: Deploy on Netlify
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "New site from Git"
3. Choose "GitHub" as your Git provider
4. Select your `crochet-critters-store` repository
5. Netlify will automatically detect it's a Next.js project
6. Click "Deploy site"

**That's it!** Netlify will:
- Automatically run `npm run build`
- Deploy your site
- Give you a free `.netlify.app` URL
- Auto-deploy every time you push to GitHub

## Method 2: Manual Upload

If you prefer not to use GitHub:

1. Run `npm run build` locally
2. Zip the `out` folder that gets created
3. Go to Netlify and drag & drop the zip file
4. Your site will be deployed instantly!

## Adding Your Custom Domain (Optional)

1. In your Netlify dashboard, go to Site Settings
2. Click "Domain management"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Environment Variables (For Stripe Integration)

When you're ready to add real payments:

1. In Netlify dashboard, go to Site Settings → Environment Variables
2. Add these variables:
   - `STRIPE_PUBLISHABLE_KEY`: Your Stripe public key
   - `STRIPE_SECRET_KEY`: Your Stripe secret key
3. Redeploy your site

## Free SSL Certificate

Netlify automatically provides free SSL certificates for all sites (the padlock icon in browsers).

## Performance Tips

Your site is already optimized for Netlify:
- Static export for fast loading
- Image optimization
- CSS/JS minification
- CDN distribution worldwide

## Custom URL

By default, Netlify gives you a random URL. To customize it:
1. Go to Site Settings → Site Information
2. Click "Change site name"
3. Choose something like `crochet-critters-ashley`
4. Your URL becomes `https://crochet-critters-ashley.netlify.app`

## Updating Your Site

To update your live site:
1. Make changes to your code
2. Push to GitHub: `git add .`, `git commit -m "Update"`, `git push`
3. Netlify automatically rebuilds and deploys!

## Troubleshooting

**Build fails?**
- Check that `npm run build` works locally
- Look at the deploy log in Netlify dashboard
- Ensure all dependencies are in `package.json`

**Images not showing?**
- Make sure images are in the `public` folder
- Use correct paths starting with `/` (e.g., `/logo.png`)

**Need help?**
- Check the Netlify documentation
- Look at the build logs for error messages
- Ensure Node.js version is compatible (we use v18)

---

🎉 **Congratulations!** Your Crochet Critters store is now live on the internet!
