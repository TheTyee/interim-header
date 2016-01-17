$(document).ready(function(){
  $('.mobile-toggle').click(function(){
    if ($('.primary > ul').is(':hidden')){
      $('.primary > ul').show();
    }else{
      $('.primary > ul').hide();
    }
  });

});