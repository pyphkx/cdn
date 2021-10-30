//侧栏滑动
jQuery(document).ready(function($) {
    if (!isie6()) {
        var rollStart = $('#qui-tool-start'),
        rollSet = $('.widget,#widget-populars'); 
        rollStart.before('<div class="qui-scroll"></div>');
        var offset = rollStart.offset(),
        objWindow = $(window),
        htmls= '<div class="mouseBox"><div class="mouse"></div><p class="mouse_p">鼠标下滑</p></div>',
        rollBox = rollStart.prev();
        if (objWindow.width() > 960) {
            objWindow.scroll(function() {
                if (objWindow.scrollTop() > offset.top) {
                    if (rollBox.html(null)) {
                        rollSet.clone().prependTo('.qui-scroll')
                        $(".qui-scroll").append(htmls)
                    }
                    rollBox.show().stop().animate({
                        top: 90,
                        paddingTop: 15,
                        overflow:'auto',
                        marginLeft:0
                    },
                    200)
                } else {
                    rollBox.hide().stop().animate({
                        top: 0
                    },
                    200)
                }
            })
        }
    }
    function isie6() {
        if ($.browser.msie) {
            if ($.browser.version == "6.0") return true;
        }
        return false;
    }
});

$(this).scroll(function(){
    if( $(window).height() + $(window).scrollTop() >= $(document).height() ){ 
          $(".qui-scroll").animate({"height":"67vh"},1000)
     }
});
 
