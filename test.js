if(typeof exports !== "undefined"){
	if(typeof module !== "undefined" && module.exports){
		exports = module.exports = _;
	}
	exports._ = _ ;
}else{
	root._ = _;
}


var optimizeCb = function(func,context,argCount){
	if(context === void 0){
		return func;
	}
	switch (argCount == null ? 3 : argCount){
		case 1 : return function(value){
			return func.call(context,value);
		};
		case 2: return function(value,other){
			return func.call(context,value,other);
		};
		case 3: return function(value,index,collection){
			return func.call(context,value,index,collection);
		};
		case 4: return function(accumulator,value,index,collection){
			return func.call(accumulator,value,index,collection);
		}
	}
	return function(){
		return func.apply(context,arguments);
	}
}


var cb = function(value,context,argCount){
	if(value == null){
		return _.identity;
	}
	if(_.isFunction(value)){
		return optimizeCb(value,context,argCount);
	}
	if(_.isObject(value)){
		return _.matcher(value);
	}
	return _.property(value);
}

var createAssigner = function(keysFunc,undefinedOnly){
	return function(obj){
		var length = arguments.length;
		if(length < 2 || obj == null ){
			return obj;
		}
		for(var index = 1;index < length ; index ++){
			var source = arguments[index];
			var keys = keysFunc(source);
			var l = keys.length;
			for(var i = 0 ; i<l ; i++){
				var key = keys[i];
				if(!undefinedOnly || obj[key] === void 0){
					obj[key] = source[key];
				}
			}
		}
		return obj;
	}
}



// 去抖  debounce
var debounce = function(idle,action){
	var last;
	return function(){
		var ctx = this;
		var args = arguments;
		clearTimeout(last);
		last = setTimeout(function(){
			action.apply(ctx,args);
		},idle);
	}
}

// 节流 throttle
var throttle = function(delay,action){
	var last = 0;
	return function(){
		var curr = +new Date();
		if(curr - last > delay){
			action.apply(this,arguments);
			last = curr;
		}
	}
}