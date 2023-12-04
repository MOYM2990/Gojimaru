// スライドショー
$('.header_slider').slick({
    autoplay: true, // 自動再生
    autoplaySpeed: 3000,
    fade: true, // スライドをフェードイン・フェードアウト
    cssEase: 'linear',// アニメーション
    speed: 600, // フェードアニメーションの速度設定
    arrows: false, // 矢印
    dots: false, // インジケーター
});

// ハンバーガーメニュー
$('.header_menubutton').click(()=>{  
  $('.header_menubutton').toggleClass('menu_active');
  let windowSize=$(window).width();
  if(windowSize <= 768) {
      $('.header_nav').toggleClass('header_nav_action');
  } else {
    $('.main_nav').toggleClass('main_nav_action');
  }
});

// もっと見る
/* ここには、表示するリストの数を指定します。 */
let moreNum = 4;

/* 表示するリストの数以降のリストを隠しておきます。 */
$('.topics_contain:nth-child(n + ' + (moreNum + 1) + ')').addClass('is-hidden');

/* 全てのリストを表示したら「もっとみる」ボタンをフェードアウトします。 */
$('.topics_button').on('click', function() {
  $('.topics_contain.is-hidden').slice(0, moreNum).removeClass('is-hidden');
  if ($('.topics_contain.is-hidden').length == 0) {
    $('.topics_button').fadeOut();
  } 
});

/* リストの数が、表示するリストの数以下だった場合、「もっとみる」ボタンを非表示にします。 */
$(function() {
  var list = $(".topics_box li").length;  
    if (list < moreNum) {
      $('.topics_button').addClass('is-hidden');
  }
});

// スクロール時にメニューを出し入れ＆背景を暗くする
const scrollMenuAnime = () => {

      $('.header_slider_dark').each(function () {
          let scroll = $(window).scrollTop();//現在のスクロール値
          if(scroll >= 600) {
                if(!$(this).hasClass('dark_opacity')) {
                    $(this).addClass('dark_opacity');
                }
          } else {
              $(this).removeClass('dark_opacity');
          }
      });
      
      let windowSize=$(window).width();
      $('.header_small_menu').each(function () {
        let scroll = $(window).scrollTop();//現在のスクロール値
        // メニューの出し入れ
        if(windowSize > 768 && scroll > 700) {
              if(!$(this).hasClass('menu_position')) {
                  $(this).addClass('menu_position');
              }
            } else {
                $(this).removeClass('menu_position');
        }
      });

      $('.main_nav').each(function () {
        let scroll = $(window).scrollTop();//現在のスクロール値
        // メニューの出し入れ
        if(windowSize > 768 && scroll < 700) {
          if($(this).hasClass('main_nav_action')) {
              $(this).removeClass('main_nav_action');
          }
          // ボタンも元に戻す
          if($('.header_menubutton').hasClass('menu_active')) {
            $('.header_menubutton').removeClass('menu_active');
          }
        }
      });

}

$(window).scroll(()=>{
  scrollMenuAnime();
});

$(window).on('load',()=>{
  scrollMenuAnime();
});