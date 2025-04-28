# SecurePort - Cybersecurity Portfolio

A modern, responsive portfolio website built with Next.js, showcasing expertise in cybersecurity, Python development, and full-stack engineering. Features smooth animations, dark mode support, and a clean, professional design.

![MedPyDev Screenshot](https://i.imgur.com/TPyV4Lw.png)

## Features

- 🎨 Modern UI with dark/light mode
- 🚀 Smooth animations using Framer Motion
- 📱 Fully responsive design
- ⚡ Static site generation for optimal performance
- 🎯 Interactive skill progress bars
- 🖼️ Project showcase with hover effects
- 📝 Contact form with animations

## Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Type Safety**: TypeScript

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Home page component
│   └── globals.css      # Global styles
├── components/          
│   ├── sections/        # Main page sections
│   ├── ui/             # Reusable UI components
│   └── motion-wrapper/  # Animation components
├── lib/                 # Utility functions
└── public/             # Static assets
```

## Key Components

### Header
- Sticky navigation
- Dark mode toggle
- Mobile-responsive menu
- Smooth scroll navigation

### Sections
1. **Hero**
   - Animated headline
   - Role description
   - CTA button

2. **About**
   - Staggered paragraph animations
   - Technical term highlights
   - Animated section headers

3. **Skills**
   - Interactive skill cards
   - Animated progress bars
   - Category-based organization

4. **Projects**
   - Project showcase cards
   - Hover animations
   - Live demo links

5. **Contact**
   - Animated contact form
   - Social media links
   - Location information

## Customization

### Theme
Modify the color scheme in `globals.css`:
```css
:root {
  --primary: 220 60% 50%;
  --accent: 180 70% 45%;
  /* Add other color variables */
}
```

### Content
Update project information in the respective section components:
- `components/sections/about-section.tsx`
- `components/sections/projects-section.tsx`
- `components/sections/skills-section.tsx`

## Performance

The site is optimized for performance:
- Static site generation
- Optimized images
- Minimal JavaScript
- Efficient animations

## Deployment

Build the static site:
```bash
npm run build
```

The static files will be generated in the `out` directory, ready for deployment to any static hosting service.

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

- Icons: [Lucide React](https://lucide.dev)
- UI Components: [shadcn/ui](https://ui.shadcn.com)
- Images: [Pexels](https://www.pexels.com)