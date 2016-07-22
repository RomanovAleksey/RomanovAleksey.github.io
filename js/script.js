$(function(){
	
    $('.tabs .tab:first-of-type').show();
    $('.tab_head li:first-of-type').addClass('active-tabs'); 
    $('.tab_head li').on("click",function(){
        $(this).addClass('active-tabs').siblings().removeClass('active-tabs');
        $(this).parents('.tabs').find('.tab:eq('+$(this).index()+')').fadeIn().siblings('.tab').hide();
	}) 
                    
});

$(function(){
	$('.block').on('mouseenter', function(){
		$(this).css('opacity', '1').siblings().css('-webkit-filter', 'grayscale(100%)' )
	})
	$('.block').on('mouseleave', function(){
		$('.block').css('-webkit-filter', 'grayscale(0)' )
	})
});