# Kraze N' Vogue - Fashion Website

A modern, responsive fashion e-commerce website built with HTML5, CSS3, and vanilla JavaScript. This project showcases a beautiful and interactive fashion platform with advanced UI/UX features.

## 🌟 Features

### Core Functionality
- **Pre-loader Animation**: Elegant loading screen with percentage counter and gradient animation
- **Responsive Navigation**: Mobile-friendly navigation with dropdown menus and hamburger menu
- **Hero Section**: Dynamic hero with animated title and call-to-action
- **Multiple Slideshows**: 
  - Main hero slideshow with automatic progression
  - Featured fashion grid slideshow
  - Mobile carousel for responsive design
- **Interactive Search**: Real-time search functionality with sample product data
- **Smooth Scrolling**: Seamless navigation between sections
- **Touch/Swipe Support**: Mobile gesture navigation for slideshows

### Visual Design
- **Gradient Animations**: Dynamic background gradients with smooth transitions
- **Hover Effects**: Interactive elements with smooth hover animations
- **Typography**: Custom fonts (Great Vibes, Courier Prime) for elegant typography
- **Color Scheme**: Pink and pastel color palette with professional styling
- **Box Shadows**: Modern depth and elevation effects

### Responsive Design
- **Mobile-First Approach**: Optimized for all device sizes
- **Flexible Grid System**: CSS Grid and Flexbox for adaptive layouts
- **Breakpoint Optimization**: Custom media queries for different screen sizes
- **Touch-Friendly Interface**: Optimized for mobile interactions

## 📁 Project Structure

```
krazenvogue/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styling and animations
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── assets/            # Image assets (referenced in HTML)
    ├── fashion7.jpg
    ├── fashion8.jpg
    ├── fashion9.jpg
    ├── grid1.jpeg
    ├── grid2.jpeg
    ├── grid3.jpeg
    ├── grid4.jpeg
    ├── grid5.jpeg
    ├── grid6.jpeg
    ├── grid7.jpeg
    ├── grid8.jpeg
    ├── grid9.jpeg
    ├── men1.jpg
    ├── men2.jpg
    ├── women1.png
    ├── women2.png
    ├── kids1.png
    ├── kids2.png
    ├── cosmetic1.png
    ├── cosmetic2.png
    ├── photo1.jpeg
    └── photo2.jpeg
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Ensure all image assets are in the correct directory
3. Open `index.html` in your web browser

### Development Setup
For local development with a web server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## 🎨 Design System

### Color Palette
- **Primary Pink**: `#d6719c`
- **Light Pink**: `#ffc0cb`
- **Dark Pink**: `#ff69b4`
- **Purple**: `#8b5c7e`
- **Brown**: `#5a3e36`
- **Gray**: `#6d6d6d`
- **Background**: Gradient combinations of pastels

### Typography
- **Primary Font**: 'Segoe UI', sans-serif
- **Decorative Font**: 'Great Vibes', cursive
- **Monospace Font**: 'Courier Prime', monospace

### Animations
- **Loader**: Percentage counter with fade-in text
- **Slideshows**: Smooth fade transitions
- **Hover Effects**: Scale and transform animations
- **Background**: Gradient movement animations
- **Marquee**: Continuous scrolling animation

## 🔧 Technical Implementation

### HTML Structure
- **Semantic HTML5**: Proper use of semantic elements
- **Accessibility**: ARIA labels and proper heading hierarchy
- **SEO Optimized**: Meta tags and structured content
- **External Resources**: Google Fonts integration

### CSS Features
- **CSS Grid**: For complex layout arrangements
- **Flexbox**: For responsive navigation and components
- **CSS Animations**: Keyframe animations for various effects
- **Media Queries**: Responsive breakpoints at 768px and 480px
- **CSS Variables**: Consistent color and spacing system
- **Transform Effects**: 3D transforms and scaling

### JavaScript Functionality
- **DOM Manipulation**: Dynamic content updates
- **Event Handling**: Click, hover, touch, and keyboard events
- **Timer Functions**: Automatic slideshow progression
- **Search Algorithm**: Real-time filtering and display
- **Mobile Detection**: Responsive behavior adaptation
- **Smooth Scrolling**: Programmatic scroll behavior

## 📱 Responsive Breakpoints

### Desktop (768px+)
- Full navigation menu
- Desktop fashion grid layout
- Large slideshow containers
- Hover effects enabled

### Tablet (768px and below)
- Mobile menu toggle
- Simplified navigation
- Mobile carousel display
- Adjusted typography sizes

### Mobile (480px and below)
- Compact navigation
- Smaller image sizes
- Optimized touch targets
- Reduced padding and margins

## 🎯 Key Components

### Loader System
```javascript
// Percentage counter with smooth fade-out
let count = 0;
const interval = setInterval(() => {
  count++;
  loaderCount.textContent = count + '%';
  if (count >= 100) {
    // Hide loader and show content
  }
}, intervalTime);
```

### Slideshow Management
```javascript
// Automatic progression with pause on hover
function autoSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) slideIndex = 0;
  showSlide(slideIndex);
}
```

### Search Functionality
```javascript
// Real-time search with sample data
const searchData = [
  { category: 'Men', title: 'Men\'s T-Shirts' },
  { category: 'Women', title: 'Women\'s Dresses' },
  // ... more items
];
```

### Mobile Menu
```javascript
// Toggle mobile navigation
mobileMenuToggle.addEventListener('click', function() {
  this.classList.toggle('active');
  navLinks.classList.toggle('active');
});
```

## 🛠️ Browser Compatibility

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile Safari**: 12+
- **Chrome Mobile**: 60+

## 🎨 Customization

### Adding New Products
1. Add product images to the assets folder
2. Update the search data array in `script.js`
3. Modify the fashion grid HTML structure in `index.html`

### Changing Colors
1. Update CSS custom properties in `styles.css`
2. Modify gradient definitions
3. Update hover state colors

### Adding New Sections
1. Create HTML structure in `index.html`
2. Add corresponding CSS styles in `styles.css`
3. Implement any JavaScript functionality in `script.js`

## 🔍 Performance Optimizations

- **Image Optimization**: Compressed images for faster loading
- **CSS Minification**: Consider minifying for production
- **JavaScript Optimization**: Efficient event handling and DOM queries
- **Font Loading**: Google Fonts with display=swap
- **Animation Performance**: Hardware-accelerated transforms

## 🚀 Deployment

### Static Hosting
- **GitHub Pages**: Push to GitHub and enable Pages
- **Netlify**: Drag and drop the project folder
- **Vercel**: Connect GitHub repository
- **Firebase Hosting**: Use Firebase CLI

### File Structure for Deployment
```
public/
├── index2.html
├── style1.css
├── script1.js
└── assets/
    └── [all images]
```

## 📝 License

This project is created for educational and portfolio purposes. All images and content are for demonstration only.

## 👥 Team

- **Niyati Sangharajka** - Co-Founder | UI Designer
- **Kashmira Sawant** - Founder | Marketing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact:
- **Niyati**: niyati.sangharajka08@gmail.com
- **Kashmira**: kashmira.sawant@gmail.com

---

**Built with ❤️ for the fashion community**
