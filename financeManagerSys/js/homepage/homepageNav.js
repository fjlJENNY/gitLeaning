define(function(require){
	var registNav = require("base/registerNavManager");
	var homepage = require("text!view/finance/homepage.html");

	
	// UserManager  是 标注的节点
	registNav.RegisterNav("HomePage",function(config){
		$(".content_container").empty().append($(homepage).find(".welcome"));
	})
	
})
