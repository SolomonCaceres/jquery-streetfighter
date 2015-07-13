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
    playhadouken();

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
  







$(".ryu").mouseup(function(){
$(".ryu-ready").show();
$('.ryu-throwing').hide();


});







function playhadouken () {
  $('#hadouken')[0].volume = 0.5;
  $('#hadouken')[0].load();
  $('#hadouken')[0].play();
}


$("#kenstage").prop("volume", 0.3);


});