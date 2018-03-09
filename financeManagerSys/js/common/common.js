/*
	依赖项
	webix.js
*/
define(function(require){
	var tipMessage = require("text!view/tipMessage/tipMessage")
	function show_tip(message) {
	    var doc = $(".webix_message_area");
	    if (doc.children(".webix_info.webix_info").length <= 3 || doc.children(".webix_info.webix_info.hiddent").length >= 0) { 
	    	webix.message(message);  	
	   	}
	}

	function _boxStructure(config){
		var messageArea = $(body).find(".message_area");
		if(!messageArea.length){
			$(body).append(tipMessage);
			messageArea = $(body).find(".message_area");
		}
		var className = "tip " + config.type
		var $box = '<div class="'+className+'">'+config.message+'</div>';
		if(messageArea.find(".tip").length){
			$box.insertBefore(messageArea.find(".tip").eq(0));
		}else{
			messageArea.append($box);
		}
	}

	function _createBox(config){
		// 生成 唯一辨识码
		var box = _boxStructure(config);
		box.onClick = function(e){
			e = e || window.event;
			var source = e.target || e.srcElement;
			if(source.className.indexOf("tip")!=-1){

			}
			e.cancelBubble = true;
		}
	}
	// success 提示
	function show_message(message){
		_createBox({type:"success",message:message});
	}
	return {
		show_tip:show_tip,
		show_message:show_message
	}
});