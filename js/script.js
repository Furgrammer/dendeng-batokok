// FAQ Section Toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    question.parentElement.classList.toggle("active");
  });
});

// Hamburger Menu
const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Tutup menu mobile
      if (navLinks) navLinks.classList.remove("active");
      if (menuToggle) menuToggle.classList.remove("open");

      smoothScrollTo(targetElement, 1200); // durasi bisa diubah
    }
  });
});

// Reveal Animation on Scroll
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    if (elementTop < windowHeight - 150) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", reveal);
reveal();

// --- SMOOTH SCROLL PREMIUM (EASING) ---
function smoothScrollTo(target, duration = 800) {
  const start = window.pageYOffset;
  const end = target.getBoundingClientRect().top + window.pageYOffset - 80; // offset navbar
  const distance = end - start;

  let startTime = null;

  // Easing Function (easeInOutCubic)
  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, start + distance * easedProgress);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

// --- NAVBAR ACTIVE ON SCROLL ---
const sections = document.querySelectorAll("section, .container[id]");
const navLinksAll = document.querySelectorAll(".nav-links a");

function setActiveLink() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120; // offset navbar
    const sectionHeight = section.offsetHeight;

    if (window.pageYOffset >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinksAll.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", setActiveLink);
