define(function(require){
	var UUID = require("UUID");

	var registNav = require("base/registerNavManager");
	var uuid = UUID.generate();

	var Accordion = require("../accordion/accordion");

	var accordion = new Accordion({
		$parent:$("#finance_wrapper").find(".finance_menu")
	});

	// $("#finance_wrapper").find(".user .ui.dropdown").dropdown({});

	// $("#finance_wrapper").find(".finance_menu").click(function(){
	// 	console.log($(this).find(".item>:target"));
	// });

	//逻辑
	$("#finance_wrapper").find(".finance_menu .item>.title").click(function(event){
		event = event||window.event;
		var parentId = $(this).parent().attr("id");
		
		if(!$(this).hasClass("open")){
			$(this).parent().parent().find(".open").removeClass("open").next(".content").slideUp(0);
			$(this).addClass("open");
			$(this).next(".content").slideDown(200);
		}else{
			$(this).addClass("open");
			$(this).next(".content").slideDown(200);
		}
		if(parentId !== "HomePage"){
			event.preventDefault();
			event.stopPropagation();
			return false;
		}
			
	});
	

	// 打开 nav 中 list
	$("#finance_wrapper").find(".finance_menu .item>.content").click(function(event){
		event = event||window.event;
		var target = event.target;
		console.log(target);
		var current = target.getAttribute("href").substr(1);
		var func = registNav.GetNav(current);
		if(typeof func === "function"){
			func({
				"ContentParent":$(".content_container")
			})
		}
		event.stopPropagation();
	});
	$("#HomePage").click(function(event){
		event = event||window.event;
		var func = registNav.GetNav('HomePage');
		if(typeof func === "function"){
			func({
				"ContentParent":$(".content_container")
			})
		}
	});
	// 切换滑动框
	// $("#finance_wrapper .menu-area").click(function(){
	// 	$("#finance_wrapper .finance_menu").toggle()
	// })
	// 默认打开 nav 第一项
	$("#finance_wrapper").find(".finance_menu .item").eq(0).click();

	$("#finance_wrapper").show();
})
