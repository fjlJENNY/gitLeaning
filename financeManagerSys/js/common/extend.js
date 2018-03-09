define(function(require){
	var hasOwn = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    /**
     * 使用的是jquery中的extend函数
     */
    function Extend() {
        var src, copyIsArray, copy, name, options, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;
            // skip the boolean and the target
            target = arguments[i] || {};
            i++;
        }
        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && typeof target !== "function") {
            target = {};
        }

        for (; i < length; i++) {
            // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) {
                // Extend the base object
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    if (target === copy) {
                        continue;
                    }

                    if (deep && copy && (Extend.isPlainObject(copy) || (copyIsArray = Extend.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && Extend.isArray(src) ? src : [];

                        } else {
                            clone = src && Extend.isPlainObject(src) ? src : {};
                        }

                        target[name] = Extend(deep, clone, copy);

                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    };

    Extend.isPlainObject = function (obj) {
        if (!obj || toStr.call(obj) !== '[object Object]') {
            return false;
        }

        var hasOwnConstructor = hasOwn.call(obj, 'constructor');
        var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
        // Not own constructor property must be Object
        if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
            return false;
        }

        // Own properties are enumerated firstly, so to speed up,
        // if last one is own, then all properties are own.
        var key;
        for (key in obj) { /**/ }

        return typeof key === 'undefined' || hasOwn.call(obj, key);
    };

    Extend.isArray = function (arr) {
        if (typeof Array.isArray === 'function') {
            return Array.isArray(arr);
        }
        return toStr.call(arr) === '[object Array]';
    };
});