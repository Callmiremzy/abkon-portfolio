
  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '#toolsCarousel', {
        type: 'loop',
        perPage: 3,
        autoplay: true,
        interval: 5000,
        arrows: false,
        breakpoints: {
            
        }
    } );
    splide.mount();
  } );