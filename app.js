// mobile view hamburger menu
const menu = document.querySelector('#mobile-menu')
const menuLink = document.querySelector('.navbar_menu')

if (menu) {
    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLink.classList.toggle('active');
    });
}

// highlight active page
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".navbar_link");
    const currentPage = window.location.pathname.split("/").pop(); // Получаем имя текущей страницы
  
    links.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
});

// scroll to target
document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scroll-btn");
  const infoSection = document.getElementById("rpg-info");
  
  if (scrollBtn && infoSection) {
      scrollBtn.addEventListener("click", () => {
          infoSection.scrollIntoView({ behavior: "smooth" });
      });
  }
});

document.querySelector('.lang_btn').addEventListener('click', function(event) {
  event.preventDefault();
});


// slider
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".reviews_slider");
  const testimonials = document.querySelectorAll(".reviews_card");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const indicatorsContainer = document.querySelector(".slider_indicators");
  let currentIndex = 0;
  let autoSlideInterval;

  // indicators
  testimonials.forEach((_, index) => {
      const indicator = document.createElement("span");
      indicator.classList.add("slider_indicator");
      if (index === 0) indicator.classList.add("active");
      indicatorsContainer.appendChild(indicator);
  });

  const indicators = document.querySelectorAll(".slider_indicator");

  function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      testimonials.forEach((card, index) => {
          card.style.opacity = index === currentIndex ? "1" : "0";
      });
      indicators.forEach((indicator, index) => {
          indicator.classList.toggle("active", index === currentIndex);
      });
  }

  function restartAutoSlide() {
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(() => {
          currentIndex = (currentIndex + 1) % testimonials.length;
          updateSlider();
      }, 5000);
  }

  function manualSlideChange(direction) {
      clearInterval(autoSlideInterval);
      setTimeout(restartAutoSlide, 2000);
      
      currentIndex = (currentIndex + direction + testimonials.length) % testimonials.length;
      updateSlider();
  }

  nextBtn.addEventListener("click", () => manualSlideChange(1));
  prevBtn.addEventListener("click", () => manualSlideChange(-1));

  // auto slide 5s
  restartAutoSlide();
  updateSlider();
});





// language switch WIP
const translations = {
  ua: {
    title: "Привіт, світ!",
    desc: "Це мій сайт українською."
  },
  en: {
    title: "Hello, world!",
    desc: "This is my site in English."
  }
};

document.querySelectorAll('.dropdown_item').forEach(item => {
  item.addEventListener('click', function(event) {
      event.preventDefault();
      const selectedLang = this.getAttribute('data-lang');
      console.log("lang:", selectedLang);

      document.querySelectorAll("[data-lang]").forEach(el => {
        let key = el.getAttribute("data-lang");
        if (translations[selectedLang] && translations[selectedLang][key]) {
          el.textContent = translations[selectedLang][key];
        }
      });
  });
});


