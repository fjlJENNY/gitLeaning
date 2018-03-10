define(function(require){
	var role = require("rolemanager");
	var registNav = require("base/registerNavManager");
	var userDatatable = require("text!view/user/user_datatable.html");
	// UserManager  是 标注的节点
	registNav.RegisterNav("UserManager",function(config){
		$(".content_container").empty().append(userDatatable);
		// 按钮事件注册
		var toolbar = [{
				iconCls:"icon-edit",
				plain:true,
				text:"编辑",
				defaultShow:true,
				handler:function(){
					alert("edit");
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
		$("#userInfo").datagrid({
			title:"用户列表",
			columns:[
				[
					{field:"SN",title:"序号",width:40,formatter:function(value,row,index){
						return ++index;
					}},
					{
						field:"userName",title:"用户名",width:80
					},
					{
						field:"Name",title:"姓名",width:120,
					},
					{
						field:"Phone",title:"电话",width:130,
					},
					{
						field:"Age",title:"年龄",width:40,
					},
					{
						field:"Gender",title:"性别",width:40,
					}
				]
			],
			data:window.test_data.user,
			toolbar:afterRoleToolbar.length ? afterRoleToolbar : null
		});
	})
	
})
