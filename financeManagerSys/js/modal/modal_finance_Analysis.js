define(function(require){
	var registModal = require("base/registerModalManager");
	var financeAnalysis = require("text!view/finance/financeAnalysis.html");

	function financeAnalysisModal(){
		$("#finance_wrapper").append($(financeAnalysis).find(".financeAnalysis_dialog"));
		this.content = $("#finance_wrapper .financeAnalysis_dialog");
		this.registDom();
	}
	financeAnalysisModal.prototype.registDom = function(){
		this.control = this.control || {};
		this.control.dealer = this.content.find('input[name="dealer"]');
		this.control.financeDetail = this.content.find('input[name="financeDetail"]');
		this.control.form = this.content.find(".modal.form");


		this.content.panel({});
		this.control.form.form({});
		this.control.dealer.textbox({});
		this.control.financeDetail.textbox({
			multiline:true
		});
	}

	registModal.RegisterModal("FinanceAnalysis",financeAnalysisModal);
})
