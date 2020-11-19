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
    $(".parent_menu").each(function (i, el) {
      $(el).find("> a").hover(function () {
        $(el).find(".sub_menu").fadeIn();
      }, function () {
        $(el).find(".sub_menu").fadeOut();
      });
    });
    $(".sub_menu").hover(function () {
      $(this).fadeIn();
    }, function () {
      $(this).fadeOut();
    });
  }); //jquery end
})();

},{"@babel/runtime/helpers/defineProperty":1,"@babel/runtime/helpers/interopRequireDefault":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsInNyYy9qcy9zY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQSxhLENBRUE7Ozs7OztBQUNBLElBQUksTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsWUFBcEIsRUFBa0M7QUFDakMsRUFBQSxLQUFLLENBQUMscUZBQUQsQ0FBTDtBQUNFOztBQUVILENBQUMsWUFBWTtBQUNaO0FBQ0EsRUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUsV0FBVixDQUFzQixnQkFBdEI7QUFDQSxFQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxFQUFWLENBQWEsTUFBYixFQUFxQixZQUFZO0FBQ2hDO0FBQ0EsUUFBSSxHQUFKLEdBQVUsSUFBVjtBQUNBLElBQUEsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjLE9BQWQ7QUFDQSxJQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxXQUFWLENBQXNCLGdCQUF0QjtBQUNBLEdBTEQ7QUFPQSxFQUFBLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWSxLQUFaLENBQWtCLFlBQVk7QUFDN0I7QUFDQSxRQUFJLE1BQU0sR0FBRyxJQUFJLE1BQUosQ0FBVywwQkFBWCxFQUF1QztBQUNuRCxNQUFBLFFBQVEsRUFBRTtBQUNULFFBQUEsS0FBSyxFQUFFLElBREU7QUFFVCxRQUFBLG9CQUFvQixFQUFFO0FBRmIsT0FEeUM7QUFL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T0FGRixFQUVJLFlBQVU7QUFDWixRQUFBLENBQUMsQ0FBQyxFQUFELENBQUQsQ0FBTSxJQUFOLENBQVcsV0FBWCxFQUF3QixPQUF4QjtBQUNDLE9BSkg7QUFLQSxLQU5EO0FBU0EsSUFBQSxDQUFDLENBQUMsV0FBRCxDQUFELENBQWUsS0FBZixDQUFxQixZQUFVO0FBQzlCLE1BQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLE1BQVI7QUFDQyxLQUZGLEVBRUksWUFBVTtBQUNaLE1BQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLE9BQVI7QUFDQyxLQUpIO0FBVUUsR0FwSkQsRUFWWSxDQThKUjtBQUtPLENBbktaIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBBTEVSVCBGT1IgSUUgVVNFUlNcclxuaWYgKHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudE1vZGUpIHtcclxuXHRhbGVydChcIlRoaXMgYnJvd3NlciBpcyBub3QgZnVsbHkgc3VwcG9ydGVkICwgRm9yIGJlc3QgcmVzdWx0cyBwbGVhc2UgdXNlIENocm9tZSBvciBGaXJlZm94XCIpXHJcbiAgfVxyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHQvLyBoaWRlIExvYWRlclxyXG5cdCQoXCJodG1sXCIpLnJlbW92ZUNsYXNzKFwib3ZlcmZsb3dIaWRkZW5cIik7XHJcblx0JCh3aW5kb3cpLm9uKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQvLyBXT1cgQU5JTUFUSU9OXHJcblx0XHRuZXcgV09XKCkuaW5pdCgpO1xyXG5cdFx0JChcIiNsb2FkaW5nXCIpLmZhZGVPdXQoKTtcclxuXHRcdCQoXCJodG1sXCIpLnJlbW92ZUNsYXNzKFwib3ZlcmZsb3dIaWRkZW5cIik7XHJcblx0fSk7XHJcblxyXG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHRcdC8vIHN3aXBlciBpbml0XHJcblx0XHR2YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcImhlYWRlciAuc3dpcGVyLWNvbnRhaW5lclwiLCB7XHJcblx0XHRcdGF1dG9wbGF5OiB7XHJcblx0XHRcdFx0ZGVsYXk6IDQ1MDAsXHJcblx0XHRcdFx0ZGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIGxvb3A6ICQoXCJoZWFkZXIgLnN3aXBlci1jb250YWluZXJcIikuZmluZChcIi5zd2lwZXItc2xpZGVcIikubGVuZ3RoID4gMSA/IHRydWUgOiBmYWxzZSxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdFx0c3BlZWQ6IDE1MDAsXHJcblx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0ICBlbDogJ2hlYWRlciAuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG5cdFx0XHQgIGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cclxuXHJcblx0XHRpZiAoJChcIi5wcm9kdWN0c19zbGlkZXIgLnN3aXBlci1jb250YWluZXJcIikubGVuZ3RoKSB7XHJcblx0XHRcdCQoXCIucHJvZHVjdHNfc2xpZGVyIC5zd2lwZXItY29udGFpbmVyXCIpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XHJcblx0XHRcdFx0bmV3IFN3aXBlcigkKGl0ZW0pLCB7XHJcblx0XHRcdFx0XHRhdXRvcGxheToge1xyXG5cdFx0XHRcdFx0XHRkZWxheTogMzAwMCxcclxuXHRcdFx0XHRcdFx0ZGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWUsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Ly8gbG9vcDp0cnVlLFxyXG5cclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDQsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHRcdFx0NzY4OiB7XHJcblx0XHRcdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcblx0XHRcdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAxMCxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSkuaW5pdCgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoJChcIi5wcm9kdWN0c19zbGlkZXIucGVyQ2F0X3NsaWRlciAuc3dpcGVyLWNvbnRhaW5lclwiKS5sZW5ndGgpIHtcclxuXHRcdFx0JChcIi5wcm9kdWN0c19zbGlkZXIucGVyQ2F0X3NsaWRlciAuc3dpcGVyLWNvbnRhaW5lclwiKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xyXG5cdFx0XHRcdG5ldyBTd2lwZXIoJChpdGVtKSwge1xyXG5cdFx0XHRcdFx0YXV0b3BsYXk6IHtcclxuXHRcdFx0XHRcdFx0ZGVsYXk6IDMwMDAsXHJcblx0XHRcdFx0XHRcdGRpc2FibGVPbkludGVyYWN0aW9uOiB0cnVlLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdC8vIGxvb3A6dHJ1ZSxcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDUsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHRcdFx0NzY4OiB7XHJcblx0XHRcdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcblx0XHRcdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAxMCxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSkuaW5pdCgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblxyXG5cdFxyXG5cdFx0XHJcblxyXG5cdFx0JChcIi5zd2lwZXItY29udGFpbmVyXCIpLm9uKFwiaG92ZXJcIiwgKFxyXG5cdFx0XHRmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5zd2lwZXIuYXV0b3BsYXkuc3RvcCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0dGhpcy5zd2lwZXIuYXV0b3BsYXkuc3RhcnQoKTtcclxuXHRcdFx0fVxyXG5cdFx0KSk7XHJcblxyXG5cdFxyXG5cdFx0Ly8gZW5hYmxlIGJvb3RzdHJhcCBhY2NvcmRpb24gdGFic1xyXG5cdFx0JCgnLmNvbGxhcHNlJykuY29sbGFwc2Uoe1xyXG5cdFx0XHR0b2dnbGU6IGZhbHNlXHJcblx0XHR9KVxyXG5cdFx0JChcIiNhY2NvcmRpb24sICNhY2NvcmRpb24yLCAjYWNjb3JkaW9uMywgI2FjY29yZGlvbjQgLCNhY2NvcmRpb241LCAjYWNjb3JkaW9uNiwgI2FjY29yZGlvbjcsICNhY2NvcmRpb244XCIpLm9uKFwiaGlkZS5icy5jb2xsYXBzZSBzaG93LmJzLmNvbGxhcHNlXCIsIGUgPT4ge1xyXG5cdFx0XHQkKGUudGFyZ2V0KVxyXG5cdFx0XHQgIC5wcmV2KClcclxuXHRcdFx0ICAuZmluZChcImk6bGFzdC1jaGlsZFwiKVxyXG5cdFx0XHQgIC50b2dnbGVDbGFzcyhcImZhLW1pbnVzIGZhLXBsdXNcIik7XHJcblx0XHQgIH0pO1xyXG5cclxuXHJcblx0Ly8gc2xpY2sgc2xpZGVyIGluaXRcclxuXHJcblx0JCgnLnNsaWRlci1tYWluJykuc2xpY2soe1xyXG5cdFx0c2xpZGVzVG9TaG93OiAxLFxyXG5cdFx0YXJyb3dzOiBmYWxzZSxcclxuXHRcdGFzTmF2Rm9yOiAnLnNsaWRlci1uYXYnLFxyXG5cdFx0dmVydGljYWw6IHRydWUsXHJcblx0XHRhdXRvcGxheTogZmFsc2UsXHJcblx0XHR2ZXJ0aWNhbFN3aXBpbmc6IGZhbHNlLFxyXG5cdFx0aG9yaXpvbnRhbFN3aXBpbmc6IGZhbHNlLFxyXG5cdFx0Y2VudGVyTW9kZTogZmFsc2UsXHJcblx0XHRkcmFnZ2FibGU6IGZhbHNlLFxyXG5cdFx0c3dpcGU6IGZhbHNlLFxyXG5cdFx0c3dpcGVUb1NsaWRlOiBmYWxzZSxcclxuXHRcdHRvdWNoTW92ZTogZmFsc2UsXHJcblx0XHRkcmFnZ2FibGU6IGZhbHNlLFxyXG5cdCAgfSk7XHJcblx0ICBcclxuXHQgICQoJy5zbGlkZXItbmF2Jykuc2xpY2soe1xyXG5cdFx0c2xpZGVzVG9TaG93OiA2LFxyXG5cdFx0YXNOYXZGb3I6ICcuc2xpZGVyLW1haW4nLFxyXG5cdFx0dmVydGljYWw6IHRydWUsXHJcblx0XHRmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG5cdFx0YXV0b3BsYXk6IGZhbHNlLFxyXG5cdFx0Y2VudGVyTW9kZTogZmFsc2VcclxuXHQgIH0pO1xyXG5cdCAgXHJcblx0ICAkKHdpbmRvdykub24oJ3Jlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKCQod2luZG93KS53aWR0aCgpID4gMTIwMCkge1xyXG5cdFx0XHRpZigkKCcuc2xpZGVyLW5hdicpKXtcclxuXHRcdFx0XHQkKCcuc2xpZGVyLW5hdicpLnNsaWNrKCd1bnNsaWNrJyk7XHJcblx0XHQgICQoJy5zbGlkZXItbmF2Jykuc2xpY2soe1xyXG5cdFx0XHRzbGlkZXNUb1Nob3c6IDYsXHJcblx0XHRcdGFzTmF2Rm9yOiAnLnNsaWRlci1tYWluJyxcclxuXHRcdFx0dmVydGljYWw6IHRydWUsXHJcblx0XHRcdGZvY3VzT25TZWxlY3Q6IHRydWUsXHJcblx0XHRcdGF1dG9wbGF5OiBmYWxzZSxcclxuXHRcdFx0Y2VudGVyTW9kZTogZmFsc2VcclxuXHRcdCAgfSk7XHJcblx0XHRcdH1cclxuXHRcdCAgXHJcblx0XHR9XHJcblx0ICB9KTtcclxuXHJcblx0XHJcbiQoXCIucGFyZW50X21lbnVcIikuZWFjaCgoaSxlbCkgPT4ge1xyXG5cdCQoZWwpLmZpbmQoXCI+IGFcIikuaG92ZXIoZnVuY3Rpb24oKXtcclxuXHRcdCQoZWwpLmZpbmQoXCIuc3ViX21lbnVcIikuZmFkZUluKCk7XHJcblx0XHR9LCBmdW5jdGlvbigpe1xyXG5cdFx0XHQkKGVsKS5maW5kKFwiLnN1Yl9tZW51XCIpLmZhZGVPdXQoKTtcclxuXHQgIH0pO1xyXG59KTtcclxuXHJcblxyXG4kKFwiLnN1Yl9tZW51XCIpLmhvdmVyKGZ1bmN0aW9uKCl7XHJcblx0JCh0aGlzKS5mYWRlSW4oKTtcclxuXHR9LCBmdW5jdGlvbigpe1xyXG5cdFx0JCh0aGlzKS5mYWRlT3V0KCk7XHJcbiAgfSk7XHJcblxyXG5cclxuXHRcclxuXHRcclxuXHJcblx0fSk7IC8vanF1ZXJ5IGVuZFxyXG5cclxuXHRcclxuXHJcblx0XHJcbiAgICAgICAgICAgfSkoKTtcclxuIl19
