// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('close-menu');

  // Open menu
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden'; // prevent scroll behind menu
  });

  // Close menu
  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });

  // Close when clicking any link
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close when clicking outside (optional enhancement)
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
});

// Hero Carousel – auto-play only
let idx = 0;
const slides = document.querySelectorAll('.hero-slide');

function show(n) {
  slides.forEach((s, i) => s.classList.toggle('active', i === n));
  idx = n;
}

function next() {
  show((idx + 1) % slides.length);
}

let timer = setInterval(next, 6000);

document.querySelector('.hero').onmouseenter = () => clearInterval(timer);
document.querySelector('.hero').onmouseleave = () => timer = setInterval(next, 6000);

// Start with first slide
show(0);

// Counters animation (unchanged)
function countUp(el, target, dur = 2200) {
  let start = 0;
  const step = target / (dur / 16);
  function tick() {
    start += step;
    if (start >= target) el.textContent = target.toLocaleString();
    else {
      el.textContent = Math.floor(start).toLocaleString();
      requestAnimationFrame(tick);
    }
  }
  tick();
}

window.onload = () => {
  countUp(document.getElementById('c1'), 5000);
  countUp(document.getElementById('c2'), 200);
  countUp(document.getElementById('c3'), 50);
};

// Reviews Carousel
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.review-slide');
  const dotsContainer = document.querySelector('.carousel-dots');
  let current = 0;

  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('button');

  function update() {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === current);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }

  function goToSlide(index) {
    current = index;
    update();
  }

  // Auto-play
  let timer = setInterval(() => {
    current = (current + 1) % slides.length;
    update();
  }, 6000);

  // Pause on hover
  document.querySelector('.reviews-carousel').addEventListener('mouseenter', () => clearInterval(timer));
  document.querySelector('.reviews-carousel').addEventListener('mouseleave', () => {
    timer = setInterval(() => {
      current = (current + 1) % slides.length;
      update();
    }, 6000);
  });

  // Initial state
  update();
});

// Back to Top Button visibility
window.addEventListener('scroll', () => {
  const backToTop = document.getElementById('back-to-top');
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});



