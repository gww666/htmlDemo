// JavaScript Document
$(document).ready(function (){
	//导航栏动画
	var $nav_li = $("#nav li");//获取li元素
	$nav_li.hover(function (){
		//if($(this).css() != 0) {
		$(this).addClass("li_active li_active_bg");
		$(this).next().addClass("li_active");
		//}
	}, function() {
		//第3个元素（人才培训）默认是选中的，不执行去除class操作
		if($(this).index() != 2 && $(this).index() != 1 && $(this).index() != 3) {
			$(this).removeClass("li_active li_active_bg");
			$(this).next().removeClass("li_active");
		}
		//第二个元素之清除自身背景颜色的class，li_active不清除
		if($(this).index() == 1 || $(this).index() == 3) {
			$(this).removeClass("li_active_bg");
			if ($(this).index() != 1) {
				$(this).next().removeClass("li_active");
			} else {
				$(this).removeClass("li_active");
			}
		}
		
	});
	
});