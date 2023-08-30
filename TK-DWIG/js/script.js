// $(document).on('a', function(event){
//     event.preventDefault();

//     $('html, body').animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 500);
// });



//hide navbar script
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#scrollHide').outerHeight();
var docHeight = $(document).height();
console.log(navbarHeight)
$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250); 

function hasScrolled() {
    var st = $(this).scrollTop();
 	console.log(st);
    console.log(docHeight);
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
   

            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                if (st + $(window).height() != $(document).height()) {
                     $('#scrollHide').fadeOut(600);               
                 } else {
                    $('#scrollHide').fadeIn(2000); }

            } else {
                // Scroll Up
                if(st > 5) {
                    $('#scrollHide').fadeIn(300);
            }
                } 
        

          
    // This is necessary so you never see what is "behind" the navbar.


   
    lastScrollTop = st;
    console.log(lastScrollTop)
};