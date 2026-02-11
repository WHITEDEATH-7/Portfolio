# Portfolio - Vanilla Conversion

This is a vanilla HTML, CSS, and JavaScript conversion of the original Astro-based AstroZen portfolio. The conversion maintains the same look, feel, and interactions while removing all framework dependencies.

## Features

- Pure HTML, CSS, and JavaScript (no frameworks)
- Responsive design
- Smooth animations and transitions
- Scroll-based navigation highlighting
- Mobile-friendly navigation
- Optimized performance

## Project Structure

```
portfolio-vanilla/
├── index.html
├── styles/
│   ├── main.css
│   ├── animations.css
│   └── variables.css
├── scripts/
│   ├── main.js
│   └── animations.js
└── assets/
    └── images/
```

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript
- Google Fonts

## Installation

1. Clone the repository
2. Open `index.html` in your browser to view the portfolio

Or run a local server:

```bash
# Install serve globally if you don't have it
npm install -g serve

# Serve the project
serve portfolio-vanilla/
```

## Key Conversions Made

1. **Removed Astro framework**: Converted Astro components to semantic HTML sections
2. **Replaced Tailwind CSS**: Created semantic CSS with CSS variables for maintainability
3. **Converted TypeScript to JavaScript**: Simplified the code to vanilla JavaScript
4. **Maintained animations**: Preserved scroll-triggered animations and hover effects
5. **Preserved responsive design**: Kept mobile-first approach with media queries

## Files Overview

- `index.html`: Main HTML file with all sections
- `styles/variables.css`: CSS custom properties for consistent theming
- `styles/main.css`: Core styling for all components
- `styles/animations.css`: Animation definitions
- `scripts/main.js`: Core functionality and event handling
- `scripts/animations.js`: Scroll-based animations and effects

## Browser Compatibility

- Modern browsers supporting CSS Grid/Flexbox
- Supports CSS Variables
- Works with Intersection Observer API for animations