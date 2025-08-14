
  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '#toolsCarousel', {
        type: 'loop',
        perPage: 3,
        autoplay: true,
        interval: 5000,
        arrows: false,
        breakpoints: {
          700: {
            perPage: 1,
          },  
        },
        type: 'loop',
        pagination: true,
    } );
    splide.mount();
  } );
  // Second Splide
  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '#ToolsSplide', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        interval: 4000,
        arrows: false,
        breakpoints: {
          700: {
            perPage: 1,
          },
        },
        pagination: true,
    });
    splide.mount();
  } );