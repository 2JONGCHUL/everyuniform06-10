console.clear();

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

// 헤더 사이드메뉴바 호버
function SideMenuClickOn() {
  $(".header-sidemenu-bar > .side-bar").click(function () {
    $(".header-sidemenu-bar > .side-bar").addClass("on");
    $(".header-sidemenu-bar > .side-close").addClass("on");
    $(".header-sidemenu").addClass("on");
    $("html").addClass("header-side-box-actived");
  });
}
SideMenuClickOn();

function SideMenuClickRemove() {
  $(".header-sidemenu-bar > .side-close").click(function () {
    $(".header-sidemenu-bar > .side-bar").removeClass("on");
    $(".header-sidemenu-bar > .side-close").removeClass("on");
    $(".header-sidemenu").removeClass("on");
    $("html").removeClass("header-side-box-actived");
  });
}
SideMenuClickRemove();

function sideMenu__init() {
  $(".header-sidemenu-content > ul ul").stop().slideUp();

  $(".header-sidemenu-content > ul > li").click(function () {
    let $this = $(this);
    let has = $this.hasClass("active");

    if (has) {
      $this.find(" > ul").stop().slideUp(300);
      $this.find("active").removeClass("active");
      $this.removeClass("active");
    } else {
      $this.find(" > ul").stop().slideDown(300);
      $this.addClass("active");
    }

    $(".header-sidemenu-content ul").click(function (e) {
      // e.stopPropagation();
      return false;
    });
  });
}
sideMenu__init();

// 메인배너 슬라이더
function MainBannerSlider() {
  const MainBannerSlider = new Swiper("#mainbanner .banner-swiper", {
    loop: true, // 슬라이드 바녹 여부
    slidesPerView: 1, // 한 페이지에 보여질 슬라이드 개수
    spaceBetween: 0,
    speed: 1500, //슬라이드 전환속도
    effect: "fade-left",
    fadeEffect: {
      crossFade: true,
    },
    direction: "horizontal",
    autoplay: {
      //슬라이드 자동재생
      delay: 4000,
    },
  });
}
MainBannerSlider();

// league shop swiper slider
function LeagueShopSlider() {
  const LeagueShopSlider = new Swiper(".leagueshop-main-items .shop-swiper", {
    loop: true, // 슬라이드 반복여부
    slidesPerView: 1, // 한 페이지에 보여질 슬라이드 개수
    slidesPerGroup: 1, // 한번 넘길 때 몇 개의 슬라이드를 넘길건지
    spaceBetween: 1, // 슬라이드 간의 간격(여백)
    speed: 1500, // 슬라이드 전환 속도
    autoplay: {
      // 슬라이드 자동재생
      delay: 3000, // 3초에 한번씩 슬라이드 전환
    },
    navigation: {
      nextEl: ".leagueshop-main-items .shop-swiper-btn-next",
      prevEl: ".leagueshop-main-items .shop-swiper-btn-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 3, //브라우저가 768보다 클 때
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 5, //브라우저가 1024보다 클 때
        spaceBetween: 10,
      },
    },
  });
}
LeagueShopSlider();

// leagueshop tap menu
function tap_menu_on() {
  $(".leagueshop-main-tap > ul > li").click(function () {
    $(".leagueshop-main-tap > ul > li").removeClass("on");
    $(this).addClass("on");

    var i = $(this).index();

    $(".leagueshop-main-items .swiper").addClass("active");
    $(".leagueshop-main-items .swiper").eq(i).removeClass("active");

    return false;
  });
}
tap_menu_on();

// kits section slider
function FootballKitsSlider() {
  const FootballKitsSlider = new Swiper(".kits-right-box .swiper", {
    loop: true, // 슬라이드 반복여부
    slidesPerView: 1, // 한 페이지에 보여질 슬라이드 개수
    slidesPerGroup: 1, // 한번 넘길 때 몇 개의 슬라이드를 넘길건지
    spaceBetween: 15, // 슬라이드 간의 간격(여백)
    speed: 1500, // 슬라이드 전환 속도
    autoplay: {
      // 슬라이드 자동재생
      delay: 3000, // 3초에 한번씩 슬라이드 전환
    },
    navigation: {
      nextEl: ".kits-right-box .shop-swiper-btn-next",
      prevEl: ".kits-right-box .shop-swiper-btn-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2, //브라우저가 768보다 클 때
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3, //브라우저가 1024보다 클 때
        spaceBetween: 10,
      },
    },
  });
}

FootballKitsSlider();
