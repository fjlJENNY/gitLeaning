/*部门审核*/
define(function(require){
	var role = require("rolemanager");
	var registNav = require("base/registerNavManager");
	var departmentApproval = require("text!view/department/departmentApproval.html");

	require("modal/modal_department_approval");
	var registModal = require("base/registerModalManager");
	var departmentApprovalModal = registModal.GetModal("departmentApprovalModal");
	

	// UserManager  是 标注的节点
	registNav.RegisterNav("DepartmentApproval",function(config){
		$(".content_container").empty().append($(departmentApprovalModal).find("#departmentApproval_datagrid"));
		
		var f_modal = new departmentApprovalModal({
			datagridSelector:"#departmentApproval_datagrid"
		});
		// 按钮事件注册
		var toolbar = [{
				iconCls:"icon-edit",
				plain:true,
				text:"编辑",
				defaultShow:true,
				handler:function(){
					var row = $("#departmentApproval_datagrid").datagrid("getSelected");
					var index = $("#departmentApproval_datagrid").datagrid("getRowIndex",row);
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
					var row = $("#departmentApproval_datagrid").datagrid("getSelected");
					var index = $("#departmentApproval_datagrid").datagrid("getRowIndex",row);
					if(row){
						$("#departmentApproval_datagrid").datagrid("deleteRow",index);
					}else{
						$.messager.alert("Info","请选择某一项");
					}
				}
			}];
		var afterRoleToolbar = role.hasButtonRole(toolbar);
		$("#departmentApproval_datagrid").datagrid({
			title:"财务分析",
			columns:[
				[
					
					{
						field:"departmentId",title:"部门编号",width:120
					},
					{
						field:"password",title:"密码",width:60,
					},
					{
						field:"group",title:"部门组别",width:80
					},
					{
						field:"name",title:"部门名称",width:100
					},
					{
						field:"phone",title:"手机",width:60,
					},
					{
						field:"email",title:"邮箱",width:80,
					},
					{
						field:"remark",title:"备注",width:200
					}
				]
			],
			data:window.test_data.department,
			toolbar:afterRoleToolbar.length ? afterRoleToolbar : null,
			
		});
	})
})