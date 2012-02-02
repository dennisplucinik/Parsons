/**
 
 All your styles belong here.

*/
(function() {

    $(function(){
        var queryString = window.location.search.replace('?', '');
        var hashString  = window.location.hash.replace('#', '');
        if (queryString === 'p1') {
            var $slides = $('div.slide');
            var len     = $slides.length;
            for (var i=0; i<len; i++) {
                var $slide = $slides.eq(i);
                if (!$slide.hasClass('p1')) {
                    $slide.remove();
                }
            }
        }
    });

    SLIDESHOW();

}())