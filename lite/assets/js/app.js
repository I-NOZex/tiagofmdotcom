
var topProjects = new Swiper('.spotlight-container', {
    pagination: {
        el: '.swiper-pagination'
    }
  })

  var appsProjects = new Swiper('.app-swipper', {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
    })