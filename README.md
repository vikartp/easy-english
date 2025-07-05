# Easy English - हिंदी से अंग्रेजी सीखें

A modern, mobile-first English learning platform designed specifically for Hindi speakers. Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🔊 **Pronunciation Guide**: Interactive reading with audio pronunciation
- 📝 **Essays & Stories**: Clickable content with Hindi translations
- 🌙 **Dark/Light Theme**: Toggle between themes for comfortable reading
- 📱 **Mobile Optimized**: Designed with mobile users in mind
- 🎯 **Interactive Learning**: Click on words to see Hindi meanings
- 🔄 **Sticky Navigation**: Always accessible navbar and footer

## Tech Stack

- **Frontend**: React 19+ with TypeScript
- **Styling**: Tailwind CSS for mobile-first responsive design
- **Build Tool**: Vite for fast development and builds
- **Routing**: React Router DOM for navigation
- **State Management**: React hooks and context
- **Icons**: Emoji-based icons for universal compatibility

## Getting Started

1. **Clone the repository**
```bash
git clone <repository-url>
cd easy-english
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

## Project Structure

```
src/
├── components/        # Reusable UI components
├── constants/         # Static data (essays, stories, translations)
├── hooks/            # Custom React hooks (theme, etc.)
├── layout/           # Layout components (Navbar, Footer, Main)
├── pages/            # Page components
├── utils/            # Utility functions (speech, etc.)
└── App.tsx           # Main application component
```

## Mobile-First Design

This application is optimized for mobile devices with:
- Reduced padding and spacing for smaller screens
- Touch-friendly interactive elements
- Responsive navigation with hamburger menu
- Optimized font sizes and layouts
- Sticky navigation for better UX

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Technologies Used

- React 19 with TypeScript for type safety
- Tailwind CSS for utility-first styling
- React Router DOM for client-side routing
- React Toastify for notifications
- Web Speech API for text-to-speech functionality
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
