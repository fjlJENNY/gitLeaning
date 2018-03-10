define(function(require){
	var role = require("rolemanager");
	var registNav = require("base/registerNavManager");
	var financeAnalysis = require("text!view/finance/financeAnalysis.html");

	require("modal/modal_finance_Analysis");
	var registModal = require("base/registerModalManager");
	var FinanceAnalysisModal = registModal.GetModal("FinanceAnalysis");
	var f_modal = new FinanceAnalysisModal();

	// UserManager  是 标注的节点
	registNav.RegisterNav("FinanceAnalysis",function(config){
		$(".content_container").empty().append(financeAnalysis);
		// 按钮事件注册
		var toolbar = [{
				iconCls:"icon-edit",
				plain:true,
				text:"编辑",
				defaultShow:true,
				handler:function(){
					f_modal.content.panel().panel("open");
				}
			},{
				iconCls:"icon-add",
				plain:true,
				text:"新增",
				defaultShow:true,
				handler:function(){
					alert("add");
				}
			}];
		var afterRoleToolbar = role.hasButtonRole(toolbar);
		$("#financeAnalysis").datagrid({
			title:"财务分析",
			columns:[
				[
					{field:"SN",title:"序号",width:40,formatter:function(value,row,index){
						return ++index;
					}},
					{
						field:"operTime",title:"操作时间",width:120
					},
					{
						field:"type",title:"类型",width:60,
					},
					{
						field:"revenue",title:"收入",width:80,
					},
					{
						field:"expenses",title:"支出",width:80,
					},
					{
						field:"financeDetail",title:"明细",width:200,
					},
					{
						field:"dealer",title:"交易方",width:100,
					},
					{
						field:"exesType",title:"费用类型",width:80
					}
				]
			],
			data:window.test_data.financeAnalysis,
			toolbar:afterRoleToolbar.length ? afterRoleToolbar : null
		});
	})
	
})
