define(function(require){
	var rolemanager = require("./rolemanager");
	var defaultShow = function(groupcode){
		if(rolemanager.hasRole(groupcode)){
			return true;
		}else{
			return false;
		}
	}

	var navInfo = [
	{
		Id:"CompanyManager",
		Name:"公司管理",
		Icon:"",
		Lists:[{
			Id:"UserManager",
			Name:"公司人员",
			groupcode:"comany",
			Show:function(){
				return true;
			}
		}]
	},{
		Id:"FinanceManager",
		Name:"财务管理",
		Icon:"",
		Lists:[{
			Id:"FinanceReport",
			Name:"财务账单",
			groupcode:"finance",
			Show:function(){
				return true//defaultShow(this.groupcode);
			}
		},{
			Id:"FinanceAnalysis",
			Name:"财务分析",
			groupcode:"finance",
			Show:true
		}]
	},{
		Id:"DepartmentManager",
		Name:"部门管理",
		Icon:"",
		Lists:[{
			Id:"DepartmentApproval",
			Name:"部门管理",
			groupcode:"depart",
			Show:true
		}]
	}
	]

	var getNavInfo = function(){
		var navArr = [];
		for(var i = 0;i<navInfo.length;i++){
			var item = navInfo[i].Lists;
			var navObj = [];
			var isShowNav = false;
			if(item){
				for(var j = 0;j<item.length;j++){
					if(typeof item[j].Show == "boolean"){
						if(item[j].Show){
							isShowNav = true;
							navObj.push(item[j]);
						}
					}
				}
			}
			if(isShowNav){
				navInfo[i].Lists = navObj;
				navArr.push(navInfo[i]);
			}
		}
		return navArr;
	}

	return getNavInfo();
});