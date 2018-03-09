/*
 *	此方法是 重写 semantic form 表单 , 包括验证
*	批注 : 如果输入框中的值 为 disabled ，验证时排除验证
*/
define(function(require){
	var baseform = function(setting){
		this.setting = setting;
	}

	baseform.prototype.initCheckbox = function(){

	}

	baseform.initForm = function(){
		this.control = this.control || {};

	}

	baseform.getFormFields = function(){
		
	}
	return baseform;
})