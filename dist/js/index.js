'use strict';

//悬浮置顶
var apTop = $('.ap-right').offset().top;
var apTopDiv = '<div class="apTopDiv"></div>';
$('.f').prepend(apTopDiv);

$(document).scroll(function () {
  if ($(this).scrollTop() > apTop) {
    $('.ap-right').css({ 'position': 'fixed', 'top': '0', 'z-index': '233' });
    $('.apTopDiv').show();
  } else {
    $('.ap-right').css('position', 'relative');
    $('.apTopDiv').hide();
  }
});

countDown();

function countDown(n) {
  var count = 0;
  var midTime = 43200;
  count = setInterval(function () {
    midTime--;
    var h = parseInt(midTime / 3600),
        m = parseInt((midTime - h * 3600) / 60),
        s = parseInt(midTime - h * 3600 - m * 60);
    if (h < 10) {
      h = '0' + h;
    }
    if (m < 10) {
      m = '0' + m;
    }
    if (s < 10) {
      s = '0' + s;
    }
    $('.timew2 .h').text(h + ":");
    $('.timew2 .m').text(m + ":");
    $('.timew2 .s').text(s);
  }, 1000);
}