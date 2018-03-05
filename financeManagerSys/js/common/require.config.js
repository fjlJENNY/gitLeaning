requirejs.config({
    baseUrl: '../../js',
    paths: {
        common:"common",
        text:"../../node_modules/text/text",
        finance:"finance",
       	UUID:"../lib/uuid",
       	semantic:"",
       	jQuery:"https://cdn.bootcss.com/jquery/3.3.1/jquery.min",
       	semantic:"https://cdn.bootcss.com/semantic-ui/2.2.14/semantic.min",
       	"jQuery.easyui":"../lib/jquery.easyui.min"
    },
    shim:{
    	"UUID":{
    		exports:"UUID"
    	},
    	"semantic":{
    		deps:["jQuery"],
    		exports:"$"
    	},
    	"jQuery":{
    		exports:"$"
    	},
    	"jQuery.easyui":{
    		deps:["jQuery"],
    		exports:"$"
    	}
    }
});


requirejs(["jQuery","semantic","jQuery.easyui"],function(){
	requirejs(["finance/finance"]);
});