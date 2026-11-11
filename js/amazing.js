const dailySwiper = new Swiper(".dailySwiper", {
  slidesPerView: "auto",
  spaceBetween: 12,
  navigation: {
    nextEl: ".daily-next",
    prevEl: ".daily-prev",
  },
});

const categorySwiper = new Swiper(".categorySwiper", {
  slidesPerView: "auto",
  spaceBetween: 8,
  navigation: {
    nextEl: ".category-next",
    prevEl: ".category-prev",
  },
});

let offerSliders = ["runoutSwiper", "customSwiper"];

offerSliders.forEach(function (name) {
  new Swiper("." + name, {
    slidesPerView: "auto",
    spaceBetween: 0,
    navigation: {
      nextEl: "." + name + "-next",
      prevEl: "." + name + "-prev",
    },
    breakpoints: {
      768: {
        slidesPerGroup: 3,
      },
    },
  });
});

// sort bar active item
let sortLinks = document.querySelectorAll(".sort-list a");

sortLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    sortLinks.forEach(function (item) {
      item.classList.remove("active");
    });
    link.classList.add("active");
  });
});

// header shadow
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
  } else {
    header.style.boxShadow = "none";
  }
});
