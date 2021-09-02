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

ScrollReveal().reveal('header', {
  origin: 'top',
  duration: 3000,
  distance: '3rem',
  delay: 100,
});
ScrollReveal().reveal('.showcase-heading', {
  origin: 'left',
  duration: 3000,
  distance: '3rem',
  delay: 300,
});
ScrollReveal().reveal('.latest-movie-heading', {
  origin: 'left',
  duration: 3000,
  distance: '3rem',
  delay: 300,
});
ScrollReveal().reveal('.movies-heading', {
  origin: 'left',
  duration: 3000,
  distance: '3rem',
  delay: 500,
});
ScrollReveal().reveal('.showcase', {
  origin: 'left',
  duration: 3000,
  distance: '2rem',
  delay: 2000,
});
ScrollReveal().reveal('.latest-movie', {
  origin: 'left',
  duration: 3000,
  distance: '2rem',
  delay: 3500,
});
ScrollReveal().reveal('.bx-1', {
  origin: 'top',
  duration: 3000,
  distance: '2rem',
  delay: 1000,
});
ScrollReveal().reveal('.bx-2', {
  origin: 'top',
  duration: 3000,
  distance: '2rem',
  delay: 1500,
});
ScrollReveal().reveal('.bx-3', {
  origin: 'top',
  duration: 3000,
  distance: '2rem',
  delay: 2000,
});
ScrollReveal().reveal('.bx-4', {
  origin: 'top',
  duration: 3000,
  distance: '2rem',
  delay: 2500,
});
ScrollReveal().reveal('.bx-5', {
  origin: 'top',
  duration: 3000,
  distance: '2rem',
  delay: 2500,
});
ScrollReveal().reveal('.bx-6', {
  origin: 'top',
  duration: 3000,
  distance: '2rem',
  delay: 3000,
});
ScrollReveal().reveal('.bx-7', {
  origin: 'top',
  duration: 3000,
  distance: '2rem',
  delay: 3500,
});
ScrollReveal().reveal('.bx-8', {
  origin: 'top',
  duration: 3000,
  distance: '2rem',
  delay: 4000,
});
