/*
	依赖项
	webix.js
*/
function show_tip(message) {
    var doc = $(".webix_message_area");
    if (doc.children(".webix_info.webix_info").length <= 3 || doc.children(".webix_info.webix_info.hiddent").length >= 0) { 
    	webix.message(message);  	
   	}
}

