(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
},{}],2:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],3:[function(require,module,exports){
"use strict"; // ALERT FOR IE USERS

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

if (window.document.documentMode) {
  alert("This browser is not fully supported , For best results please use Chrome or Firefox");
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
        disableOnInteraction: true
      },
      // loop: $("header .swiper-container").find(".swiper-slide").length > 1 ? true : false,
      slidesPerView: 1,
      speed: 1500,
      pagination: {
        el: 'header .swiper-pagination',
        clickable: true
      }
    });

    if ($(".products_slider .swiper-container").length) {
      $(".products_slider .swiper-container").each(function (index, item) {
        new Swiper($(item), {
          autoplay: {
            delay: 3000,
            disableOnInteraction: true
          },
          // loop:true,
          slidesPerView: 4,
          spaceBetween: 30,
          breakpoints: {
            768: {
              slidesPerView: "auto",
              spaceBetween: 10
            }
          }
        }).init();
      });
    }

    if ($(".products_slider.perCat_slider .swiper-container").length) {
      $(".products_slider.perCat_slider .swiper-container").each(function (index, item) {
        new Swiper($(item), {
          autoplay: {
            delay: 3000,
            disableOnInteraction: true
          },
          // loop:true,
          slidesPerView: 5,
          spaceBetween: 30,
          breakpoints: {
            768: {
              slidesPerView: "auto",
              spaceBetween: 10
            }
          }
        }).init();
      });
    }

    $(".swiper-container").on("hover", (function () {
      this.swiper.autoplay.stop();
    }, function () {
      this.swiper.autoplay.start();
    })); // enable bootstrap accordion tabs

    $('.collapse').collapse({
      toggle: false
    });
    $("#accordion, #accordion2, #accordion3, #accordion4 ,#accordion5, #accordion6, #accordion7, #accordion8").on("hide.bs.collapse show.bs.collapse", function (e) {
      $(e.target).prev().find("i:last-child").toggleClass("fa-minus fa-plus");
    }); // slick slider init

    $('.slider-main').slick((0, _defineProperty2["default"])({
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
      touchMove: false
    }, "draggable", false));
    $('.slider-nav').slick({
      slidesToShow: 6,
      asNavFor: '.slider-main',
      vertical: true,
      focusOnSelect: true,
      autoplay: false,
      centerMode: false
    });
    $(window).on('resize orientationchange', function () {
      if ($(window).width() > 1200) {
        if ($('.slider-nav')) {
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
    $(".parent_menu_item").each(function (i, el) {
      $(el).hover(function () {
        $(el).find(".sub_menu").fadeIn();
      }, function () {
        $(el).find(".sub_menu").fadeOut();
      });
    });
  }); //jquery end
})();

},{"@babel/runtime/helpers/defineProperty":1,"@babel/runtime/helpers/interopRequireDefault":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsInNyYy9qcy9zY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQSxhLENBRUE7Ozs7OztBQUNBLElBQUksTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsWUFBcEIsRUFBa0M7QUFDakMsRUFBQSxLQUFLLENBQUMscUZBQUQsQ0FBTDtBQUNFOztBQUVILENBQUMsWUFBWTtBQUNaO0FBQ0EsRUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUsV0FBVixDQUFzQixnQkFBdEI7QUFDQSxFQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxFQUFWLENBQWEsTUFBYixFQUFxQixZQUFZO0FBQ2hDO0FBQ0EsUUFBSSxHQUFKLEdBQVUsSUFBVjtBQUNBLElBQUEsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjLE9BQWQ7QUFDQSxJQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxXQUFWLENBQXNCLGdCQUF0QjtBQUNBLEdBTEQ7QUFPQSxFQUFBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWSxLQUFaLENBQWtCLFlBQVk7QUFDN0I7QUFDQSxRQUFJLE1BQU0sR0FBRyxJQUFJLE1BQUosQ0FBVywwQkFBWCxFQUF1QztBQUNuRCxNQUFBLFFBQVEsRUFBRTtBQUNULFFBQUEsS0FBSyxFQUFFLElBREU7QUFFVCxRQUFBLG9CQUFvQixFQUFFO0FBRmIsT0FEeUM7QUFL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QUEsQ0FBQyxDQUFDLEVBQUQsQ0FBRCxDQUFNLElBQU4sQ0FBVyxXQUFYLEVBQXdCLE9BQXhCO0FBQ0MsT0FKSDtBQUtBLEtBTkQ7QUFjRSxHQS9JRCxFQVZZLENBeUpSO0FBS08sQ0E5SloiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIEFMRVJUIEZPUiBJRSBVU0VSU1xyXG5pZiAod2luZG93LmRvY3VtZW50LmRvY3VtZW50TW9kZSkge1xyXG5cdGFsZXJ0KFwiVGhpcyBicm93c2VyIGlzIG5vdCBmdWxseSBzdXBwb3J0ZWQgLCBGb3IgYmVzdCByZXN1bHRzIHBsZWFzZSB1c2UgQ2hyb21lIG9yIEZpcmVmb3hcIilcclxuICB9XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cdC8vIGhpZGUgTG9hZGVyXHJcblx0JChcImh0bWxcIikucmVtb3ZlQ2xhc3MoXCJvdmVyZmxvd0hpZGRlblwiKTtcclxuXHQkKHdpbmRvdykub24oXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdC8vIFdPVyBBTklNQVRJT05cclxuXHRcdG5ldyBXT1coKS5pbml0KCk7XHJcblx0XHQkKFwiI2xvYWRpbmdcIikuZmFkZU91dCgpO1xyXG5cdFx0JChcImh0bWxcIikucmVtb3ZlQ2xhc3MoXCJvdmVyZmxvd0hpZGRlblwiKTtcclxuXHR9KTtcclxuXHJcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cdFx0Ly8gc3dpcGVyIGluaXRcclxuXHRcdHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiaGVhZGVyIC5zd2lwZXItY29udGFpbmVyXCIsIHtcclxuXHRcdFx0YXV0b3BsYXk6IHtcclxuXHRcdFx0XHRkZWxheTogNDUwMCxcclxuXHRcdFx0XHRkaXNhYmxlT25JbnRlcmFjdGlvbjogdHJ1ZSxcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gbG9vcDogJChcImhlYWRlciAuc3dpcGVyLWNvbnRhaW5lclwiKS5maW5kKFwiLnN3aXBlci1zbGlkZVwiKS5sZW5ndGggPiAxID8gdHJ1ZSA6IGZhbHNlLFxyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0XHRzcGVlZDogMTUwMCxcclxuXHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHQgIGVsOiAnaGVhZGVyIC5zd2lwZXItcGFnaW5hdGlvbicsXHJcblx0XHRcdCAgY2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblxyXG5cclxuXHRcdGlmICgkKFwiLnByb2R1Y3RzX3NsaWRlciAuc3dpcGVyLWNvbnRhaW5lclwiKS5sZW5ndGgpIHtcclxuXHRcdFx0JChcIi5wcm9kdWN0c19zbGlkZXIgLnN3aXBlci1jb250YWluZXJcIikuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcclxuXHRcdFx0XHRuZXcgU3dpcGVyKCQoaXRlbSksIHtcclxuXHRcdFx0XHRcdGF1dG9wbGF5OiB7XHJcblx0XHRcdFx0XHRcdGRlbGF5OiAzMDAwLFxyXG5cdFx0XHRcdFx0XHRkaXNhYmxlT25JbnRlcmFjdGlvbjogdHJ1ZSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQvLyBsb29wOnRydWUsXHJcblxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogNCxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0XHRcdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdFx0XHQ3Njg6IHtcclxuXHRcdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuXHRcdFx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDEwLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9KS5pbml0KCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICgkKFwiLnByb2R1Y3RzX3NsaWRlci5wZXJDYXRfc2xpZGVyIC5zd2lwZXItY29udGFpbmVyXCIpLmxlbmd0aCkge1xyXG5cdFx0XHQkKFwiLnByb2R1Y3RzX3NsaWRlci5wZXJDYXRfc2xpZGVyIC5zd2lwZXItY29udGFpbmVyXCIpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XHJcblx0XHRcdFx0bmV3IFN3aXBlcigkKGl0ZW0pLCB7XHJcblx0XHRcdFx0XHRhdXRvcGxheToge1xyXG5cdFx0XHRcdFx0XHRkZWxheTogMzAwMCxcclxuXHRcdFx0XHRcdFx0ZGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWUsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Ly8gbG9vcDp0cnVlLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogNSxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0XHRcdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdFx0XHQ3Njg6IHtcclxuXHRcdFx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuXHRcdFx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDEwLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9KS5pbml0KCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0XHJcblx0XHRcclxuXHJcblx0XHQkKFwiLnN3aXBlci1jb250YWluZXJcIikub24oXCJob3ZlclwiLCAoXHJcblx0XHRcdGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLnN3aXBlci5hdXRvcGxheS5zdG9wKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHR0aGlzLnN3aXBlci5hdXRvcGxheS5zdGFydCgpO1xyXG5cdFx0XHR9XHJcblx0XHQpKTtcclxuXHJcblx0XHJcblx0XHQvLyBlbmFibGUgYm9vdHN0cmFwIGFjY29yZGlvbiB0YWJzXHJcblx0XHQkKCcuY29sbGFwc2UnKS5jb2xsYXBzZSh7XHJcblx0XHRcdHRvZ2dsZTogZmFsc2VcclxuXHRcdH0pXHJcblx0XHQkKFwiI2FjY29yZGlvbiwgI2FjY29yZGlvbjIsICNhY2NvcmRpb24zLCAjYWNjb3JkaW9uNCAsI2FjY29yZGlvbjUsICNhY2NvcmRpb242LCAjYWNjb3JkaW9uNywgI2FjY29yZGlvbjhcIikub24oXCJoaWRlLmJzLmNvbGxhcHNlIHNob3cuYnMuY29sbGFwc2VcIiwgZSA9PiB7XHJcblx0XHRcdCQoZS50YXJnZXQpXHJcblx0XHRcdCAgLnByZXYoKVxyXG5cdFx0XHQgIC5maW5kKFwiaTpsYXN0LWNoaWxkXCIpXHJcblx0XHRcdCAgLnRvZ2dsZUNsYXNzKFwiZmEtbWludXMgZmEtcGx1c1wiKTtcclxuXHRcdCAgfSk7XHJcblxyXG5cclxuXHQvLyBzbGljayBzbGlkZXIgaW5pdFxyXG5cclxuXHQkKCcuc2xpZGVyLW1haW4nKS5zbGljayh7XHJcblx0XHRzbGlkZXNUb1Nob3c6IDEsXHJcblx0XHRhcnJvd3M6IGZhbHNlLFxyXG5cdFx0YXNOYXZGb3I6ICcuc2xpZGVyLW5hdicsXHJcblx0XHR2ZXJ0aWNhbDogdHJ1ZSxcclxuXHRcdGF1dG9wbGF5OiBmYWxzZSxcclxuXHRcdHZlcnRpY2FsU3dpcGluZzogZmFsc2UsXHJcblx0XHRob3Jpem9udGFsU3dpcGluZzogZmFsc2UsXHJcblx0XHRjZW50ZXJNb2RlOiBmYWxzZSxcclxuXHRcdGRyYWdnYWJsZTogZmFsc2UsXHJcblx0XHRzd2lwZTogZmFsc2UsXHJcblx0XHRzd2lwZVRvU2xpZGU6IGZhbHNlLFxyXG5cdFx0dG91Y2hNb3ZlOiBmYWxzZSxcclxuXHRcdGRyYWdnYWJsZTogZmFsc2UsXHJcblx0ICB9KTtcclxuXHQgIFxyXG5cdCAgJCgnLnNsaWRlci1uYXYnKS5zbGljayh7XHJcblx0XHRzbGlkZXNUb1Nob3c6IDYsXHJcblx0XHRhc05hdkZvcjogJy5zbGlkZXItbWFpbicsXHJcblx0XHR2ZXJ0aWNhbDogdHJ1ZSxcclxuXHRcdGZvY3VzT25TZWxlY3Q6IHRydWUsXHJcblx0XHRhdXRvcGxheTogZmFsc2UsXHJcblx0XHRjZW50ZXJNb2RlOiBmYWxzZVxyXG5cdCAgfSk7XHJcblx0ICBcclxuXHQgICQod2luZG93KS5vbigncmVzaXplIG9yaWVudGF0aW9uY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiAxMjAwKSB7XHJcblx0XHRcdGlmKCQoJy5zbGlkZXItbmF2Jykpe1xyXG5cdFx0XHRcdCQoJy5zbGlkZXItbmF2Jykuc2xpY2soJ3Vuc2xpY2snKTtcclxuXHRcdCAgJCgnLnNsaWRlci1uYXYnKS5zbGljayh7XHJcblx0XHRcdHNsaWRlc1RvU2hvdzogNixcclxuXHRcdFx0YXNOYXZGb3I6ICcuc2xpZGVyLW1haW4nLFxyXG5cdFx0XHR2ZXJ0aWNhbDogdHJ1ZSxcclxuXHRcdFx0Zm9jdXNPblNlbGVjdDogdHJ1ZSxcclxuXHRcdFx0YXV0b3BsYXk6IGZhbHNlLFxyXG5cdFx0XHRjZW50ZXJNb2RlOiBmYWxzZVxyXG5cdFx0ICB9KTtcclxuXHRcdFx0fVxyXG5cdFx0ICBcclxuXHRcdH1cclxuXHQgIH0pO1xyXG5cclxuXHRcclxuJChcIi5wYXJlbnRfbWVudV9pdGVtXCIpLmVhY2goKGksZWwpID0+IHtcclxuXHQkKGVsKS5ob3ZlcihmdW5jdGlvbigpe1xyXG5cdFx0JChlbCkuZmluZChcIi5zdWJfbWVudVwiKS5mYWRlSW4oKTtcclxuXHRcdH0sIGZ1bmN0aW9uKCl7XHJcblx0XHRcdCQoZWwpLmZpbmQoXCIuc3ViX21lbnVcIikuZmFkZU91dCgpO1xyXG5cdCAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHRcclxuXHRcclxuXHJcblx0fSk7IC8vanF1ZXJ5IGVuZFxyXG5cclxuXHRcclxuXHJcblx0XHJcbiAgICAgICAgICAgfSkoKTtcclxuIl19
