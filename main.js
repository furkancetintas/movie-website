$('.slider1').owlCarousel({
  loop: true,
  autoplay: true,
  margin: 70,
  stagePadding: 20,
  responsiveClass: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
      margin: -320,
      loop: true,
    },
    300: {
      items: 2,
      loop: true,
      margin: 300,
    },
    320: {
      items: 2,
      margin: 310,
      loop: true,
    },
    540: {
      items: 2,
      margin: 150,
      loop: true,
    },
    600: {
      items: 3,
      loop: true,
    },
    768: {
      items: 3,
      margin: 310,
      loop: true,
    },
    1000: {
      items: 3,
      loop: true,
    },
    1024: {
      items: 3,
      loop: true,
      margin: 50,
    },
  },
});
$('.slider2').owlCarousel({
  loop: true,
  autoplay: true,
  margin: 20,
  stagePadding: 100,
  responsiveClass: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
      margin: -70,
      loop: true,
    },
    300: {
      items: 3,
      margin: 210,
      loop: true,
    },
    540: {
      items: 2,
      margin: 110,
      loop: true,
    },
    600: {
      items: 3,
      loop: true,
    },
    1000: {
      items: 5,
      loop: true,
    },
    1024: {
      items: 3,
      loop: true,
      margin: 50,
    },
  },
});
