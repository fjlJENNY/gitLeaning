/*问题：使用 validedatebox 声明的 valid 为什么不上色（和组件的）  配置err:err*/
define(function(require){
	var registModal = require("base/registerModalManager");
	var departmentApproval = require("text!view/department/departmentApproval.html");
	var Event = require("common/extend");
	function departmentApprovalModal(setting){
		this.setting = setting;
		$("#finance_wrapper").append($(departmentApproval).find(".departmentApproval_dialog"));
		this.content = $("#finance_wrapper .departmentApproval_dialog");
		this.registDom();
	}
	departmentApprovalModal.prototype.modalOpen = function(){
		if(this.content.length){
			this.resetHandle();// 重置
			if(this.actionType == "edit"){
				this.rowData = this.rowData || {};
				this.control.form.form("load",this.rowData);
				this.rowData = null;
			}
		}
	}
	departmentApprovalModal.prototype.registDom = function(){
		var self = this;
		this.control = this.control || {};
		this.control.datagrid = $(this.setting.datagridSelector);
		this.control.form = this.content.find(".modal.form");
		this.control.Ok = this.content.find('button[name="Ok"]');
		this.control.resetValue = this.content.find('button[name="resetValue"]');

		this.control.phone = this.content.find('input[name="phone"]');
		this.control.email = this.content.find('input[name="email"]');
		this.control.name = this.content.find('input[name="name"]');
		this.control.remark = this.content.find('input[name="remark"]');
		this.control.departmentId = this.content.find('input[name="departmentId"]');
		this.control.password = this.content.find('input[name="password"]');
		this.control.group = this.content.find('input[name="group"]');



		this.content.dialog({
			buttons:".departmentApproval_dialog .buttons"
		});
		this.content.dialog({
			onOpen:this.modalOpen.bind(this)
		})
		this.control.form.form({});
		this.control.Ok.linkbutton({
			onClick: this.OkHandle.bind(this)
		});
		this.control.resetValue.linkbutton({
			onClick:this.resetHandle.bind(this)
		});

		this.control.name.textbox({});
		this.control.departmentId.textbox({});

		this.control.password.passwordbox({
			showEye:false
		});
		this.control.email.textbox({
			required:true,
			validType:email
		});
		this.control.phone.textbox({
			required:true,
		})
		
		
		this.control.group.combobox({
			valueField:"Id",
			textField:"value",
			data:[{
				"Id":"第一分组",
				"value":"第一分组"
			},{
				"Id":"第二分组",
				"value":"第二分组",
			},
			],
			required:true,
			onChange:function(newValue,oldValue){
				console.log(newValue,oldValue);
			}
		});
		
		this.control.remark.textbox({
			multiline:true,
			height:"100"
		});
		
	}
	// Ok handle
	departmentApprovalModal.prototype.OkHandle = function(){
		 //console.log($(".financeAnalysis.modal.form").form("getData",true));
		// //console.log(this.control.form.find(".field").form("getData",true));
		// this.control.form.map(function(item){
		// 	console.log(this,item);
		// })
		//this.control.form.load()
		// this.control.form.form("load",{
		// 	operTime:"2018-03-10 11:22",
		// 	type:"支出",
		// 	revenue:"",
		// 	expenses:110,
		// 	financeDetail:"文具支出",
		// 	dealer:"微信支付",
		// 	exesType:"管理费用"
		// })
		if(this.control.form.form("validate")){
			var formData = this.formatData(this.control.form.form("getData"));
			console.log(formData);
			//console.log(this.formatData(this.control.form.form("getData")));
			if(this.control.datagrid){
				if(this.actionType == "edit"){
					this.control.datagrid.datagrid("updateRow",{
						index:this.indexData,
						row:formData
					});
					this.hideDialog();
				}else if(this.actionType == "add"){
					this.control.datagrid.datagrid("appendRow",formData);
					this.hideDialog();
				}
				
			}
		}else{
			return false;
		}
	}
	// reset Handle
	departmentApprovalModal.prototype.resetHandle = function(){
		this.control.form.form("resetForm");
		this.control.group.combobox("select","第一分组");
	}


	departmentApprovalModal.prototype.formatData = function(formData){
		return Event({
			"departmentId":"",
			"password":"",
			"group":"",
			"name":"",
			"phone":"",
			"email":"",
			"remark":""
		},formData);
	}

	departmentApprovalModal.prototype.hideDialog = function(){
		this.content.dialog("close");
	}


	registModal.RegisterModal("department_Modal",departmentApprovalModal);
})
