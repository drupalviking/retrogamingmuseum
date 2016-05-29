jQuery(window).bind('load', function() {
	jQuery('.foreground').toggle('slow');
});

jQuery(function() {
	jQuery('.view-portfolio .views-field-field-portfolio-image a').hide();
});
jQuery(window).bind('load', function() {
	 var i = 1;
	 var imgs = jQuery('.view-portfolio .views-field-field-portfolio-image a').length;
	 var int = setInterval(function() {
		 //console.log(i); check to make sure interval properly stops
		 if(i >= imgs) clearInterval(int);
		 jQuery('.view-portfolio .views-field-field-portfolio-image a:hidden').eq(0).fadeIn(300);
		 i++;
	 }, 300);
});


jQuery(function(){
	jQuery('.view-portfolio .views-row .views-field-field-portfolio-image a').hover(function(){
		jQuery(this).find('img').stop().animate({opacity:'.4'})
	},

	function(){
		jQuery(this).find('img').stop().animate({opacity:'1'})
	})
})

jQuery(function(){
	jQuery('.view-scroll-images-link a').hover(function(){
		jQuery(this).parents('.views-field-body').addClass('hover').find('.text-1, .text-title').addClass('hover')
	},
	function(){
		jQuery(this).parents('.views-field-body').removeClass('hover').find('.text-1, .text-title').removeClass('hover')
	})
})

jQuery(function(){
	jQuery('.jspContainer').append('<span class="jsppane-spacer-right"></span>', '<span class="jsppane-spacer-left"></span>');
})