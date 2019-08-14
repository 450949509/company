$(function(){
	document.body.parentElement.style.fontSize=window.innerWidth/100+'px';
	
	
	//滚动事件
  $(window).scroll(function(){
  	
     if($(window).scrollTop()==0){
     	$("#header").css("background","rgba(1,34,87,1)");
     }else{
     	$("#header").css("background","rgba(1,34,87,0.7)");
     }
  })
})
