(function() {
    "use strict";

    // jQuery document ready function
    $(function() {

        // Toggle navigation on small devices 

        // Grab .nav-toggler element
        var $navToggler = $(".nav-toggler");

        // Attach click event to #nav-toggler element
        $navToggler.click(function() {

            // Toggle #main-nav element
            $(".main-nav").toggle("slow");

            // Alternate $navToggler aria-expanded attribute value
            if ($navToggler.attr("aria-expanded") == "false") {
                $navToggler.attr("aria-expanded", "true");
            } else {
                $navToggler.attr("aria-expanded", "false");
            }

        });

    }); // jQuery document ready function

})(); //Immediately Invoked Function Expression (IIFE)