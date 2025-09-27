# Components Architecture

This directory contains all React and Astro components organized by their purpose and functionality.

## Directory Structure

```
src/components/
├── ui/                    # shadcn/ui components (keep as is)
├── layout/               # Layout-related components
│   ├── Header.astro
│   ├── Footer.astro
│   └── Navigation/       # Navigation components
│       ├── NavMenu.tsx
│       ├── NavLinks.tsx
│       ├── Logo.tsx
│       ├── MobileMenu.tsx
│       ├── MobileMenuButton.tsx
│       └── DesktopControls.tsx
├── features/             # Feature-specific components
│   ├── theme/            # Theme-related components
│   │   └── ModeToggle.tsx
│   └── i18n/             # Internationalization components
│       └── LanguageDropdown.tsx
└── common/               # Shared components (future use)
```

## Component Organization Principles

### Layout Components (`layout/`)
- **Purpose**: Components that define the overall page structure
- **Examples**: Header, Footer, Navigation
- **Characteristics**: Usually Astro components, define page layout

### Feature Components (`features/`)
- **Purpose**: Components that implement specific features
- **Organization**: Grouped by feature domain (theme, i18n, etc.)
- **Examples**: Theme toggle, language selector
- **Characteristics**: Usually React components, reusable across pages

### UI Components (`ui/`)
- **Purpose**: shadcn/ui components and design system components
- **Examples**: Button, Switch, Dropdown
- **Characteristics**: Low-level, highly reusable components

### Common Components (`common/`)
- **Purpose**: Shared components that don't fit other categories
- **Examples**: Loading spinners, error boundaries
- **Characteristics**: Utility components used across features

## Import Guidelines

- Use absolute imports with `@/` prefix
- Import from the appropriate directory based on component type
- Keep imports organized: external libraries first, then internal components

## Naming Conventions

- **Files**: PascalCase for components (e.g., `ModeToggle.tsx`)
- **Directories**: kebab-case for feature directories (e.g., `theme/`, `i18n/`)
- **Components**: PascalCase for component names
- **Props**: camelCase for prop interfaces
