define(function(require){
	var modal = {};
	var registermodal = {};
	registermodal.RegisterModal = function(modalId,func){
		modal[modalId] = func;
	}
	registermodal.GetModal = function(modalId){
		return modal[modalId];
	}
	return registermodal;
});