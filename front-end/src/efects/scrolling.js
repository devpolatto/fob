$(function() {
	$(window).scroll(function() {
        var scroll = $(document).scrollTop();
        if(scroll > 200) {
          $('nav').addClass('shrink');
      }
      else {
      $('nav').removeClass('shrink');
      }
    });
    console.log($(window).scrollTop());
})