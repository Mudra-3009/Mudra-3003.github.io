// Loader functionality
const loaderOverlay = document.getElementById('loader-overlay');
const loaderCount = document.getElementById('loader-count');

let count = 0;
const maxCount = 100;
const duration = 2500;
const intervalTime = duration / maxCount;

const interval = setInterval(() => {
  count++;
  loaderCount.textContent = count + '%';

  if (count >= maxCount) {
    clearInterval(interval);
    loaderOverlay.style.opacity = '0';
    setTimeout(() => {
      loaderOverlay.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 1000);
  }
}, intervalTime);

document.body.style.overflow = 'hidden';

// Main slideshow functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dots .dot');

function showSlide(n) {
  slideIndex = n;
  
  // Hide all slides
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  
  // Remove active class from all dots
  dots.forEach(dot => {
    dot.classList.remove('active');
  });
  
  // Show current slide and activate corresponding dot
  if (slides[slideIndex]) {
    slides[slideIndex].style.display = 'block';
    slides[slideIndex].classList.add('fade');
  }
  
  if (dots[slideIndex]) {
    dots[slideIndex].classList.add('active');
  }
}

// Auto advance slides
function autoSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

// Start auto slideshow
let slideInterval = setInterval(autoSlide, 3000);

// Pause slideshow on hover
const slideshowContainer = document.querySelector('.slideshow-container');
if (slideshowContainer) {
  slideshowContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });
  
  slideshowContainer.addEventListener('mouseleave', () => {
    slideInterval = setInterval(autoSlide, 3000);
  });
}

// Initialize slideshow
showSlide(0);

// Mobile Menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const dropdowns = document.querySelectorAll('.dropdown');
  const subDropdowns = document.querySelectorAll('.sub-dropdown');

  // Mobile menu toggle
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.navbar')) {
      mobileMenuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });

  // Mobile dropdown functionality
  dropdowns.forEach(dropdown => {
    const dropdownLink = dropdown.querySelector('a');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    
    dropdownLink.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle('active');
      }
    });
  });

  subDropdowns.forEach(subDropdown => {
    const subDropdownLink = subDropdown.querySelector('a');
    const subDropdownContent = subDropdown.querySelector('.sub-dropdown-content');
    
    subDropdownLink.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        subDropdown.classList.toggle('active');
      }
    });
  });

  // Close mobile menu when clicking on a link
  const navLinksItems = document.querySelectorAll('.nav-links a');
  navLinksItems.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  });
});

