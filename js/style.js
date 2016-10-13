$(document).ready(function(){


	$('.li1').hover(function(){
		$('.li1 span').css({
			'background':'url(images/peo1.png) no-repeat',
		});
		$('.li2 span').css({
			'background':'url(images/peo2.png) no-repeat',
		});
	});
	$('.li2').hover(function(){
		$('.li1 span').css({
			'background':'url(images/peo11.png) no-repeat',
		});
		$('.li2 span').css({
			'background':'url(images/peo22.png) no-repeat',
		});
	});



$('.picMarquee-left .bd ul li .pic img').hover(function(){
	var img=$(this).attr('src');
	$('.product-block img').attr('src',img);
});

  $(".goback").click(function() {
      $("html,body").animate({scrollTop:0}, 500);
  }); 


var height=$('.list-box-all').height();
$('.news-list').css({
	height:height,
})



})