# ✦ Sparkle Dental Care Website

A premium marketing website for Sparkle Dental Care, a dental clinic in Madhavaram, Chennai. Built with Next.js 16, featuring a luxurious clinical aesthetic with warm South Indian hospitality.

## 🎨 Design Philosophy

**Clinical Luxury meets Warm South Indian Hospitality**

- **Color Palette**: Warm ivory (#F9F6F1), Deep teal (#1A6B72), Warm gold (#C9A84C)
- **Typography**: Playfair Display (serif headings), DM Sans (body), Bebas Neue (accents)
- **Motion**: Subtle fade-up reveals, sparkle shimmer animation, smooth hover states

## 🚀 Tech Stack

- **Framework**: Next.js 16.2.6 (App Router)
- **Runtime**: Bun
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4
- **Fonts**: Google Fonts (next/font)

## 📁 Project Structure

```
sparkle-dental-clinic/
├── app/
│   ├── layout.tsx         # Root layout with fonts & metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles & animations
│   └── services/
│       └── page.tsx       # Services detail page
├── components/
│   ├── Navbar.tsx         # Sticky navigation with backdrop blur
│   ├── Hero.tsx           # Hero section with sparkle animation
│   ├── TrustBar.tsx       # Trust indicators strip
│   ├── ServicesGrid.tsx   # Services cards with hover effects
│   ├── WhyUs.tsx          # Feature highlights
│   ├── Testimonials.tsx   # Patient reviews carousel
│   ├── LocationCTA.tsx    # Map & contact information
│   └── Footer.tsx         # Site footer
├── lib/
│   └── constants.ts       # Clinic info, services, testimonials (fully typed)
└── tsconfig.json          # TypeScript configuration
```

## 🛠️ Getting Started

### Prerequisites

- [Bun](https://bun.sh) installed on your system

### Installation

```bash
# Install dependencies
bun install

# Run development server
bun dev

# Build for production
bun run build

# Start production server
bun start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## ✨ Key Features

### 1. **Sparkle Shimmer Effect**

The word "Sparkle" in the hero headline features a magical gold shimmer animation using CSS `background-clip: text`.

### 2. **Responsive Design**

Mobile-first approach with Tailwind breakpoints (sm/md/lg) ensuring perfect display on all devices.

### 3. **Smooth Animations**

- Fade-up reveals on scroll
- Floating tooth SVG animation
- Teal glow hover states on cards
- Smooth transitions throughout

### 4. **SEO Optimized**

- Comprehensive metadata in layout.js
- Semantic HTML structure
- Proper heading hierarchy
- Open Graph tags

### 5. **Accessibility**

- Proper ARIA labels
- Focus rings on interactive elements
- Alt text on all images
- Keyboard navigation support

### 6. **Performance**

- Next.js Image optimization
- Font optimization with next/font
- Efficient component structure
- Minimal JavaScript bundle

## 📞 Clinic Information

- **Name**: Sparkle Dental Care
- **Phone**: 095660 09206
- **Address**: Plot 9B, KKR Nagar, Madhavaram, Chennai, Tamil Nadu
- **Rating**: 4.4★
- **Hours**:
  - Mon-Sat: 10:30 AM - 9:00 PM
  - Sunday: 10:30 AM - 2:00 PM

## 🎯 Pages

### Home (`/`)

- Hero with sparkle animation
- Trust bar with key highlights
- Services grid (8 services)
- Why Choose Us section
- Patient testimonials
- Location & contact CTA
- Footer

### Services (`/services`)

- Detailed service descriptions
- FAQs for each service
- Booking CTA

## 🎨 Customization

### Update Clinic Information

Edit `lib/constants.js` to update:

- Clinic name, phone, address
- Services offered
- Testimonials
- Features

### Modify Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --color-bg: #f9f6f1;
  --color-teal: #1a6b72;
  --color-gold: #c9a84c;
  /* ... */
}
```

### Change Fonts

Update font imports in `app/layout.js`

## 📱 Mobile Optimization

- Hamburger menu consideration for mobile nav
- Touch-friendly button sizes
- Optimized images for mobile bandwidth
- Responsive typography scaling

## 🔧 Development Notes

- Uses Next.js App Router (not Pages Router)
- Client components marked with `"use client"`
- CSS-in-JS for dynamic hover states
- Inline styles for CSS variable usage

## 📄 License

Private project for Sparkle Dental Care.

## 🤝 Support

For technical support or customization requests, contact the development team.

---

Built with ❤️ for Sparkle Dental Care
