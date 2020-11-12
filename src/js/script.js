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

	

	

	
	

		
		
	
		
		

		// make navbars position sticky
		function fixNav(el) {
			var currentScroll = $(window).scrollTop(); // get current position
			if ($("body").hasClass("homePage")) {
				if (currentScroll >= "70") {
					// apply position: fixed if you
					$(el).addClass("fixme");
					$(".nav_search img").attr("src", $(".nav_search img").attr("src_b"));
				} else {
					$(el).removeClass("fixme");
					$(".nav_search img").attr("src", $(".nav_search img").attr("src_w"));
				}
			} else {
				$(".nav_search img").attr("src", $(".nav_search img").attr("src_b"));
			}
		}

		var nav = $(".homePage .navbar");
		$(window).scroll(function () {
			fixNav(nav);
		});
		fixNav(nav);

		// open and close menu
		$("#navbar__menu").on("click", function (e) {
			e.preventDefault();
			$("#Menupopup").fadeToggle();
			$("html").addClass("overflowHidden");
		});

		$("#Menupopup, .closeMenu").on("click", function () {
			$("#Menupopup").fadeToggle();
			$("html").removeClass("overflowHidden");
		});

		$(".popup__container").click(function (e) {
			e.stopPropagation();
		});

		// open and close search div

		$(".nav_search").on("click", function (e) {
			e.preventDefault();
			$("#searchDiv").fadeToggle();
			$("body").addClass("overflowHidden");
		});

		$(" .closeSearch").on("click", function () {
			$("#searchDiv").fadeToggle();
			$("body").removeClass("overflowHidden");
		});

		// careers page
		$(".careers_loc_tabs a ").each(function (i, ele) {
			$(ele).click(function () {
				$(".careers_loc_tabs a ").removeClass("active");
				$(ele).addClass("active");
				$(".careers_loc_content").css("display", "none");
				$(".careers_loc_content").each(function (i, el) {
					if ($(el).hasClass($(ele).attr("data-target"))) {
						$(el).fadeIn();
					}
				});
			});
		});
		$("#careers_loc_tabs_select").on("change", function () {
			$(".careers_loc_content").css("display", "none");
			$(".careers_loc_content").each(function (i, el) {
				if ($(el).hasClass($("#careers_loc_tabs_select").val())) {
					$(el).fadeIn();
				}
			});
		});

		// slide toggle careers block
		$(".careers_loc_content > .careers_loc_content_head")
			.not(".careers_loc_content_head.careers_loc_content_body")
			.each(function (i, el) {
				$(el).on("click", function () {
					$(el).closest(".careers_loc_content").find(".careers_loc_content_body").slideToggle().css("display", "flex");
					$(el).find("i").toggleClass("fa-plus fa-minus ");
				});
			});

		function addArrowBefore(parent, child) {
			$(parent)
				.find(child)
				.each(function (i, el) {
					$(el).prepend(`<img  src="${$(parent).attr("imgSrc")}" />`);
					$(el).addClass("tri_bull");
				});
		}

		addArrowBefore(".requirments", "li");
		addArrowBefore(".construction_sec2 .col1of3", "li");
		// addArrowBefore(".horizontalTabs .secondery", "a");
		// addArrowBefore(".quality_sec2 .text", "li");
		// addArrowBefore(".hse_sec2 .text", "li");
		// addArrowBefore(".footer_links ", "li a");
		// addArrowAfter(".navbar ", "li a");

		function addArrowAfter(parent, child) {
			$(parent)
				.find(child)
				.each(function (i, el) {
					$(el).prepend(`<img  src="${$(parent).attr("imgSrc")}" />`);
					$(el).addClass("tri_bull");
				});
		}

		addArrowAfter(".sectors_items ", "h3");

		$(".popup .menu-item  a").each(function (i, el) {
			$(el).prepend(`<img class="tri" src="${$(".popup .main").attr("imgSrc")}" alt=""/>`);
		});

		// change input file img src on hover
		var inputIcon = $(" .js .input-file-container .input-file-trigger").find("img");
		$(" .js .input-file-container").hover(
			function () {
				inputIcon.attr("src", inputIcon.attr("hoverSrc"));
			},
			function () {
				if ($(inputIcon).parent().parent().next().text().length > 1) {
				} else {
					inputIcon.attr("src", inputIcon.attr("src1"));
				}
			}
		);

		// submenu links toggler
		$("#Menupopup .main .menu-item-has-children  > a").each(function (i, el) {
			$(el).on("click", function (e) {
				e.preventDefault();
				$("#Menupopup .sub-menu").not($(el).next()).slideUp();
				$(el).next().slideToggle();
			});
		});

		// bullet active on hover

		$(".certification .swiper-pagination .swiper-pagination-bullet ").each(function (i, el) {
			$(el).mouseenter(function () {
				$(".certification .swiper-pagination .swiper-pagination-bullet .arrow").css({
					visibility: "hidden",
					opacity: 0,
				});
				$(el).find(".arrow").css({
					transform: "translateX(-50%)!important",
					visibility: "visible",
					opacity: 1,
				});
			});

			$(".certification .swiper-pagination .swiper-pagination-bullet ").mouseleave(function () {
				$(".certification .swiper-pagination .swiper-pagination-bullet .arrow").css({
					visibility: "hidden",
					opacity: 0,
				});

				$(".certification .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active").find(".arrow").css({
					transform: "translateX(-50%)!important",
					visibility: "visible",
					opacity: 1,
				});
			});
		});

		$(".apply_now_btn a ").each(function (i, el) {
			$(el).on("click", function (e) {
				e.preventDefault();
				var jobName = $(el).closest(".careers_loc_content").find(".careers_loc_content_head-title h3").text().toLowerCase();
				$("html, body").animate({ scrollTop: $(".application_form_form").offset().top }, 800);
				var jobPos = $(".application_form_form").find(".custom_input").find("[name='jform[contact_position]']");
				$(jobPos).val(jobName);
			});
		});

		// remove all <br> tags from headings
		var headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
		headings.forEach((el) => {
			if ($(el)) {
				$(el).each((i, el_s) => {
					$(el_s).text(
						$(el_s)
							.text()
							.replace(/&lt;br&gt;/g, " ")
					);
				});
			}
		});



		// homepage what we do section

		$(".whatWeDo_sec .content_text").each((i, el) => {
			$(el).on("mouseenter", () => {
				$(el).find("img").attr("src", $(el).find("img").attr("src2"))
			})
			$(el).on("mouseleave", () => {
				$(el).find("img").attr("src", $(el).find("img").attr("src1"))
			})
		})


		// remove video cover on click
		$(".videoCover").each((i,cover) => {
			$(cover).on("click", () => {
				$(cover).fadeOut(600, () => {
					$(cover).next().css("display", "block")
				})
			})
		})

		// close video modal
		var videoModal = $('.hr_announcements.video .modal ');
		$(videoModal).on("hidden.bs.modal", function () {
			$(videoModal).find("iframe").attr('src', $(videoModal).find("iframe").attr('src'));
		});


		// remove extra text in upload cv input

		var inputDetached = $(".wpcf7-form-control-wrap.cv input").detach();
		$(".wpcf7-form-control-wrap.cv ").text("");
		$(".wpcf7-form-control-wrap.cv ").append(inputDetached)

		if ($(window).width() <= 600) {
			var captcha = $(".application_form .control-group").detach();
			$(".application_form_form ").find(".submit_form").before(captcha);
		}
	}); //jquery end

	var inputIcon = $(" .js .input-file-container .input-file-trigger").find("img");
	document.querySelector("html").classList.add("js");

	var fileInputs = $(".input-file"),
		buttons = $(".input-file-trigger"),
		the_returns = $(".file-return"),
		fileInputArr = $(fileInputs),
		buttonsArr = $(buttons),
		the_returnsArr = $(the_returns);

	for (var i = 0; i < fileInputArr.length; i++) {
		$(buttonsArr[i]).on("keydown", function (event) {
			if (event.keyCode == 13 || event.keyCode == 32) {
				fileInputArr[i].focus();
			}
		});
		buttonsArr[i].addEventListener("click", function (event) {
			fileInputArr[i].focus();
			return false;
		});
		fileInputArr[i].addEventListener("change", function (event) {
			$(this).parent().parent().next().text(this.files[0].name).css("display", "none").fadeIn();
		});
	}
})();
