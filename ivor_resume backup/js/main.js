
// button按下錨點滑動進入

    $(function() {
        $('#ivorb').click(function(){
          $('html,body').animate({scrollTop: $('#ivor').offset().top},900) ;
        });

        $('#worksb').click(function(){
          $('html,body').animate({scrollTop: $('#works').offset().top},900) ;
        });

        $('#profilesb').click(function(){
          $('html,body').animate({scrollTop: $('#profiles').offset().top},900) ;
        });

        $('#contactb').click(function(){
          $('html,body').animate({scrollTop: $('#contact').offset().top},900);
        });

        });


// 技能bar捲動

    $(function() {
      $(window).scroll(function() {

        if($(window).scrollTop() >= $('.skill-wrap').offset().top){
          $('.bar1-color').delay(1000).css('width', '49vw');
          $('.bar2-color').delay(1000).css('width', '21vw');
          $('.bar3-color').delay(1000).css('width', '38vw');
          $('.bar4-color').delay(1000).css('width', '38vw');
          $('.bar5-color').delay(1000).css('width', '45vw');
        }
      });

  });
});
