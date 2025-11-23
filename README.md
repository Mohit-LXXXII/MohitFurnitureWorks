# Mohit Furniture Works - Landing Page

A modern, clean, and fully responsive landing page for a premium furniture shop built with **Next.js** and **Tailwind CSS**.

## 🌟 Features

### UI/UX Design
- ✨ Modern, premium, minimalistic design
- 🎨 White background with blue and purple gradient theme
- 📱 Fully responsive layout (mobile, tablet, desktop)
- 🎯 Smooth animations and hover effects
- 🔤 Professional typography with optimal spacing

### SEO Optimization
- 📍 Semantic HTML structure (header, nav, section, footer)
- 🏷️ Meta tags for title, description, keywords
- 🖼️ Image alt text support
- ⚡ Fast-loading optimized components
- 🔍 Mobile-friendly design

### Key Sections
1. **Navigation Bar** - Sticky header with mobile menu
2. **Hero Section** - Eye-catching banner with CTAs
3. **About Section** - Business information and highlights
4. **Featured Products** - 6 furniture category cards
5. **Services** - 6 service offering cards
6. **Testimonials** - Customer reviews with ratings
7. **Footer** - Contact info, hours, and quick links

### CTA Functionality
- 🗺️ **Visit Us** - Direct Google Maps link
- 📞 **Call Now** - Tel: link to phone (+91 9876543210)
- 💬 **Get Consultation** - Free consultation CTA

## 📋 Project Structure

```
MohitFurnitureWorks/
├── app/
│   ├── layout.js           # Root layout with metadata
│   ├── globals.css         # Global styles and Tailwind directives
│   └── page.js             # Main page component
├── components/
│   ├── Navbar.js           # Navigation component
│   ├── Hero.js             # Hero section
│   ├── About.js            # About section
│   ├── Products.js         # Featured products
│   ├── Services.js         # Services section
│   ├── Testimonials.js     # Customer testimonials
│   └── Footer.js           # Footer component
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── next.config.js          # Next.js configuration
├── jsconfig.json           # JS config with path aliases
├── package.json            # Dependencies
└── .gitignore              # Git ignore file
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3
- **Language**: JavaScript
- **Build Tool**: Next.js built-in
- **CSS Processing**: PostCSS + Autoprefixer

## 🚀 Installation & Setup

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Step 1: Install Dependencies

```bash
cd MohitFurnitureWorks
npm install
```

### Step 2: Run Development Server

```bash
npm run dev
```

The app will be available at **http://localhost:3000**

### Step 3: Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to modify the color theme:

```javascript
colors: {
  'primary': '#3B82F6',      // Blue
  'secondary': '#8B5CF6',    // Purple
  'accent': '#A78BFA',       // Light Purple
}
```

### Contact Information
Update in `components/Footer.js` and `components/Hero.js`:
- Phone number: `+91 9876543210`
- Email: `info@mohitfurniture.com`
- Address: Update the footer address field

### Google Maps Link
Update in `components/Hero.js`:
```javascript
href="https://www.google.com/maps/search/Mohit+Furniture+Works"
```

Replace with your actual business location or Google Maps link.

### Content
Edit component files to update:
- Business name and tagline
- About information
- Product categories
- Services offered
- Testimonials
- Working hours

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive with:
- Mobile-first design
- Responsive grid layouts
- Flexible navigation (hamburger menu on mobile)
- Optimized spacing for all screen sizes

## 🎯 SEO Features

- ✅ Meta title and description
- ✅ Keywords meta tag
- ✅ Open Graph tags
- ✅ Twitter card tags
- ✅ Semantic HTML structure
- ✅ Fast page load (optimized components)
- ✅ Mobile-responsive design
- ✅ Image alt attributes

## 📊 Performance

The project is optimized for:
- ⚡ Fast initial load
- 🎯 Lighthouse scores
- 📱 Mobile performance
- ♿ Accessibility

## 🔗 Key Links in Components

### Navbar
- Links to all sections with smooth scroll
- Mobile hamburger menu
- Responsive design

### Hero Section
- "Visit Us" → Google Maps (edit URL)
- "Call Now" → tel:+919876543210

### Services Section
- "Get a Free Consultation" → tel:+919876543210

### Footer
- Phone: tel:+919876543210
- Email: info@mohitfurniture.com
- Working hours: Mon-Fri (9-8), Sat (10-6), Sun (11-5)

## 🎨 Design Highlights

- **Color Scheme**: White + Blue (#3B82F6) + Purple (#8B5CF6)
- **Gradient Effects**: Radial gradients in hero, service cards
- **Animations**: Fade-in, slide-in, hover scales
- **Typography**: Modern sans-serif with varied font weights
- **Spacing**: Generous padding and margins for premium feel
- **Cards**: Rounded corners with subtle shadows

## 📝 Environment Variables

No environment variables required for basic setup. 

For production deployment, you may want to:
- Set `NEXT_PUBLIC_BUSINESS_PHONE`
- Set `NEXT_PUBLIC_BUSINESS_EMAIL`
- Set `NEXT_PUBLIC_MAPS_URL`

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The project is compatible with any Node.js hosting:
- Netlify
- AWS Amplify
- Heroku
- Azure
- etc.

## 📄 License

This project is open source and available for commercial use.

## 📞 Support

For issues or customization needs, contact the development team.

---

**Built with ❤️ for Mohit Furniture Works**
