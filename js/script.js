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

// --- FUNGSI AUTO-SCROLL ULTRA SMOOTH ---
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    // Lewati jika hanya "#"
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Mencegah browser melompat seketika
      e.preventDefault();
      e.stopPropagation(); // Mencegah interaksi lain mengganggu

      // Tutup menu mobile
      if (navLinks) navLinks.classList.remove("active");
      if (menuToggle) menuToggle.classList.remove("open");

      // Hitung posisi target dengan kompensasi navbar (misal 80px)
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      // Perintah Scroll Meluncur
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
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
