"use strict";

// ALERT FOR IE USERS
if (window.document.documentMode) {
	alert("This browser is not fully supported , For best results please use Chrome or Firefox")
  }

(function () {
	// hide Loader
	$("html").removeClass("overflowHidden");
	$(window).on("load", function () {
		// WOW ANIMATION
		new WOW().init();
		$("#loading").fadeOut();
		$("html").removeClass("overflowHidden");
	});

	$(document).ready(function () {
		// swiper init
		var swiper = new Swiper("header .swiper-container", {
			autoplay: {
				delay: 4500,
				disableOnInteraction: true,
			},
			// loop: $("header .swiper-container").find(".swiper-slide").length > 1 ? true : false,
			slidesPerView: 1,
			speed: 1500,
			pagination: {
			  el: 'header .swiper-pagination',
			  clickable: true,
			},
		});


		if ($(".products_slider .swiper-container").length) {
			$(".products_slider .swiper-container").each(function (index, item) {
				new Swiper($(item), {
					autoplay: {
						delay: 3000,
						disableOnInteraction: true,
					},
					// loop:true,

					slidesPerView: 4,
					spaceBetween: 30,
					breakpoints: {
						768: {
							slidesPerView: "auto",
							spaceBetween: 10,
						},
					},
				}).init();
			});
		}

		if ($(".products_slider.perCat_slider .swiper-container").length) {
			$(".products_slider.perCat_slider .swiper-container").each(function (index, item) {
				new Swiper($(item), {
					autoplay: {
						delay: 3000,
						disableOnInteraction: true,
					},
					// loop:true,
					slidesPerView: 5,
					spaceBetween: 30,
					breakpoints: {
						768: {
							slidesPerView: "auto",
							spaceBetween: 10,
						},
					},
				}).init();
			});
		}


	
		

		$(".swiper-container").on("hover", (
			function () {
				this.swiper.autoplay.stop();
			},
			function () {
				this.swiper.autoplay.start();
			}
		));

	
		// enable bootstrap accordion tabs
		$('.collapse').collapse({
			toggle: false
		})
		$("#accordion, #accordion2, #accordion3, #accordion4 ,#accordion5, #accordion6, #accordion7, #accordion8").on("hide.bs.collapse show.bs.collapse", e => {
			$(e.target)
			  .prev()
			  .find("i:last-child")
			  .toggleClass("fa-minus fa-plus");
		  });


	// slick slider init

	$('.slider-main').slick({
		slidesToShow: 1,
		arrows: false,
		asNavFor: '.slider-nav',
		vertical: true,
		autoplay: false,
		verticalSwiping: false,
		horizontalSwiping: false,
		centerMode: false,
		draggable: false,
		swipe: false,
		swipeToSlide: false,
		touchMove: false,
		draggable: false,
	  });
	  
	  $('.slider-nav').slick({
		slidesToShow: 6,
		asNavFor: '.slider-main',
		vertical: true,
		focusOnSelect: true,
		autoplay: false,
		centerMode: false
	  });
	  
	  $(window).on('resize orientationchange', function() {
		if ($(window).width() > 1200) {
			if($('.slider-nav')){
				$('.slider-nav').slick('unslick');
		  $('.slider-nav').slick({
			slidesToShow: 6,
			asNavFor: '.slider-main',
			vertical: true,
			focusOnSelect: true,
			autoplay: false,
			centerMode: false
		  });
			}
		  
		}
	  });

	
$(".parent_menu_item").each((i,el) => {
	$(el).hover(function(){
		$(el).find(".sub_menu").fadeIn();
		}, function(){
			$(el).find(".sub_menu").fadeOut();
	  });
});




	
	

	}); //jquery end

	

	
           })();
