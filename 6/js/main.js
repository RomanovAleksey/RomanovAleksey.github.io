$(document).ready(function(){
  $('.slider').bxSlider({
  	  minSlides: 3,
	  maxSlides: 3,
	  slideWidth: 300,
	  slideMargin: 30,
	  auto:true,
	  pause:7000,
	  speed:700,
  });
});
$(document).ready(function(){
  $('.slider2').bxSlider({
  	  minSlides: 4,
	  maxSlides: 4,
	  slideWidth: 300,
	  slideMargin: 30
  });
});
ymaps.ready(function () {
		myMap = new ymaps.Map("map", {
		center: [50.028981,36.328202],
		zoom: 15,
	}),

	myMap.geoObjects.add(myPlacemark);
});

$("a").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
});