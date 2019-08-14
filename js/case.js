$(function(){
	//header 三角图标
	var sjLeft;
	var initialLeft = $("#header_shade ul li a").eq(1).offset().left;
	var headLeft = $("#header_shade").offset().left;
	$("#sj").css("left",initialLeft-headLeft)
  	$("#header_shade ul li a").each(function(key,info){
  		$(this).on("mouseenter",function(){
  			
  			sjLeft = $(this).offset().left;
  			if(key==4){
	  			sjLeft+=10
	  		}
  			$("#sj").animate({
  				left:sjLeft-headLeft
  			},500)
  		})
  		
  	})
})
