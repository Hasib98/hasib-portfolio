# S. M. Hasib — Portfolio Website

A modern, animated portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Responsive design with mobile-first approach
- Smooth scroll animations using Framer Motion
- Interactive UI elements with hover effects
- Phone mockup showcases for projects
- Animated timeline for career journey
- Lottie animations for hobbies section
- Custom Tailwind theme with playful color palette
- SEO optimized

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Lottie:** lottie-react

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd hasib-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
hasib-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navbar.tsx          # Sticky navigation with scroll-spy
│   ├── Hero.tsx            # Hero section with floating badges
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills with animated progress bars
│   ├── Projects.tsx        # Projects with phone mockups
│   ├── Journey.tsx         # Timeline component
│   ├── Achievements.tsx    # Achievement cards
│   ├── Hobbies.tsx         # Hobbies with Lottie animations
│   ├── Contact.tsx         # Contact section
│   ├── Footer.tsx          # Footer with back-to-top
│   ├── ScrollReveal.tsx    # Animation wrapper component
│   └── LottiePlayer.tsx    # Lottie player wrapper
├── public/
│   ├── cv/
│   │   └── hasib-cv.pdf    # CV file (replace with actual)
│   ├── lottie/             # Lottie animation files
│   └── images/             # Image assets (to be added)
├── IMAGES.md               # Image generation guide
└── README.md
```

## Customization

### Before Deploying - Replace Placeholders

#### 1. CV File

Replace `/public/cv/hasib-cv.pdf` with your actual CV PDF file.

#### 2. Images

Generate or add images following the prompts in `IMAGES.md`:

- Hero avatar illustration
- About section illustration
- Project phone screen mockups (3 per project)

Place generated images in `/public/images/` directory.

#### 3. Lottie Animations

Replace placeholder Lottie files in `/public/lottie/` with actual animations:

Download from:
- [LottieFiles](https://lottiefiles.com/)
- [IconScout](https://iconscout.com/lotties)

Required files:
- `guitar.json` - Guitar/music animation
- `rocket.json` - Space/rocket animation
- `code.json` - Coding animation
- `travel.json` - Travel/exploration animation

### Content Updates

All content can be updated directly in the component files:

- **Personal Info:** Update in `Hero.tsx`, `About.tsx`, `Contact.tsx`
- **Skills:** Modify the `skillCategories` array in `Skills.tsx`
- **Projects:** Update the `projects` array in `Projects.tsx`
- **Timeline:** Edit the `timeline` array in `Journey.tsx`
- **Achievements:** Update the `achievements` array in `Achievements.tsx`

### Color Theme

Colors are defined in `tailwind.config.ts`:

```typescript
colors: {
  ink: "#1A1A2E",    // Dark navy
  sky: "#4FC3F7",    // Sky blue
  candy: "#FF6B9D",  // Pink
  sun: "#FFD93D",    // Yellow
  cream: "#FAFAF7",  // Off-white background
}
```

### Fonts

The portfolio uses three font families loaded via Google Fonts:

- **Fredoka One** - Display headings
- **DM Sans** - Body text
- **JetBrains Mono** - Code/monospace text

Change fonts in `app/globals.css` (Google Fonts import) and `tailwind.config.ts` (font family configuration).

## Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository
2. Import the project to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

Build the static version:

```bash
npm run build
```

Deploy the `.next` folder and `public` directory to your hosting provider.

## Performance Optimizations

- Server-side rendering with Next.js App Router
- Lazy loading for Lottie animations
- Image optimization with Next.js Image component (when you add images)
- Minimal bundle size with tree-shaking
- CSS-in-JS via Tailwind CSS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a personal portfolio project. Feel free to use it as inspiration, but please don't copy it directly.

## Contact

- **Email:** smhasib1999@gmail.com
- **LinkedIn:** [S. M. Hasib](https://www.linkedin.com/in/s-m-hasib-1627a6161/)
- **GitHub:** [Hasib98](https://github.com/Hasib98)

---

Built with care by S. M. Hasib
