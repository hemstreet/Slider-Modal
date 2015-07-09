(function ( $ ) {

    "use strict";

    $.fn.sliderModal = function ( options ) {
        $( this ).each( function () {

            $.extend( {}, options );

            var scrollLeft = function () {
                console.log('scrolling left');
            };

            var scrollRight = function () {
                console.log('scrolling right');
            };

            var setupSliders = function () {

                var $left = $( '<div class="leftArrow"><</div>' ),
                    $right = $( '<div class="rightArrow">></div>' );

                $( this ).prepend( $left );
                $( this ).append( $right );

                console.log($left[0], $right);
                $left.on( 'hover', function () {
                    console.log('left hover');
                    scrollLeft();
                });

                $right.on( 'hover', function () {
                    scrollRight();
                });

            }.bind( this );

            var init = function () {

                setupSliders();

            }.bind( this );

            init();

        } );

        // Inject underlay
        var underlay = $( '<div class="modal-underlay"></div>' );
        $( 'body' ).append( underlay );

        return this;

    };

})( jQuery );