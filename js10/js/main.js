

$(document).ready(function () {

	$(function() {
    $('.jcarousel')
        .jcarousel({
            scroll: 1,
    auto: .01,
    wrap: 'last',
    easing: 'linear'
        })
        .jcarouselAutoscroll({
            interval: 3000,
            autostart: true
        });
});
  $('select').select2();

});




$(document).ready(function(){

$(".niceCheck").mousedown(function() {
     changeCheck(jQuery(this)); 
});

$(".niceCheck").each(function() {  
     changeCheckStart(jQuery(this));     
});

});

function changeCheck(el){
     var el = el,
          input = el.find("input").eq(0);
   	 if(!input.attr("checked")) {
		el.css("background-position","0 -17px");	
		input.attr("checked", true)
	} else {
		el.css("background-position","0 0");	
		input.attr("checked", false)
	}
     return true;
}

function changeCheckStart(el){
var el = el,
		input = el.find("input").eq(0);
      if(input.attr("checked")) {
		el.css("background-position","0 -17px");	
		}
     return true;
}


