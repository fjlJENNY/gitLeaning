$(document).ready(function(){
	// $("#finance_login").find()
	var login = new loginFun();
	console.log();
});

var loginFun = function(){
	function login(){
		this.$loginParent = $("#finance_login");
		this.$registParent = $("#finance_register");
		this.isLogin = false;
		this.initLoginEvent();
	}
	login.prototype.initLoginEvent = function(){
		var self = this;
		this.$loginParent.find(".ui.form").form({
			fields:{
				account:{
					rules:[{
						type:"empty",
						prompt :'{name} 必须填写'
					}]
				},
				password:{
					rules:[{
						type:"empty",
						prompt :'{name} 必须填写'
					}]
				}
			}
		})
		this.$loginParent.find('.ui.checkbox').checkbox({});
		this.$loginParent.find(".btns .ui.button").click(function(event){
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
		console.log(this.$loginParent.find(".ui.form").form("validate form"));
	}
	login.prototype.logined = function(formData){
		var loginData = window.test_data.login;
	}
	return login;
}()