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

		this.control.dealer = this.content.find('input[name="dealer"]');
		this.control.financeDetail = this.content.find('input[name="financeDetail"]');
		this.control.operTime = this.content.find('input[name="operTime"]');
		this.control.type = this.content.find('input[name="type"]');
		this.control.expenses = this.content.find('input[name="expenses"]');
		this.control.revenue = this.content.find('input[name="revenue"]');
		this.control.exesType = this.content.find('input[name="exesType"]');
		this.control.revenueField = this.control.revenue.closest(".field");
		this.control.expensesField = this.control.expenses.closest(".field");



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




		this.control.dealer.textbox({
		});
		// expenses : 支出
		this.control.expenses.numberbox({
			precision:2,
			min:0,
			prefix:"¥",
			required:true,
		});
		// revenue : 收入
		this.control.revenue.numberbox({
			precision:2,
			min:0,
			prefix:"¥",
			required:true,
		});
		// 
		this.control.type.combobox({
			valueField:"Id",
			textField:"value",
			data:[{
				"Id":"支出",
				"value":"支出"
			},{
				"Id":"收入",
				"value":"收入",
				"selected":true // 为什么不使用，重置会删除
			},
			],
			require:true,
			onChange:function(newValue,oldValue){
				if(newValue == "收入"){
					self.control.expensesField.hide();
					self.control.revenueField.show();
					self.control.expenses.numberbox("disable").numberbox("reset"); // 避免验证
					self.control.revenue.numberbox("enable");
				}else if(newValue == "支出"){
					self.control.revenueField.hide();
					self.control.expensesField.show();
					self.control.revenue.numberbox("disable").numberbox("reset");
					self.control.expenses.numberbox("enable");
				}
			},
			labelAlign:"right",
		});
		
		this.control.exesType.combobox({
			valueField:"Id",
			textField:"value",
			data:[{
				"Id":"公司盈利费用",
				"value":"公司盈利费用"
			},{
				"Id":"管理费用",
				"value":"管理费用",
			},
			],
			require:true,
			onChange:function(newValue,oldValue){
				console.log(newValue,oldValue);
			}
		});
		
		this.control.financeDetail.textbox({
			multiline:true,
			height:"100"
		});
		this.control.operTime.datebox({
			value:new Date(),
			readonly:true
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
		this.control.type.combobox("select","收入");
	}


	departmentApprovalModal.prototype.formatData = function(formData){
		return Event({
			"operTime":"",
			"type":"",
			"revenue":"",
			"dealer":"",
			"financeDetail":"",
			"exesType":"",
			"expenses":""
		},formData);
	}

	departmentApprovalModal.prototype.hideDialog = function(){
		this.content.dialog("close");
	}


	registModal.RegisterModal("departmentApprovalModal",departmentApprovalModal);
})
