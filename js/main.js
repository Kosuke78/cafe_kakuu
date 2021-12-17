$(function(){
    // スクロールでfeatureの画像を固定
    var img_pos = $('.feature_img').offset().top;
    var img_pos_x = $('.feature_img').offset().left;
    var img_width = $('.feature_img').outerWidth();
    var img_height = $('.feature_img').outerHeight();
    var bottom_scroll = $('.scroll-point').offset().top;
    var bottom_scroll_height = $('.scroll-point').outerHeight(); 
    var bottom_scroll_position = bottom_scroll + bottom_scroll_height;
    console.log(img_height);
    console.log(bottom_scroll);
    console.log(bottom_scroll_height);
    console.log(bottom_scroll_position);
    console.log(bottom_scroll_position - img_height);

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
            console.log(scrollTop);
            $('.feature_img').css({
                'position':'absolute',
                'top':bottom_scroll_position - img_height + 50,
            });
            
            
        }else {
            $('.feature_img').css({
                'position':'static',
            });
        }
    });

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
});