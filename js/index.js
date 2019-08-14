$(function(){
	var mySwiper = new Swiper ('.swiper-container', {
    
    
    loop: true,
    autoplay : 5000,
    speed:1000,
    autoplayDisableOnInteraction : false,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    paginationClickable :true,
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    grabCursor : true,
	parallax:true,
  }) 
  
  var MarginWidth = $("#main_middle_bottom #main_middle_nav ul li").css("margin-right");
  MarginWidth = MarginWidth.replace("px","");
  var Width = $("#main_middle_bottom #main_middle_nav ul li").width()+MarginWidth*1;
  $("#main_middle_bottom #main_middle_nav ul").width(Width*($("#main_middle_bottom #main_middle_nav ul li").length+1)+"px");
  
  
  var Bottom = $("#main_middle_bottom #main_middle_nav ul li .main_middle_nav_font").css("bottom");
  Bottom = Bottom.replace("px","");
  $("#main_middle_bottom #main_middle_nav ul li").each(function(){
  	 $(this).on("mouseenter",function(){
  	     $(".main_middle_nav_font",this).animate({
  	     	bottom:"0px"
  	     },300)
  	 })
  	 $(this).on("mouseleave",function(){
  	 	 $(".main_middle_nav_font",this).animate({
  	     	bottom:Bottom
  	     },300)
  	 })
  })
  
  
  
  
  //点击事件
  $("#main_middle_nav ul li").each(function(key,info){
  	
  	$(this).on("click",function(){
  		
  		if($("#main_middle_top ul li").eq(key).is(".active")){
  			return;
  		}else{
  			$("#main_middle_top ul .active").animate({
	  			opacity:"0",
	  			filter:"alpha(opacity=0)"
	  		},600).removeClass("active");
	  		$("#main_middle_top ul li").eq(key).animate({
	  			opacity:"1",
	  			filter:"alpha(opacity=100)"
	  		},600).addClass("active");
  		}
  		
  	})
  })
  
  
  
  
  
  
	//header 三角图标
	var sjLeft;
	var initialLeft = $("#header_shade ul li a").eq(0).offset().left;
	var headLeft = $("#header_shade").offset().left;
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


var allWidth = 0;
function mainMiddleBtnMove(num){
	
	var MarginWidth = $("#main_middle_bottom #main_middle_nav ul li").css("margin-right");
	var MarginWidth = MarginWidth.replace("px","");
	var Width = $("#main_middle_bottom #main_middle_nav ul li").width()+MarginWidth*1;
	if(num == 1){
		allWidth += Width;
	}else if(num == 2){
		allWidth -= Width;
	}

	if(allWidth > 0){
		allWidth = 0;	
		return allWidth;
	}else if(allWidth < -Width*($("#main_middle_bottom #main_middle_nav ul li").length-4)){
		allWidth += Width;
		return allWidth;
	}
	$("#main_middle_bottom #main_middle_nav ul").animate({
		left : allWidth
	},500)
}




