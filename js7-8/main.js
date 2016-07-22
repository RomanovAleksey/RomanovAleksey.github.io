$(function(){
	
	$('.tabs .tab:first-of-type').show() 
	$('.tab_head li').on("click",function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parents('.tabs').find('.tab:eq('+$(this).index()+')').fadeIn().siblings('.tab').hide();
	}) 

});