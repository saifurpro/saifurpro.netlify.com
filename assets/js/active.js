!(function (e) {
  "use strict";
  jQuery(document).ready(function (e) {
    $(".latest-portfolio").owlCarousel({
      margin: 30,
      loop: true,
      dots: false,
      nav: true,
      navText: [
        '<i class="fas fa-chevron-left ficon"></i>',
        '<i class="fas fa-chevron-right ficon"></i>',
      ],
      autoplay: true,
      smartSpeed: 600,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 2,
        },
      },
    }),
      $(".testimonials").owlCarousel({
        margin: 30,
        loop: true,
        dots: false,
        nav: false,
        autoplay: true,
        smartSpeed: 600,
        responsive: {
          0: {
            items: 1,
          },
          480: {
            items: 1,
          },
          768: {
            items: 2,
          },
        },
      });

    /* Load More */
    let size_li = $(".portfolio .col-md-6").length;
    let x = 6;
    $(".portfolio .col-md-6:lt(" + x + ")").show();
    $("#loadMore").click(function (e) {
      e.preventDefault();
      x = x + 6 <= size_li ? x + 6 : size_li;
      $(".portfolio .col-md-6:lt(" + x + ")").show();
      if (x == size_li) {
        $("#loadMore").hide();
      }
      if (x > 6) {
        $("#showLess").show();
      }
    });
    $("#showLess").click(function (e) {
      e.preventDefault();
      x = x - 6 < 0 ? 6 : x - 6;
      $(".portfolio .col-md-6")
        .not(":lt(" + x + ")")
        .hide();
      if (x <= 6) {
        $("#showLess").hide();
      }
      if (x < size_li) {
        $("#loadMore").show();
      }
    });

    /* Load More */
  });
})(jQuery);
