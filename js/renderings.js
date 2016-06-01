	//头部轮播图
	var myswiper = new Swiper(".swiper-container",{
		autoplay:5000,
		speed:600,
		loop:true,
		pagination:".pagination",
		calculateHeight: true, //自动计算高度，在响应式布局里特别有用
		paginationClickable:true
	});


	//模拟后台的数据
	var wtData = [{
		"src":"img/renderings/p1.jpg",
		"title":"标题111"
	},{
		"src":"img/renderings/p2.jpg",
		"title":"标题222"
	},{
		"src":"img/renderings/p3.jpg",
		"title":"标题333"
	},{
		"src":"img/renderings/p4.jpg",
		"title":"标题444"
	},{
		"src":"img/renderings/p5.jpg",
		"title":"标题555"
	},{
		"src":"img/renderings/p6.jpg",
		"title":"标题666"
	},{
		"src":"img/renderings/p7.jpg",
		"title":"标题777"
	},{
		"src":"img/renderings/p8.jpg",
		"title":"标题888"
	},{
		"src":"img/renderings/p9.jpg",
		"title":"标题999"
	}];

	//图片预加载
	var beginNum = 0;
	for(var k = 0,len = wtData.length; k < len; k++) {
		var img = new Image();
		img.src = wtData[k].src;
		img.onload = function() {
			beginNum++;
			if(beginNum == len) {
				// alert("图片都加载好了")
				waterfall();
			}
		}
		// var img = $("<img />");
		// img.attr("src",wtData[k].src);
		// img.load(function() {
		// 	beginNum++;
		// 	if(beginNum == len) {
		// 		// alert("图片都加载好了")
		// 		waterfall();
		// 	}
		// })
	}

	//瀑布流
	function waterfall() {
		start++;
		for(var j = 0; j < wtData.length; j++) {
			var newBlock = $("<div></div>");
			var newBlockContent = '<img src="'+wtData[j].src+'">'+
									'<p class="mask">'+
										'<span>'+wtData[j].title+'</span>'+
									'</p>';
			newBlock.html(newBlockContent);
			//找最小高度的li 
			var minList = $("#waterFall li").eq(0);
			for(var i = 0,len = $("#waterFall li").length;i < len; i++ ) {
				if(minList.height() > $("#waterFall li").eq(i).height() ) {
					minList = $("#waterFall li").eq(i);
				}
			}
			minList.append(newBlock);
		}
	}


	var total = 3;
	var start = 0;
	$(window).on("scroll",function() {
		if($("#footer").offset().top < $(document).scrollTop() + $(window).height()) {
			// alert("内容区到底了")
			// console.log("内容区到底了")
			if(start == total) return;
			waterfall();
		}
	})