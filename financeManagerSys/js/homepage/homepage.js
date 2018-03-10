define(function(require){
	var UUID = require("UUID");

	var registNav = require("base/registerNavManager");
	var uuid = UUID.generate();

	var Accordion = require("../accordion/accordion");

	var accordion = new Accordion({
		$parent:$("#finance_wrapper").find(".finance_menu")
	});

	$("#finance_wrapper").find(".user .ui.dropdown").dropdown({});
	// $("#finance_wrapper").find(".finance_menu .ui.accordion").accordion({});


	$("#finance_wrapper").find(".finance_menu").click(function(){
		console.log($(this).find(".item>:target"));
	});

	//
	$("#finance_wrapper").find(".finance_menu .item .title").click(function(event){
		event = event||window.event;
		if(!$(this).hasClass("open")){
			$(this).parent().parent().find(".open").removeClass("open").next(".content").slideUp(0);
			$(this).addClass("open");
			$(this).next(".content").slideDown(200);
		}else{
			$(this).addClass("open");
			$(this).next(".content").slideDown(200);
		}
		event.preventDefault();
		event.stopPropagation();
		return false;
	});
	// 默认打开 nav 第一项
	$("#finance_wrapper").find(".finance_menu .item .title").eq(0).click();

	// 打开 nav 中 list
	$("#finance_wrapper").find(".finance_menu .item .content").click(function(event){
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

})
