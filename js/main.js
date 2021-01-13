// SwiperJS
var mySwiper = new Swiper(".swiper-container", {
  speed: 400,
  grabCursor: true,
  // Optional parameters

  // // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  // Disable preloading of all images
  preloadImages: true,
  // Enable lazy loading
  lazy: true,
  // // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
if (document.documentElement.clientWidth > 767) {
  var teamslider = new Swiper(".new-products__slider", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    // Disable preloading of all images
    preloadImages: true,
    // Enable lazy loading
    lazy: true,
    speed: 400,
    freeMode: true,
    slidesPerView: 3,
    spaceBetween: 20,
  });
  // menu bar
  $(document).ready(function () {
    let menuHeight = $(".nav").offset().top;
    function menuTop() {
      if ($(this).scrollTop() > menuHeight) {
        $(".nav").addClass("active");
      } else {
        $(".nav").removeClass("active");
      }
    }
    menuTop();
    $(window).scroll(menuTop);
  });
}

$("#back-to-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 800);
  return false;
});

// menu mobile
$(document).ready(function () {
  $(".hamburger").on("click", function () {
    $(".header").toggleClass("active");
    // $('.menu-left').toggleClass("active");
  });
});

// gallery thumb
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  
});
var galleryTop = new Swiper('.gallery-top', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});

function removeDefault(e){
  e.preventDefault()
}

var dropdownContent = document.querySelector(".dropdown-content")

function show(){
  dropdownContent.style.display="block"
}
function out(){
  dropdownContent.style.display="none"
}
