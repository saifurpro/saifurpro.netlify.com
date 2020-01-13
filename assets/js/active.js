!function(e) {
    "use strict";
    jQuery(document).ready(function(e) {
        $(".latest-portfolio").owlCarousel( {
            margin:30, 
            loop:true, 
            dots:false, 
            nav:true, 
            navText:['<i class="fas fa-chevron-left ficon"></i>', '<i class="fas fa-chevron-right ficon"></i>'], 
            autoplay:true, 
            smartSpeed:500, 
            responsive: {
                0: {
                  items: 1,  
                },
                480: {
                    items: 1
                }
                , 768: {
                    items: 2
                }
            }
        }), 
        
        $(".testimonials").owlCarousel( {
            margin:30, 
            loop:true, 
            dots:false, 
            nav:false, 
            autoplay:true, 
            smartSpeed:500, 
            responsive: {
                0: {
                  items: 1,  
                },
                480: {
                    items: 1
                }
                , 768: {
                    items: 2
                }
            }
        })
    }),

    jQuery(window).on("load", function() {

    })
}

(jQuery);