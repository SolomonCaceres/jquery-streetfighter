$(document).ready(function() {


$(window).keydown(function (evt) {
    if (evt.which == 88) { 
        $('.ryu-cool').show();
        $('.ryu-still').hide();
        $('.ryu-ready').hide();
        $('.ryu-throwing').hide();
    }
});


$(window).keyup(function (evt) {
    if (evt.which == 88) { 
        $('.ryu-cool').hide();
        $('.ryu-ready').show();
        
    }
});


$('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-cool').hide();
	$('.ryu-ready').show();
  });



 $('.ryu').mouseleave(function() {
    $('.ryu-ready').hide();
	$('.ryu-still').show();
	$('.ryu-cool').hide();
  });



$('.ryu').mousedown(function() {
    playhadouken();
$('.ryu-cool').hide();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
  {'left': '1200px'},
  145,
  function() {
    $(this).hide();
    $(this).css('left', '580px');
  }
);

});
  


$('.LOGO').mouseover(function() {
    play1up();

});




$(".ryu").mouseup(function(){
$(".ryu-ready").show();
$('.ryu-throwing').hide();
$('.ryu-cool').hide();

});







function playhadouken () {
  $('#hadouken')[0].volume = 0.5;
  $('#hadouken')[0].load();
  $('#hadouken')[0].play();
}

function play1up () {
  $('#1up')[0].volume = 0.32;
  $('#1up')[0].load();
  $('#1up')[0].play();
}







$("#kenstage").prop("volume", 0.15);




$(".bg").interactive_bg({
   strength: 25,
   scale: 1.05,
   animationSpeed: "100ms",
   contain: true,
   wrapContent: false
 });



});