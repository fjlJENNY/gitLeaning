$(document).ready(function(){
	
	var login = new loginFun();
	console.log();
});

var loginFun = function(){
	function login(){
		this.$parent = $("#finance_login");
		this.isLogin = false;
		this.initEvent();
	}
	login.prototype.initEvent = function(){
		var self = this;
		// this.$parent.find(".ui.form").form({
		// 	fields:{

		// 	}
		// })
		this.$parent.find('.ui.checkbox').checkbox({});
		this.$parent.find(".btns .ui.button").click(function(event){
			event = event ||  window.event;
			var name = $(this).attr("name");
			if(name == "login"){
				self.isLogin = true;
				self.getLoginData();
				self.logined();

			}else if(name="regist"){
				window.location.href = "./regist.html"
			}
			event.stopPropagation();
		});
	}

	login.prototype.getLoginData = function(){
		console.log(this.$parent.find(".ui.form").form("validate form"));
	}
	login.prototype.logined = function(formData){
		var loginData = window.test_data.login;
	}
	return login;
}()