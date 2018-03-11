define(["common/extend","jQuery.easyui"],function(Extend,$){
	// $.fn.linkbutton.defaults = {
	// 	size:"large"
	// }
	$.fn.linkbutton.defaults = Extend($.fn.linkbutton.defaults,{
		//size:"large"
	});
	$.fn.window.defaults = Extend($.fn.window.defaults,{
		modal:true,
		closed:true,
		shadow:false,
		constrain:true,
	});
	$.fn.textbox.defaults = Extend($.fn.textbox.defaults,{
		labelAlign:"right"
	})
	$.fn.dialog.defaults = Extend($.fn.dialog.defaults,{
		modal:true,
		closed:true,
		shadow:false,
		constrain:true,
	});

	$.fn.datebox.defaults = Extend($.fn.datebox.defaults,{
		formatter:function(date){
			var y = date.getFullYear();
			var m = date.getMonth()+1;
			var d = date.getDate();
			// var h = date.getHours() < 10 ? ("0" + date.getHours()) : date.getHours();
			// var M = date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes();
			// var s = date.getSeconds() < 10 ? ("0" + date.getSeconds()) : date.getSeconds();
			return y + "-" + m + "-" + d ;//+ " " + h + ":" + M + ":" + s;
		},
		buttons:[],
		editable:false,
		parser:function(s){
			if (!s) {
                return new Date();
            }
            return new Date(s);
		}
	});

	$.fn.combobox.defaults = Extend($.fn.combobox.defaults,{
		panelHeight:"auto",
		panelMaxHeight:200,
	});


	$.fn.validatebox.defaults = Extend($.fn.validatebox.defaults ,{
		validateOnCreate:false,
		validateOnBlur:true,
		missingMessage:"必填项"
	});

	$.fn.form.defaults = Extend($.fn.form.defaults,{
		validateOnCreate:false,
		validateOnBlur:true,
		missingMessage:"必填项"
	});

	$.fn.numberbox.defaults = Extend($.fn.numberbox.defaults,{
		validateOnCreate:false,
		validateOnBlur:true,
		missingMessage:"必填项"
	});

	$.fn.datagrid.defaults = Extend($.fn.datagrid.defaults,{
		striped:true,  // 斑马线效果
		singleSelect:true, // 单选
		rownumbers:true, //  显示 序号
		fit:true,  // 自动填充父容器
		fitColumns:true, // columns 自动扩充
	});

	/**
	 * From扩展
	 * getData 获取数据接口
	 * 
	 * @param {Object} jq
	 * @param {Object} params 设置为true的话，会把string型"true"和"false"字符串值转化为boolean型。
	 */
	$.fn.form.methods = Extend($.fn.form.methods, {
    	getData: function(jq, params){
	        var formArray = jq.find("input").serializeArray();
	        var oRet = {};
	        for (var i in formArray) {
	            if (typeof(oRet[formArray[i].name]) == 'undefined') {
	                if (params) {
	                    oRet[formArray[i].name] = (formArray[i].value == "true" || formArray[i].value == "false") ? formArray[i].value == "true" : formArray[i].value;
	                }
	                else {
	                    oRet[formArray[i].name] = formArray[i].value;
	                }
	            }
	            else {
	                if (params) {
	                    oRet[formArray[i].name] = (formArray[i].value == "true" || formArray[i].value == "false") ? formArray[i].value == "true" : formArray[i].value;
	                }
	                else {
	                    oRet[formArray[i].name] += "," + formArray[i].value;
	                }
	            }
	        }
	    	return oRet;
    	},
    	resetForm:function(jq,params){
    		return jq.each(function(index,target){
				//reset(this);
				var form = $(target);
				var opts = $.data(target, 'form').options;
				for(var i=opts.fieldTypes.length-1; i>=0; i--){
					var type = opts.fieldTypes[i];
					var field = form.find('.'+type+'-f');
					if (field.length && field[type]){
						field[type]('reset');
					}
				}
				form.form('validate');
			});
    		
    	}
	});
});