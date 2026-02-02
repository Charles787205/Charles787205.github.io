# ✨ Jovian Charles Canedo - Portfolio

> A modern, elegant portfolio showcasing my journey as a Full Stack Developer

[![Built with React](https://img.shields.io/badge/React-18-61dafb?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?style=flat&logo=vite)](https://vitejs.dev/)

## 🎯 Overview

A responsive, animated portfolio website featuring a clean teal-and-emerald color scheme. Built with modern web technologies to showcase my professional experience, technical skills, and certifications.

**Live Demo:** [charles787205.github.io](https://charles787205.github.io)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional interface with teal/emerald gradient theme
- 🎭 **Smooth Animations** - Framer Motion powered transitions and scroll effects
- 📱 **Fully Responsive** - Optimized for all devices from mobile to desktop
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎯 **Interactive Navigation** - Smooth scrolling with active section tracking
- 💼 **Experience Timeline** - Professional work history with detailed descriptions
- 🛠️ **Skills Showcase** - Organized tech stack by category with icons
- 🏆 **Certifications** - Interactive certificate gallery with modal previews
- 📧 **Contact Section** - Direct links to email, phone, and social profiles

## 🛠️ Tech Stack

### Core
- **React 18** - UI library with hooks and functional components
- **TypeScript** - Type-safe JavaScript for robust development
- **Vite** - Next-generation frontend build tool

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React

### Icons & Assets
- **Lucide React** - Beautiful, consistent icon set
- **Devicon** - Technology stack icons via CDN

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm installed

### Installation

```bash
# Clone the repository
git clone https://github.com/Charles787205/Charles787205.github.io.git

# Navigate to project directory
cd Charles787205.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start dev server at localhost:5173
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/
│   │   └── Navigation.tsx      # Fixed navigation bar
│   ├── sections/
│   │   ├── Hero.tsx            # Landing section with CTA
│   │   ├── About.tsx           # About me and contact info
│   │   ├── Experience.tsx      # Work experience timeline
│   │   ├── Skills.tsx          # Technical skills by category
│   │   ├── Certifications.tsx  # Certificate gallery
│   │   └── Contact.tsx         # Contact cards and social links
│   ├── assets/                 # Images and static files
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # App entry point
│   └── index.css               # Global styles
├── public/
│   └── certificates/           # Certificate images
└── package.json
```

## 🎨 Design System

### Color Palette
- **Primary:** Teal (teal-50 to teal-700)
- **Secondary:** Emerald (emerald-50 to emerald-600)
- **Neutral:** Gray scale for text and backgrounds
- **Accents:** Amber for certifications

### Typography
- **Headings:** Bold, large sizing for impact
- **Body:** Regular weight, gray-800/700 for readability
- **Links:** Hover transitions to teal-600

## 🌐 Deployment

This portfolio is deployed via **GitHub Pages** from the `main` branch.

### Deploy Updates

```bash
# Build the project
npm run build

# Commit and push changes
git add .
git commit -m "Update portfolio"
git push origin main
```

The site automatically deploys when changes are pushed to the main branch.

## 📫 Contact

**Jovian Charles Canedo**
- 📧 Email: [joviancharles1210@gmail.com](mailto:joviancharles1210@gmail.com)
- 📱 Phone: +63 156 787 205
- 🐙 GitHub: [@Charles787205](https://github.com/Charles787205)
- 💼 LinkedIn: [Jovian Charles Cañedo](https://www.linkedin.com/in/jovian-charles-cañedo)
- 📍 Location: Davao City, Philippines

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev/) and [Devicon](https://devicon.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Built with ❤️ using React and Vite

---

<p align="center">Made with passion by Jovian Charles Canedo</p>
<p align="center">© 2026 All Rights Reserved</p>
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
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
