

$('.burger').on('click', function(e){
  $(this).toggleClass('active')
  $('.header__body-mobile').toggleClass('active')
  $('body').toggleClass('hidden')
})


$('.target').on('click', function (e) {
  window.location.href = '#feedback'
})

if (document.querySelector('#main')) {
  var splide = new Splide('#main', {
    perPage: 1,
    rewind: true,
    type: 'loop',
    pagination: false,
  });

  splide.mount();
}


$('.service_splide').each(function (e) {
  var splideService = new Splide(this, {
    type: 'loop',
    perPage: 1,
    arrows: false,
    pagination: false
  });
  var barService = splideService.root.querySelector('.service-carousel-progress-bar');
  splideService.on('mounted move', function () {
    var end = splideService.Components.Controller.getEnd() + 1;
    var rate = Math.min((splideService.index + 1) / end, 1);
    barService.style.width = String(100 * rate) + '%';
  });

  splideService.mount();
})




var splideWhy = new Splide('#why', {
  type: 'loop',
  perPage: 1,
  arrows: false,
  pagination: false
});
var barWhy = splideWhy.root.querySelector('.why-carousel-progress-bar');

// Updates the bar width whenever the carousel moves:
splideWhy.on('mounted move', function () {
  var end = splideWhy.Components.Controller.getEnd() + 1;
  var rate = Math.min((splideWhy.index + 1) / end, 1);
  barWhy.style.width = String(100 * rate) + '%';
});

splideWhy.mount();