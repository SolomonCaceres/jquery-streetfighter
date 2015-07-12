$(document).ready(function() {


$('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
	$('.ryu-ready').show();
  });



 $('.ryu').mouseleave(function() {
    $('.ryu-ready').hide();
	$('.ryu-still').show();
  });



$('.ryu').mousedown(function() {
    // play hadouken sound
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show().animate(
  {'left': '1100px'},
  500,
  function() {
    $(this).hide();
    $(this).css('left', '580px');
  }
);
  })







$(".ryu").mouseup(function(){
$(".ryu-ready").show();
$('.ryu-throwing').hide();

});








});