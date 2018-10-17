# 自定义Event
	
	Event 对象
	```
		Event.bubbles  [boolean]  事件是否通过DOM冒泡
		Event.cancelBubble  [boolean] true 事件处理程序返回之前设置为true,阻止事件的传播  https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelBubble
		Event.cancelable [boolean] 事件是否可以取消
		Event.composed  [boolean] 事件是否可以在shadow DOM 和常规DOM 之间的边界上冒泡 --- 沉着，安宁
		Event.currentTarget  [object] 对当前注册的事件目标的引用
		Event.defaultPrevented [boolean] 指示event.preventDefault() 是否已将调用
		Event.eventPhase  [string] 处理事件流的哪个阶段
		Event.returnValue  【兼容性】 returnValue = false 阻止事件传播
		Event.target  [object] 	最初分派事件的目标的引用
		Event.timeStamp [time] 创建事件的时间
		Event.type  [type] 事件的名称
		Event.isTrusted  [boolean] 是否可信任，由浏览器还是脚本（使用事件创建方法,如event.initEvent）启动的


		--- function 
		Event.createEvent()  创建一个新事件，然后必须通过调用其initEvent() 方法对其进行初始化  。
		Event.composedPath() 返回事件的路径(将调用侦听器的对象)
		Event.initEvent() 初始化创建的事件的值。如果事件已经被调度，则此方法不执行任何操作。
		Event.preventDefault()
		Event.stopPropagation()
		Event.stopImmediatePropagation  -- 待定
	```