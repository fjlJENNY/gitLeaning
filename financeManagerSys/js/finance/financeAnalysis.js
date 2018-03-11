define(function(require){
	var role = require("rolemanager");
	var registNav = require("base/registerNavManager");
	var financeAnalysis = require("text!view/finance/financeAnalysis.html");

	require("modal/modal_finance_Analysis");
	var registModal = require("base/registerModalManager");
	var FinanceAnalysisModal = registModal.GetModal("FinanceAnalysis");
	

	// UserManager  是 标注的节点
	registNav.RegisterNav("FinanceAnalysis",function(config){
		$(".content_container").empty().append($(financeAnalysis).find("#financeAnalysis"));
		
		var f_modal = new FinanceAnalysisModal({
			datagridSelector:"#financeAnalysis"
		});
		// 按钮事件注册
		var toolbar = [{
				iconCls:"icon-edit",
				plain:true,
				text:"编辑",
				defaultShow:true,
				handler:function(){
					var row = $("#financeAnalysis").datagrid("getSelected");
					var index = $("#financeAnalysis").datagrid("getRowIndex",row);
					if(row){
						f_modal.actionType = "edit";
						f_modal.rowData = row;
						f_modal.indexData = index;
						f_modal.content.dialog("open");
						f_modal.content.dialog("setTitle","财务分析编辑");
					}else{
						$.messager.alert("Info","请选择某一项");
					}
				}
			},{
				iconCls:"icon-add",
				plain:true,
				text:"新增",
				defaultShow:true,
				handler:function(){
					f_modal.actionType = "add";
					f_modal.content.dialog("open");
					f_modal.content.dialog("setTitle","财务分析添加");
				}
			},{
				iconCls:"icon-remove",
				plain:true,
				text:"删除",
				defaultShow:true,
				handler:function(){
					var row = $("#financeAnalysis").datagrid("getSelected");
					var index = $("#financeAnalysis").datagrid("getRowIndex",row);
					if(row){
						$("#financeAnalysis").datagrid("deleteRow",index);
					}else{
						$.messager.alert("Info","请选择某一项");
					}
				}
			}];
		var afterRoleToolbar = role.hasButtonRole(toolbar);
		$("#financeAnalysis").datagrid({
			title:"财务分析",
			columns:[
				[
					// {field:"SN",title:"序号",width:40,formatter:function(value,row,index){
					// 	return ++index;
					// }},
					{
						field:"operTime",title:"操作时间",width:120
					},
					{
						field:"type",title:"类型",width:60,
					},
					{
						field:"revenue",title:"收入",width:80,formatter:function(value,row,index){
							if(!row.revenue)							{
								return "";
							}
							return row.revenue;
						}
					},
					{
						field:"expenses",title:"支出",width:80,formatter:function(value,row,index){
							if(!row.expenses)							{
								return "";
							}
							return row.expenses;
						}
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
			toolbar:afterRoleToolbar.length ? afterRoleToolbar : null,
			
		});
	})
	
})
