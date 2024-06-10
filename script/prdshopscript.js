function header_scroll() {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
    }
  });
}
header_scroll();

// 헤더 nav 호버
function navHover() {
  $(".nav-box").hover(
    function () {
      $("#header").addClass("on");
      $(".nav-box > li > a").addClass("on");
      $(".header-wrap").addClass("on");
    },
    function () {
      $("#header").removeClass("on");
      $(".nav-box > li > a").removeClass("on");
      $(".header-wrap").removeClass("on");
    }
  );
}
navHover();

var prdShopItemSlider; // 변수 이름 변경 없이 유지

function initSwiper() {
  const prdShopItemSlider = new Swiper(".prd-main-img .swiper", {
    slidesPerView: 1, // 한 페이지에 보여질 슬라이드 개수
    navigation: {
      nextEl: ".prd-main-img .prd-shop-swiper-btn-next",
      prevEl: ".prd-main-img .prd-shop-swiper-btn-prev",
    },
  });
  return prdShopItemSlider; // 생성된 Swiper 객체 반환
}

// leagueshop tap menu
function tap_menu_on() {
  $(".prd-tap-img-wrap > ul > li").click(function () {
    var tabIndex = $(this).index();
    prdShopItemSlider.slideTo(tabIndex);
  });
}

prdShopItemSlider = initSwiper(); // 변수에 함수 실행 결과 할당
tap_menu_on();

function size_pick_on() {
  $(".prd-info-size-btn > ul > li").click(function () {
    $(".prd-info-size-btn > ul > li").removeClass("active");
    $(this).addClass("active");
  });
}
size_pick_on();
