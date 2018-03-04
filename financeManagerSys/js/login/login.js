$(document).ready(function(){
	// $("#finance_login").find()
	var login = new loginFun();
	var regist = new registFun();
	console.log();
});

var loginFun = function(){
	function login(){
		this.$loginParent = $("#finance_login");
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
		});
		this.$loginParent.find('.ui.checkbox').checkbox({});
		this.$loginParent.find(".btns .ui.button").click(function(event){
			event = event ||  window.event;
			var name = $(this).attr("name");
			if(name == "login"){
				self.isLogin = true;
				var loginData = self.beforeLogin();
				if(loginData.isValid){
					self.logined(loginData.formData);
				}
			}else if(name="regist"){
				window.location.href = "./regist.html"
			}
			event.stopPropagation();
		});
	}


	login.prototype.beforeLogin = function(){
		var isValid = this.$loginParent.find(".ui.form").form("validate form");
		var formData = this.$loginParent.find(".ui.form").form("get values");
		console.log(isValid,formData);
		return {
			isValid:isValid,
			formData:formData
		}
	}


	login.prototype.logined = function(formData){
		var userData = JSON.parse(localStorage.getItem("userData"));
		if(!userData){
			userData = window.test_data.login;
		}
		if(formData.userType == "user"){
			var accountStatus =  this.getLoginAccount(userData["user"],formData);
			if(accountStatus.status){
				if(accountStatus.loginData.account != formData.account || 
					accountStatus.loginData.password != formData.password){
					show_tip("密码错误");
					return ;
				}
			}else{
				show_tip("该账号不存在");
				return ;
			}
		}else if(formData.userType == "root"){
			var accountStatus = this.getLoginAccount(userData["root"],formData);
			if(accountStatus.status){
				if(accountStatus.loginData.account != formData.account || 
					accountStatus.loginData.password != formData.password){
					show_tip("密码错误");
					return ;
				}
			}else{
				show_tip("该账号不存在");
				return ;
			}
		}
		
		show_tip("登录成功");
	}
	login.prototype.getLoginAccount = function(userData,formData){
		var loginStatus = {
			status:false,
			loginData:{}
		}
		for(var i = 0;i<userData.length;i++){
			if(userData[i].account === formData.account){
				loginStatus.loginData = userData[i];
				loginStatus.status = true;
				break;
			}
		}
		return loginStatus;
	}
	return login;
}()

var registFun = function(){
	function regist(){
		this.$registParent = $("#finance_register");
		this.isRigst = false;
		this.initRegistEvent();
	}
	regist.prototype.initRegistEvent = function(){
		var self = this;
		this.$registParent.find(".ui.form").form({
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
				},
				"repeat_password":{
					rules:[{
						type:"empty",
						prompt:'{name} 必须填写'
					},{
						type:"match[password]",
						prompt:"重复密码必须一致"
					}]
				}
			}
		});
		this.$registParent.find('.ui.checkbox').checkbox({});
		this.$registParent.find(".btns .ui.button").click(function(event){
			event = event ||  window.event;
			var name = $(this).attr("name");
			if(name == "regist"){
				self.isLogin = true;
				var registData = self.beforeRegist();
				if(registData.isValid){
					self.registed(registData.formData);
				}
			}else if(name="login"){
				window.location.href = "./login.html"
			}
			event.stopPropagation();
		});
	}
	regist.prototype.beforeRegist = function(){
		var isValid = this.$registParent.find(".ui.form").form("validate form");
		var formData = this.$registParent.find(".ui.form").form("get values");
		console.log(isValid,formData);
		return {
			isValid:isValid,
			formData:formData
		}
	}

	regist.prototype.registed = function(formData){
		var userData = JSON.parse(localStorage.getItem("userData"));
		if(!userData){
			userData = window.test_data.login;
		}
		if(formData.userType == "user"){
			if(this.getExistRegist(userData["user"],formData)){
				userData["user"].push({
					"account":formData.account,
					"password":formData.password
				});
			}else{
				show_tip("该账号已存在");
				return ;
			}
		}else if(formData.userType == "root"){
			if(this.getExistRegist(userData["root"],formData)){
				userData["root"].push({
					"account":formData.account,
					"password":formData.password
				});
			}else{
				show_tip("该账号已存在");
				return ;
			}
		}
		localStorage.setItem("userData",JSON.stringify(userData));
		show_tip("注册成功");
	}

	regist.prototype.getExistRegist = function(userData,formData){
		if(userData.account === userData.formData){
			return false;
		}else{
			return true;
		}
	}
	return regist;
}()