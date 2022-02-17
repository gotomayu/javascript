//カルーセル記述
$('.carousel').slick({
   dots: true,
   arrows: true,
   infinite: true,
   speed: 300,
   slideToShow: 1,
   adaptiveheight: true,
   autoplay: true,
   autoplaySpeed: 3000
});

//モダール記述
$('.show1,.show2,.show3,.show4').modaal();

$('#share1').click(() => {
   alert('イタリアンのレシピをシェアしました♪');
   $('.show1').modaal('close');
});
$('#share2').click(() => {
   alert('フレンチのレシピをシェアしました♪');
   $('.show2').modaal('close');
});
$('#share3').click(() => {
   alert('ダイエットのレシピをシェアしました♪');
   $('.show3').modaal('close');
});
$('#share4').click(() => {
   alert('エスニックのレシピをシェアしました♪');
   $('.show4').modaal('close');
});
 