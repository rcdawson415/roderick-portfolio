# 🎨 Portfolio Theme Guide

This guide explains how to use the comprehensive Tailwind CSS theme system added to your portfolio project.

## 🎯 Color Palette

### Primary Colors
```css
bg-primary-500    /* Main blue */
text-primary-600   /* Darker blue for text */
border-primary-200 /* Light blue border */
```

### Secondary Colors
```css
bg-secondary-500   /* Purple */
text-secondary-600 /* Darker purple */
border-secondary-200 /* Light purple border */
```

### Accent Colors
```css
bg-accent-500     /* Green */
text-accent-600   /* Darker green */
border-accent-200 /* Light green border */
```

### Neutral Colors
```css
bg-neutral-50     /* Very light gray */
text-neutral-900  /* Very dark gray */
border-neutral-200 /* Light gray border */
```

### Status Colors
```css
bg-success-500    /* Success green */
bg-warning-500    /* Warning yellow */
bg-error-500      /* Error red */
```

### Social Media Colors
```css
bg-social-instagram /* Instagram pink */
bg-social-linkedin  /* LinkedIn blue */
bg-social-youtube   /* YouTube red */
bg-social-twitch    /* Twitch purple */
```

## 🔤 Typography

### Font Families
```css
font-sans         /* Inter - Main font */
font-serif        /* Merriweather - Serif */
font-mono         /* JetBrains Mono - Code */
font-display      /* Poppins - Headings */
font-body         /* Inter - Body text */
```

### Custom Line Heights
```css
leading-extra-tight /* 1.1 */
leading-extra-loose /* 2.5 */
```

### Letter Spacing
```css
tracking-tighter  /* -0.05em */
tracking-tight    /* -0.025em */
tracking-wide     /* 0.025em */
tracking-wider    /* 0.05em */
tracking-widest   /* 0.1em */
```

## 🎭 Animations

### Fade Animations
```css
animate-fade-in      /* Fade in */
animate-fade-in-up   /* Fade in from bottom */
animate-fade-in-down /* Fade in from top */
```

### Slide Animations
```css
animate-slide-in-left  /* Slide in from left */
animate-slide-in-right /* Slide in from right */
```

### Scale Animations
```css
animate-scale-in      /* Scale in */
```

### Special Animations
```css
animate-bounce-gentle /* Gentle bounce */
animate-float         /* Floating animation */
animate-pulse-slow    /* Slow pulse */
```

### Gradient Animations
```css
animate-gradient-x    /* Horizontal gradient animation */
animate-gradient-y    /* Vertical gradient animation */
animate-gradient-xy   /* Combined gradient animation */
```

## 🌈 Gradients

### Predefined Gradients
```css
bg-gradient-primary   /* Blue to purple */
bg-gradient-secondary /* Pink to red */
bg-gradient-accent    /* Blue to cyan */
bg-gradient-warm      /* Pink to yellow */
bg-gradient-cool      /* Cyan to pink */
bg-gradient-mesh      /* Complex mesh gradient */
```

### Custom Gradient Usage
```css
bg-gradient-to-r from-primary-500 to-secondary-500
bg-gradient-to-br from-accent-400 via-primary-500 to-secondary-600
```

## 🎪 Shadows

### Soft Shadows
```css
shadow-soft    /* Subtle shadow */
shadow-medium  /* Medium shadow */
shadow-large   /* Large shadow */
```

### Glow Effects
```css
shadow-glow        /* Blue glow */
shadow-glow-purple /* Purple glow */
shadow-glow-green  /* Green glow */
```

### Inner Shadows
```css
shadow-inner-soft /* Soft inner shadow */
```

## 📐 Spacing & Layout

### Custom Spacing
```css
p-18    /* 4.5rem */
w-88    /* 22rem */
h-128   /* 32rem */
```

### Custom Screens
```css
xs:     /* 475px */
3xl:    /* 1600px */
4xl:    /* 1920px */
```

### Custom Max Widths
```css
max-w-8xl /* 88rem */
max-w-9xl /* 96rem */
```

### Custom Min Heights
```css
min-h-screen-75 /* 75vh */
min-h-screen-50 /* 50vh */
```

## 🎨 Border Radius

```css
rounded-xl    /* 1rem */
rounded-2xl   /* 1.5rem */
rounded-3xl   /* 2rem */
rounded-4xl   /* 3rem */
```

## 🔍 Backdrop Blur

```css
backdrop-blur-xs /* 2px blur */
```

## 📱 Aspect Ratios

```css
aspect-video     /* 16:9 */
aspect-square    /* 1:1 */
aspect-portrait  /* 3:4 */
aspect-landscape /* 4:3 */
```

## 🎯 Z-Index

```css
z-60  /* 60 */
z-70  /* 70 */
z-80  /* 80 */
z-90  /* 90 */
z-100 /* 100 */
```

## 🎨 Custom Utilities

### Text Gradients
```css
text-gradient bg-gradient-to-r from-primary-500 to-secondary-500
```

### Mesh Background
```css
bg-mesh
```

## 💡 Usage Examples

### Hero Section
```jsx
<section className="min-h-screen bg-gradient-primary flex items-center justify-center">
  <div className="text-center animate-fade-in-up">
    <h1 className="text-6xl font-display font-bold text-gradient bg-gradient-to-r from-primary-500 to-secondary-500">
      Welcome
    </h1>
    <p className="text-xl text-neutral-600 mt-4">
      Professional Portfolio
    </p>
  </div>
</section>
```

### Card Component
```jsx
<div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 p-6 border border-neutral-200 dark:border-neutral-700">
  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
    Card Title
  </h3>
  <p className="text-neutral-600 dark:text-neutral-300">
    Card content goes here
  </p>
</div>
```

### Button Styles
```jsx
<button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1">
  Click Me
</button>
```

### Social Media Icons
```jsx
<div className="flex space-x-4">
  <a href="#" className="w-10 h-10 bg-social-instagram rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform">
    <InstagramIcon />
  </a>
  <a href="#" className="w-10 h-10 bg-social-linkedin rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform">
    <LinkedInIcon />
  </a>
</div>
```

### Animated Background
```jsx
<div className="bg-mesh animate-gradient-xy min-h-screen">
  {/* Content */}
</div>
```

## 🎨 Theme Customization

### Adding New Colors
Add to the `colors` section in `tailwind.config.ts`:
```javascript
colors: {
  custom: {
    50: '#f0f9ff',
    500: '#3b82f6',
    900: '#1e3a8a',
  }
}
```

### Adding New Animations
Add to the `keyframes` and `animation` sections:
```javascript
keyframes: {
  customAnimation: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  }
},
animation: {
  'custom': 'customAnimation 0.5s ease-out',
}
```

## 🚀 Best Practices

1. **Use semantic color names** (primary, secondary, accent)
2. **Leverage the animation system** for smooth interactions
3. **Use the shadow system** for depth and hierarchy
4. **Combine gradients with animations** for dynamic effects
5. **Use the spacing system** for consistent layouts
6. **Leverage dark mode** with the neutral color palette

This theme system provides a comprehensive foundation for building beautiful, professional portfolio websites with consistent design patterns and smooth animations. 