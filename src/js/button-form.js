// $("form").click(function(event) {
//   event.preventDefault();
//   $('html, body').stop().animate({
//     scrollTop: $('#b1').offset().top
//   }, 600, 'linear');
// });
$(".scrollto").click(function() {
    var elementClick = $(this).attr("id")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
    }, 500);
    return false;
 });