// Fashion Grid functionality
document.addEventListener('DOMContentLoaded', function() {
  // Featured slideshow functionality
  const slideshowItems = document.querySelectorAll('.slideshow-item');
  const slideshowDots = document.querySelectorAll('.slideshow-dot');
  const prevBtn = document.querySelector('.slideshow-btn.prev');
  const nextBtn = document.querySelector('.slideshow-btn.next');
  
  let currentSlide = 0;
  let slideshowInterval;
  
  // Initialize slideshow
  function initSlideshow() {
    showSlide(currentSlide);
    startSlideshow();
  }
  
  // Show specific slide
  function showSlide(index) {
    // Hide all slides
    slideshowItems.forEach(item => item.classList.remove('active'));
    slideshowDots.forEach(dot => dot.classList.remove('active'));
    
    // Show current slide
    slideshowItems[index].classList.add('active');
    slideshowDots[index].classList.add('active');
    
    currentSlide = index;
  }
  
  // Next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slideshowItems.length;
    showSlide(currentSlide);
  }
  
  // Previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slideshowItems.length) % slideshowItems.length;
    showSlide(currentSlide);
  }
  
  // Start automatic slideshow
  function startSlideshow() {
    slideshowInterval = setInterval(nextSlide, 4000);
  }
  
  // Stop automatic slideshow
  function stopSlideshow() {
    clearInterval(slideshowInterval);
  }
  
  // Event listeners for slideshow controls
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      stopSlideshow();
      prevSlide();
      startSlideshow();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      stopSlideshow();
      nextSlide();
      startSlideshow();
    });
  }
  
  // Event listeners for dots
  slideshowDots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      stopSlideshow();
      showSlide(index);
      startSlideshow();
    });
  });
  
  // Pause slideshow on hover
  const featuredSlideshow = document.querySelector('.featured-slideshow');
  if (featuredSlideshow) {
    featuredSlideshow.addEventListener('mouseenter', stopSlideshow);
    featuredSlideshow.addEventListener('mouseleave', startSlideshow);
  }
  
  // Mobile carousel functionality
  const carouselItems = document.querySelectorAll('.carousel-item');
  const carouselDots = document.querySelectorAll('.carousel .dot');
  const carouselPrevBtn = document.querySelector('.carousel-btn.prev');
  const carouselNextBtn = document.querySelector('.carousel-btn.next');
  
  let currentCarouselSlide = 0;
  let carouselInterval;
  
  // Initialize carousel
  function initCarousel() {
    showCarouselSlide(currentCarouselSlide);
    startCarousel();
  }
  
  // Show specific carousel slide
  function showCarouselSlide(index) {
    // Hide all carousel items
    carouselItems.forEach(item => item.classList.remove('active'));
    carouselDots.forEach(dot => dot.classList.remove('active'));
    
    // Show current carousel item
    carouselItems[index].classList.add('active');
    carouselDots[index].classList.add('active');
    
    currentCarouselSlide = index;
  }
  
  // Next carousel slide
  function nextCarouselSlide() {
    currentCarouselSlide = (currentCarouselSlide + 1) % carouselItems.length;
    showCarouselSlide(currentCarouselSlide);
  }
  
  // Previous carousel slide
  function prevCarouselSlide() {
    currentCarouselSlide = (currentCarouselSlide - 1 + carouselItems.length) % carouselItems.length;
    showCarouselSlide(currentCarouselSlide);
  }
  
  // Start automatic carousel
  function startCarousel() {
    carouselInterval = setInterval(nextCarouselSlide, 3000);
  }
  
  // Stop automatic carousel
  function stopCarousel() {
    clearInterval(carouselInterval);
  }
  
  // Event listeners for carousel controls
  if (carouselPrevBtn) {
    carouselPrevBtn.addEventListener('click', function() {
      stopCarousel();
      prevCarouselSlide();
      startCarousel();
    });
  }
  
  if (carouselNextBtn) {
    carouselNextBtn.addEventListener('click', function() {
      stopCarousel();
      nextCarouselSlide();
      startCarousel();
    });
  }
  
  // Event listeners for carousel dots
  carouselDots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      stopCarousel();
      showCarouselSlide(index);
      startCarousel();
    });
  });
  
  // Pause carousel on hover
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', stopCarousel);
    carousel.addEventListener('mouseleave', startCarousel);
  }
  
  // Shop button functionality
  const shopButtons = document.querySelectorAll('.shop-btn');
  shopButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      // Add your shop functionality here
      console.log('Shop button clicked!');
      alert('Redirecting to shop page...');
    });
  });
  
  // Image hover effects
  const imageContainers = document.querySelectorAll('.image-container');
  imageContainers.forEach(container => {
    container.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.02)';
    });
    
    container.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Initialize both slideshow and carousel
  initSlideshow();
  initCarousel();
  
  // Add keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      if (window.innerWidth > 768) {
        stopSlideshow();
        prevSlide();
        startSlideshow();
      } else {
        stopCarousel();
        prevCarouselSlide();
        startCarousel();
      }
    } else if (e.key === 'ArrowRight') {
      if (window.innerWidth > 768) {
        stopSlideshow();
        nextSlide();
        startSlideshow();
      } else {
        stopCarousel();
        nextCarouselSlide();
        startCarousel();
      }
    }
  });
  
  // Add touch/swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next slide
        if (window.innerWidth > 768) {
          stopSlideshow();
          nextSlide();
          startSlideshow();
        } else {
          stopCarousel();
          nextCarouselSlide();
          startCarousel();
        }
      } else {
        // Swipe right - previous slide
        if (window.innerWidth > 768) {
          stopSlideshow();
          prevSlide();
          startSlideshow();
        } else {
          stopCarousel();
          prevCarouselSlide();
          startCarousel();
        }
      }
    }
  }
  
  // Touch event listeners
  const slideshowContainer = document.querySelector('.featured-slideshow') || document.querySelector('.carousel');
  if (slideshowContainer) {
    slideshowContainer.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    });
    
    slideshowContainer.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });
  }
});

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const searchResults = document.getElementById('searchResults');

  // Sample search data
  const searchData = [
    { category: 'Men', title: 'Men\'s T-Shirts', url: '#men-tshirts' },
    { category: 'Men', title: 'Men\'s Jeans', url: '#men-jeans' },
    { category: 'Men', title: 'Men\'s Shoes', url: '#men-shoes' },
    { category: 'Women', title: 'Women\'s Dresses', url: '#women-dresses' },
    { category: 'Women', title: 'Women\'s Handbags', url: '#women-handbags' },
    { category: 'Women', title: 'Women\'s Heels', url: '#women-heels' },
    { category: 'Kids', title: 'Kids Toys', url: '#kids-toys' },
    { category: 'Kids', title: 'Kids Clothing', url: '#kids-clothing' },
    { category: 'Beauty', title: 'Skincare Products', url: '#beauty-skincare' },
    { category: 'Beauty', title: 'Makeup Collection', url: '#beauty-makeup' }
  ];

  function performSearch(query) {
    if (query.length < 2) {
      searchResults.classList.remove('active');
      return;
    }

    const filteredResults = searchData.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );

    displaySearchResults(filteredResults);
  }

  function displaySearchResults(results) {
    searchResults.innerHTML = '';
    
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
    } else {
      results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.innerHTML = `
          <div class="search-result-category">${result.category}</div>
          <div class="search-result-title">${result.title}</div>
        `;
        resultItem.addEventListener('click', () => {
          window.location.href = result.url;
          searchResults.classList.remove('active');
          searchInput.value = '';
        });
        searchResults.appendChild(resultItem);
      });
    }
    
    searchResults.classList.add('active');
  }

  // Search input event listener
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      performSearch(this.value);
    });

    searchInput.addEventListener('focus', function() {
      if (this.value.length >= 2) {
        performSearch(this.value);
      }
    });
  }

  // Search button event listener
  if (searchBtn) {
    searchBtn.addEventListener('click', function() {
      performSearch(searchInput.value);
    });
  }

  // Close search results when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-container')) {
      searchResults.classList.remove('active');
    }
  });

  // Close search results on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      searchResults.classList.remove('active');
    }
  });
});
