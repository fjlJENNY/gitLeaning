define(function(require){
	var navmanager = require("../base/navmanager");
	console.log(navmanager);
	var requireRegistNav = require("accordion/requireRegistNav");
	new requireRegistNav(navmanager);
	var accordion = function(setting){
		this.setting = setting;
		this.initAccordion();
	}

	accordion.prototype.initAccordion = function(){
		var $parent = this.setting.$parent;
		$parent.empty().append(this.initDom());
	}

	accordion.prototype.initDom = function(){
		return '<ul>'+this.initMenuDom(navmanager)+'</ul>';
	}

	accordion.prototype.initMenuDom = function(menu){
		var uls = "";
		for(var i = 0;i<menu.length;i++){
			uls+=
			'<li class="item" id="'+menu[i].Id+'">'+
				'<div class="title">'+
					'<span><a href="javascript:void(0);">'+menu[i].Name+'</a></span>'+
				'</div>'+
				'<div class="content">'+
					'<ul>';
			uls += this.initListDom(menu[i].Lists);
			uls +=	'</ul>'+
				'</div>'+
			'</li>';
		}
		return uls;
	}

	accordion.prototype.initListDom = function(list){
		var lis = "";
		for(var i = 0;i<list.length;i++){
			if(!list[i].groupcode || !list[i].Id || !list[i].Name){
				console.error("三参数其中某项未定义",list[i].groupcode,list[i].Id,list[i].Name);
			}
			lis += '<li><a data-rolecode="'+list[i].groupcode+'" href="#'+ list[i].Id +'">'+list[i].Name+'</a></li>';
		}
		return lis;
	}

	return accordion;
})