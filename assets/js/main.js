$(document).ready(function() {


// Add jQuery here

$('.stamp1').click(function(event) {
  $('.stamp1').addClass('displayhover');
  $('.stamp2').removeClass('displayhover');
  $('.stamp3').removeClass('displayhover');
});


$('.stamp2').click(function(event) {
  $('.stamp2').addClass('displayhover');
  $('.stamp1').removeClass('displayhover');
  $('.stamp3').removeClass('displayhover');
});


$('.stamp3').click(function(event) {
  $('.stamp3').addClass('displayhover');
  $('.stamp2').removeClass('displayhover');
  $('.stamp1').removeClass('displayhover');
});


$('.lightbox').click(function(event){
  $(this).toggleClass('active');
});








  });
