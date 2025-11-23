# 🚀 Quick Start Guide - Mohit Furniture Works

## ⚡ Get Started in 3 Steps

### Step 1️⃣: Navigate to Project Directory
```powershell
cd d:\Mohit\Python\MohitFurnitureWorks
```

### Step 2️⃣: Install Dependencies
```powershell
npm install
```

This will install:
- ✅ Next.js 14
- ✅ React 18
- ✅ Tailwind CSS 3
- ✅ PostCSS & Autoprefixer

### Step 3️⃣: Start Development Server
```powershell
npm run dev
```

🎉 **Your site is live at: http://localhost:3000**

---

## 📂 Project Files Overview

| File/Folder | Purpose |
|-----------|---------|
| `app/layout.js` | Root layout with SEO metadata |
| `app/globals.css` | Tailwind directives and custom CSS |
| `app/page.js` | Main page (imports all components) |
| `components/Navbar.js` | Navigation header with mobile menu |
| `components/Hero.js` | Hero banner with CTAs |
| `components/About.js` | About the furniture shop |
| `components/Products.js` | Featured furniture categories |
| `components/Services.js` | Services offered |
| `components/Testimonials.js` | Customer reviews |
| `components/Footer.js` | Footer with contact info |
| `tailwind.config.js` | Tailwind theme customization |
| `package.json` | Dependencies and scripts |

---

## 🎨 Color Theme

The site uses a **white, blue, and purple gradient** theme:

- **Primary Blue**: `#3B82F6`
- **Primary Purple**: `#8B5CF6`
- **Light Purple**: `#A78BFA`
- **Background**: White (`#ffffff`)

---

## 📱 Features at a Glance

✨ **Hero Section**
- Shop tagline: "Quality Furniture for Every Home"
- 2 CTA buttons:
  - "Visit Us" → Google Maps
  - "Call Now" → Tel: +91 9876543210

📍 **Navigation**
- Sticky header
- Links to all sections
- Mobile hamburger menu

🛋️ **Featured Products**
- 6 furniture categories with icons
- Responsive card grid
- Hover animations

🔧 **Services**
- 6 service offerings
- Icon-based design
- Call-to-action section

💬 **Testimonials**
- Customer reviews with ratings
- Trust badges (experience, customers)

📞 **Footer**
- Contact information
- Working hours
- Quick links
- Social links ready

---

## 🔧 Common Customizations

### Change Phone Number
File: `components/Hero.js`, `components/Footer.js`, `components/Services.js`

Find and replace:
```javascript
href="tel:+919876543210"
```

### Update Google Maps Link
File: `components/Hero.js`

Find and replace:
```javascript
href="https://www.google.com/maps/search/Mohit+Furniture+Works"
```

### Edit Business Address
File: `components/Footer.js`

Find the address section and update:
```javascript
<span>123 Furniture Street, City Center, State 12345</span>
```

### Change Working Hours
File: `components/Footer.js` (Working Hours section)

---

## 🚀 Available Commands

```powershell
# Development server (hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Linting
npm run lint
```

---

## 📊 Sections Breakdown

### 1. Navbar
- Logo with brand name
- Desktop navigation links
- Mobile hamburger menu
- Sticky positioning

### 2. Hero
- Large headline with gradient text
- Subheading with value proposition
- 2 primary CTAs
- Trust badges (15+ years, 1000+ customers, 100% satisfaction)

### 3. About
- Company introduction
- 4 key highlights with checkmarks
- Image placeholder area
- Welcoming tone

### 4. Products
- 6 featured furniture categories
- Grid layout (responsive)
- Icon-based presentation
- Call-to-action per item

### 5. Services
- 6 service offerings
- Icon + description layout
- Consultation CTA section
- Group messaging

### 6. Testimonials
- 3 customer reviews
- Star ratings
- Author information
- Statistics section (4 key metrics)

### 7. Footer
- Brand info
- Quick links
- Services menu
- Contact information
- Working hours widget
- Copyright notice

---

## 💡 Pro Tips

1. **Fast Scrolling**: Click any navigation link to smoothly scroll to section
2. **Mobile Friendly**: Test on your phone - fully responsive
3. **Easy Updates**: Edit component files directly, changes auto-reload
4. **SEO Ready**: Meta tags are set up for search engines
5. **Deployment Ready**: Build and deploy to Vercel, Netlify, etc.

---

## 🎯 Next Steps

1. ✅ Install & run: `npm install && npm run dev`
2. 📝 Customize content (phone, address, etc.)
3. 🖼️ Add real images to public folder
4. 🎨 Adjust colors in `tailwind.config.js` if needed
5. 🚢 Deploy to production

---

## 📧 Support Files

- `README.md` - Full documentation
- `.gitignore` - Git configuration
- `next.config.js` - Next.js settings
- `tailwind.config.js` - Tailwind customization
- `postcss.config.js` - CSS processing
- `jsconfig.json` - JavaScript path aliases

---

**Happy coding! 🎉 Your furniture shop landing page is ready to shine!**
