/* Custom General jQuery
/*--------------------------------------------------------------------------------------------------------------------------------------*/
;(function($, window, document, undefined) {
	//Genaral Global variables
	var $win = $(window),
		$doc = $(document),
		$winW = function(){ return $(window).width() },
		$winH = function(){ return $(window).height() },
		$mainmenu = $('#mainmenu'),
		$screensize = function(element){  
			$(element).width($winW()).height($winH());
		};
		
		var screencheck = function(mediasize){
			if (typeof window.matchMedia !== "undefined"){
				var screensize = window.matchMedia("(max-width:"+ mediasize+"px)");
				if( screensize.matches ) {
					return true;
				}else {
					return false;
				}
			} else { // for IE9 and lower browser
				if( $winW() <=  mediasize ) {
					return true;
				}else {
					return false;
				}
			}
		};

	$doc.ready(function() {
/*--------------------------------------------------------------------------------------------------------------------------------------*/		
		// Remove No-js Class
		$("html").removeClass('no-js').addClass('js');
		
		// First and last Hacks
		
		// Get Screen size
		$win.load(function(){
			$win.on('resize', function(){
				$screensize('your selector');	
			}).resize();	
		});
		
		//Menu ICon Append prepend for responsive
		$(window).on('resize', function(){
			if (screencheck(479)) {
				if(!$('.searchicon').length){
					$('.navouterbox').prepend('<a href="#" class="searchicon sprites"></a>');
				}
			} else {
				$(".searchicon").remove();
			}
		}).resize();
		
		
		
		
		// This adds placeholder support to browsers that wouldn't otherwise support it. 
	
			if(!$.support.placeholder) { 
				var active = document.activeElement;
				$(':text').focus(function () {
					if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
						$(this).val('').removeClass('hasPlaceholder');
					}
				}).blur(function () {
					if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
						$(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
					}
				});
				$(':text').blur();
				$(active).focus();
				$('form:eq(0)').submit(function () {
					$(':text.hasPlaceholder').val('');
				});
			} else {
				// Place holder Hide on blur	
				$.fn.togglePlaceholder = function() {
					return this.each(function() {
						$(this).data("holder", $(this).attr("placeholder"))
						.focusin(function(){
							$(this).attr('placeholder','');
						})
						.focusout(function(){
							$(this).attr('placeholder',$(this).data('holder'));
						});
					});
				};
				$("[placeholder]").togglePlaceholder();
			}
		
		
		
		if($('.banner-slider').length){
			$(".banner-slider").lightSlider({
				loop:true,
				//easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
				mode:'fade',
				auto:true,
				pause: 5000,
				controls: false,
				pager: false,
				speed:1000,
				item:1,
				keyPress:true
			});
		}
		
		//Smooth back to top
		$('.backtotop').click(function(){
			$("html:not(:animated),body:not(:animated)").animate({ scrollTop:0}, 'noraml');
			return false;
		});
		
		$('.dropdown').hover(function() {
			if ($winW() > 768) {	
				$(this).addClass('open');
			}
		}, function(){
			if ($winW() > 768) {	
				$(this).removeClass('open');
			}
		});

		$(document).on('click','.searchicon', function() {
			 $('.searchbox').slideToggle('normal');
		});
		
		if($('body').hasClass('innerpage')){
			var bgSource = $('.inner-banner .wrap img').attr('src');
			$win.on('resize', function(){
				if ($winW() < 1200) { 
					$('.inner-banner .wrap').css({"background-image":"url("+bgSource+")"});
					/*$('.inner-banner .wrap img').delay(600).hide(0);*/
				} else {
					$('#main').css({'margin-top':''});
					$('.inner-banner .wrap').removeAttr('style');
				}
			}).resize();
			
		}
		
		
		
		$win.load(function(){
			if($('body').hasClass('innerpage')){
				$win.on('resize', function(){
					var getMargin = $('.inner-banner').height();
					if ($winW() > 1280) { 
						$('#main').css({'margin-top':getMargin});
						$('html, body').scrollTop((getMargin/2) + 30);
					} else if( $winW() > 1200 && $winW() < 1280){
						$('#main').css({'margin-top':getMargin});
						$('html, body').scrollTop((getMargin/2) + 62);
					} else {
						$('#main').css({'margin-top':''});
						$('html, body').scrollTop(0);
					}
				}).resize();
			}
			$win.on('scroll', function(){
				var getScrollval = $('#main > .wrap').offset().top - ($('#header').height()+40) ;
				if ($winW() > 1200) { 
					if( $(this).scrollTop() > getScrollval){
						$('#header').addClass('scrolled');
					} else {
						$('#header').removeClass('scrolled');
					}
				} 
				
			});	
		});

/*--------------------------------------------------------------------------------------------------------------------------------------*/		
	});	
/*--------------------------------------------------------------------------------------------------------------------------------------*/
})(jQuery, window, document);