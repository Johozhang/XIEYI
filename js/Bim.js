var pos = [];
			$(".part").each(function(){
				pos.push($(this).position().top);
			})
			pos.push(0);//将天台的scrollTop也保存
			$("#rightBar li").on("click",function(){
				var index = $(this).index();
				$("html,body").animate({
					scrollTop:pos[index]
					})
			})
			
			$(window).on("scroll",function(){
				if($(document).scrollTop() > 400){
					$("#rightBar").sliderDown();
				}
				f($(document).scrollTop() < 400){
					$("#rightBar").sliderUp();
				}
			})