// 定义三种角色 user root superRoot
// 每个按钮有一个 rolecode “company_123” 按钮rolecode 可以一样
// 有组的概念 : 角色下面是组 ， 一组 包含几个 rolecode , (groupcode)是固定的  groupcode 主要是配置
// 角色 是 通过 配置 groupcode 下 的 rolecode 形成的 
/*
	"角色A"{
		"company":[
			"company_123"
		]
	}
	"角色A" 是 角色 , company 是 groupcode   company_123 是 rolecode
*/
define(function(){
	//var roles = [];
	var roles = [{
		"company":[
			"company_1",
			"company_2"
		],
		"finance":false
	}]
	rolemanage = {};

	rolemanage.getRoles = function(){
		return roles;
	}

	rolemanage.initRoles = function(rolesByUrl){
		roles = rolesByUrl;
	}
	/*
		@param groupcode 只有 groupcode 这个参数, 判断group 权限
		@param rolecode  判断 rolecode 权限
	*/
	rolemanage.hasRole = function(groupcode,rolecode){
		var roles = this.getRoles();
		if(groupcode && rolecode){
			var groups = roles[groupcode];
			if(!groups){
				return false;
			}else if(groups.indexOf(rolecode) === -1){
				return false;
			}else{
				return true;
			}
		}else if(groupcode){
			var groups = roles[groupcode];
			if(!groups){
				return false;
			}else {
				return true;
			}
		}
		return false;
	}
	// buttons 可能是 obj || array
	rolemanage.hasButtonRole = function(buttons){
		if(buttons instanceof Array){
			var arr = [];
			for(var i = 0 ;i<buttons.length;i++){
				if(buttons[i].groupcode && buttons[i].rolecode && this.hasRole(buttons[i].groupcode,buttons[i].rolecode)){
					arr.push(buttons[i]);
				}
			}
			return arr;
		}else if(buttons instanceof Object){
			var obj = {};
			if(buttons["groupcode"] && buttons["rolecode"] && this.hasRole(buttons["groupcode"],buttons["rolecode"])){
				obj = buttons;
			}
			return obj;
		}else{
			return null;
		}
	}

	return rolemanage;
});