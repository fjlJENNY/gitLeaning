define(function(require){
	var nav = {};
	var registerNav = {};
	registerNav.RegisterNav = function(navId,func){
		nav[navId] = func;
	}
	registerNav.GetNav = function(navId){
		return nav[navId];
	}
	return registerNav;
});