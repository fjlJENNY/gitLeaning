define(function(require){
	// 加载对应的 register Nav 
	require("homepage/homepageNav")
	function _loadNav(navs){
		for(var i = 0 ;i <navs.length;i++){
			var item = navs[i].Lists;
			if(item && item instanceof Array){
				for(var j = 0 ;j< item.length ;j++){
					_requireNav(item[j]["Id"]);
				}
			}
		}
	}

	function _requireNav(name){
		switch(name){
			// 按需加载无用 
			case "UserManager":
				require("user/user_datatable");
				break;
			case "FinanceManager":
				require("finance/financeAnalysis");
				break;
			case "DepartmentManager":
				require("approval/department_approval")
				break;
			default:
				break;
		}
	}

	function requireRegistNav(navs){
		if(navs instanceof Array){
			_loadNav(navs);
		}else{
			console.error("获取 nav 失败");
		}
	}



	return requireRegistNav;
})