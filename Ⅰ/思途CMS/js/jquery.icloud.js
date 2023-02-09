/*
*Ê×Ò³banner ÔÆ¶äÒÆ¶¯
*Author:jonedoo
*/
(function($){
	$.fn.iCloud = function(options){
		var defaults ={
			speed :2000,
			x:"center",
			cloud:"icloud",
			y:200
		}
		
		var options = $.extend(defaults,options);
		
		var innerWidth = $(this).width();

		var innerHeight = $(this).height();

		var cloudWith = $("#"+options.cloud).width();
		
		if(options.x =='center'){
			var pX =innerWidth/2;
		}else if(options.x =='right'){
			var pX =innerWidth-100;
		}else if(options.x =='left'){
			var pX = 0;
		}else{
			var pX =x;
		}
		
		if(options.y =='center'){
			var pY =innerHeight/2;
		}else if(options.y =='top'){
			var pY =0;
		}else if(options.y =='bottom'){
			var pY = innerHeight;
		}else{		
			var pY =options.y;
		}
		//alert(options.cloud);
		$("#"+options.cloud).css({"margin-left":pX+"px","margin-top":pY+"px","display":""});

		var start =0;
		var moveCloud = function(){
			
			if(start  == 0){
				$("#"+options.cloud).animate({"margin-left":"0px"},options.speed,function(){
					start = 1;
					moveCloud();
				});
			}else{
				$("#"+options.cloud).animate({"margin-left":(innerWidth-cloudWith)+"px"},options.speed,function(){
					start = 0;
					moveCloud();
				});
			}
			

		}
		
		moveCloud();
		

	}
})(jQuery);