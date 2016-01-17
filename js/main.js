$(document).ready(function(){
 
  $('.mobile-toggle').click(function(){
    if ($('.primary > ul').is(':hidden')){
      $('.primary > ul').show();
    }else{
      $('.primary > ul').hide();
    }
  });

  $('.primary ul li').click(function(){
    console.log($(this).find('>ul'));
    if ($(this).find('> ul').is(':hidden')){
      $(this).find('> ul').show();
    }else {
      $(this).find('> ul').hide();
    }
  });

});