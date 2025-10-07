# Portfolio - Matias Sanchez

A modern, multilingual portfolio website built with Astro, React, and TypeScript. Features a clean design with dark/light mode support and internationalization.

## ✨ Features

- 🌍 **Multilingual Support** - Available in English and Spanish
- 🎨 **Dark/Light Mode** - Theme toggle with system preference detection
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **Fast Performance** - Built with Astro for optimal speed
- 🎯 **Modern UI** - Clean design using Radix UI and Tailwind CSS
- 📄 **Multiple Sections**:
  - Profile with bio and social links
  - Professional experience timeline
  - Featured projects
  - Education history

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build) v5.14.1
- **UI Library**: [React](https://react.dev) v19.1.1
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4.1.13
- **Components**: [Radix UI](https://www.radix-ui.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **Utilities**:
  - `class-variance-authority` - For component variants
  - `clsx` & `tailwind-merge` - For conditional classes

## 📁 Project Structure

```text
portfolio/
├── public/
│   ├── cv/                      # CV/Resume files
│   ├── logo/                    # Logo assets
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── common/              # Shared components
│   │   │   ├── education/       # Education section
│   │   │   ├── profile/         # Profile section
│   │   │   ├── projects/        # Projects section
│   │   │   └── timeline/        # Experience timeline
│   │   ├── features/
│   │   │   ├── i18n/            # Language dropdown
│   │   │   └── theme/           # Theme toggle
│   │   ├── layout/
│   │   │   ├── Navigation/      # Navigation components
│   │   │   ├── Header.astro
│   │   │   └── Footer.astro
│   │   └── ui/                  # Reusable UI components
│   ├── hooks/                   # React hooks
│   │   ├── useTheme.ts
│   │   └── useTranslations.ts
│   ├── i18n/                    # Internationalization
│   │   ├── ui.ts                # Translation strings
│   │   └── utils.ts
│   ├── layouts/
│   │   └── Layout.astro         # Base layout
│   ├── lib/                     # Utility functions
│   ├── pages/
│   │   ├── en/                  # English pages
│   │   ├── es/                  # Spanish pages
│   │   └── index.astro          # Default redirect
│   ├── styles/
│   │   └── global.css           # Global styles
│   └── types/
│       └── index.ts             # TypeScript types
├── astro.config.mjs             # Astro configuration
├── tsconfig.json                # TypeScript configuration
└── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

## 📝 Available Scripts

| Command | Action |
|:--------|:-------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## 🌐 Internationalization

The project supports multiple languages using a custom i18n solution:

- Default language: Spanish (`/es`)
- Available languages: English (`/en`), Spanish (`/es`)
- Translation files: `src/i18n/ui.ts`

To add a new language:
1. Add translations to `src/i18n/ui.ts`
2. Create a new page directory in `src/pages/<lang>/`
3. Update the language dropdown in `src/components/features/i18n/`

## 🎨 Customization

### Updating Content

- **Profile**: Edit `src/components/common/profile/Profile.tsx` and translations in `src/i18n/ui.ts`
- **Experience**: Update `src/components/common/timeline/Timeline.tsx` and translation keys
- **Projects**: Modify `src/components/common/projects/Projects.tsx`
- **Education**: Edit `src/components/common/education/Education.tsx`

### Styling

The project uses Tailwind CSS with a custom configuration. Global styles are in `src/styles/global.css`.

Theme colors are defined using CSS variables for both light and dark modes.

## 🚀 Deployment

The site can be deployed to any static hosting platform:

### Vercel
```bash
npm run build
# Deploy ./dist folder
```

### Netlify
```bash
npm run build
# Deploy ./dist folder
```

### GitHub Pages
1. Update `astro.config.mjs` with your site URL
2. Run `npm run build`
3. Deploy the `./dist` folder

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contact

**Matias Sanchez**
- Email: lomatiasleandro@gmail.com
- LinkedIn: [matiassanchez-l](https://www.linkedin.com/in/matiassanchez-l/)
- GitHub: [MatiasSanchez-l](https://github.com/MatiasSanchez-l)

---

Built with ❤️ using [Astro](https://astro.build)
