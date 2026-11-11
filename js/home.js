// main slider
const mainSwiper = new Swiper(".mainSwiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".main-next",
    prevEl: ".main-prev",
  },
});

// all of the other sliders are the same, so i made a function
function makeSlider(name) {
  new Swiper("." + name + "Swiper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    freeMode: true,
    navigation: {
      nextEl: "." + name + "-next",
      prevEl: "." + name + "-prev",
    },
    breakpoints: {
      768: {
        freeMode: false,
        slidesPerGroup: 3,
      },
    },
  });
}

makeSlider("amazing");
makeSlider("fresh");
makeSlider("brand");
makeSlider("best");

// product sliders (they have 8px space)
let productSliders = ["delivery", "cover", "mobile", "laptop"];

productSliders.forEach(function (name) {
  new Swiper("." + name + "Swiper", {
    slidesPerView: "auto",
    spaceBetween: 8,
    navigation: {
      nextEl: "." + name + "Swiper-next",
      prevEl: "." + name + "Swiper-prev",
    },
    breakpoints: {
      768: {
        slidesPerGroup: 3,
      },
    },
  });
});

// header shadow when scroll
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
  } else {
    header.style.boxShadow = "none";
  }
});
