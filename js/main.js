$(function(){
    // スクロールでfeatureの画像を固定
    var img_pos = $('.feature_img').offset().top;
    var img_pos_x = $('.feature_img').offset().left;
    var img_width = $('.feature_img').outerWidth();
    var img_height = $('.feature_img').outerHeight();
    var bottom_scroll = $('.scroll-point').offset().top;
    var bottom_scroll_height = $('.scroll-point').outerHeight(); 
    var bottom_scroll_position = bottom_scroll + bottom_scroll_height;
    if (window.matchMedia( '(min-width: 768px)' ).matches) {
        $(window).on('scroll',function(){
            var scrollTop = $(window).scrollTop();
            if(scrollTop > img_pos - 50 && scrollTop < bottom_scroll_position - img_height) {
                $('.feature_img').css({
                    'position':'fixed',
                    'top':'50px',
                    'left':img_pos_x,
                    'width':img_width,
                    'height':img_height,
                    'opacity':'1',
                });
            } else if(scrollTop >= bottom_scroll_position - img_height){
                $('.feature_img').css({
                    'position':'absolute',
                    'top':bottom_scroll_position - img_height + 50,
                    'left':img_pos_x,
                    'width':img_width,
                    'height':img_height,
                });
                
                
            }else {
                $('.feature_img').css({
                    'position':'static',
                });
            }
        });
    }

    // ページ内リンク（スムーズスクロール）
   $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
 });

    // 要素をふわっと表示させる（メニュー）
    $(window).scroll(function () {
        $('.menu-img').each(function () {
        const targetElement = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight + 150) {
            $(this).addClass('view');
        }
        });
    });

    // 要素をふわっと表示させる（ニューズ）
    $(window).scroll(function () {
        $('.news-item').each(function () {
        const targetElement = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight + 150) {
            $(this).addClass('view');
        }
        });
    });

    if (window.matchMedia( '(max-width: 768px)' ).matches) {
        var img_height = $('iframe').outerHeight();
        $('.profile_img_inner').insertAfter($('.profile-title'));
        $('.feature_img_inner').insertAfter($('.feature_title'));
        $('.map_inner').css('height',img_height + 30);
        $('').before($(''));
        $('').before($(''));

    }

});

//リサイズされたときの処理
$(window).resize(function() {
    // スクロールでfeatureの画像を固定
    var img_pos = $('.feature_img').offset().top;
    var img_pos_x = $('.feature_img').offset().left;
    var img_width = $('.feature_img').outerWidth();
    var img_height = $('.feature_img').outerHeight();
    var bottom_scroll = $('.scroll-point').offset().top;
    var bottom_scroll_height = $('.scroll-point').outerHeight(); 
    var bottom_scroll_position = bottom_scroll + bottom_scroll_height;
    if (window.matchMedia( '(min-width: 768px)' ).matches) {
        $(window).on('scroll',function(){
            var scrollTop = $(window).scrollTop();
            if(scrollTop > img_pos - 50 && scrollTop < bottom_scroll_position - img_height) {
                $('.feature_img').css({
                    'position':'fixed',
                    'top':'50px',
                    'left':img_pos_x,
                    'width':img_width,
                    'height':img_height,
                    'opacity':'1',
                });
            } else if(scrollTop >= bottom_scroll_position - img_height){
                $('.feature_img').css({
                    'position':'absolute',
                    'top':bottom_scroll_position - img_height + 50,
                    'left':img_pos_x,
                    'width':img_width,
                    'height':img_height,
                });
                
                
            }else {
                $('.feature_img').css({
                    'position':'static',
                });
            }
        });
    }
  });