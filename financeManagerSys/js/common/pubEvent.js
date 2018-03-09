define(function(require){
	var PubSub = {
		handlers :{}
	}

	PubSub.on = function(eventType,handlers){
		if(!(this.handlers[eventType])){
			this.handlers[eventType] = [];
		}
		this.handlers[eventType].push(handler);
		return this;
	}


	PubSub.emit = function(eventType){
		var handlerArgs = Array.prototype.splice.call(arguments,1);
		for(var i = 0;i<this.handlers[eventType].length;i++){
			this.handlers[eventType][i].apply(this,handlerArgs);
		}
		return this;
	}


	PubSub.destory = function(eventType){
		this.handlers = {};
		return this;
	}
	return PubSub;
});
