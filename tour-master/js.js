$(document).ready(function() {


   $('.row,.close').on('click', function() {
$('.overlay').animate({
    opacity:'toggle',
    height:'toggle',
    position: 'fixed'
},2000)

 $('.modal').animate(
      {
      opacity:'toggle',
      height:'toggle',
      position: 'fixed'
  },2000);
   
   });




});