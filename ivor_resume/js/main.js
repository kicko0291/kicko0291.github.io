
// button按下錨點滑動進入

    $(function() {
        $('#ivorb').click(function(){
          $('html,body').animate({scrollTop: $('#ivor').offset().top},500) ;
        });

        $('#worksb').click(function(){
          $('html,body').animate({scrollTop: $('#works').offset().top},500) ;
        });

        $('#profilesb').click(function(){
          $('html,body').animate({scrollTop: $('#profiles').offset().top},500) ;
        });

        $('#contactb').click(function(){
          $('html,body').animate({scrollTop: $('#contact').offset().top},500);
        });

        //技能bar捲動
        $(window).scroll(function() {
          if($(window).scrollTop() > ($('#profiles').offset().top - 100)){
            $('.bar1-color').delay(1000).css('width', '49vw');
            $('.bar2-color').delay(1000).css('width', '21vw');
            $('.bar3-color').delay(1000).css('width', '38vw');
            $('.bar4-color').delay(1000).css('width', '38vw');
            $('.bar5-color').delay(1000).css('width', '45vw');
          }
        });

    });
