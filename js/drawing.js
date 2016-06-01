new Swiper(".swiper-container",{
		speed:400, //控制速度，滑动时间
		loop:true,// 循环
		autoplay:5000, //每间隔时间
		autoplayDisableOnInteraction:false,//当设置为false时，用户操作之后（swipes,arrow以及pagination 点击）autoplay不会被禁掉，用户操作之后每次都会重新启动autoplay。
		mode:"horizontal",//控制模式，竖直
		pagination: ".pagination", //分页器
		paginationClickable:true,  //小圆点是否可点
	});