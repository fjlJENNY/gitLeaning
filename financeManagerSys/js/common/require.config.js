requirejs.config({
    baseUrl: '../../js',
    map:{
    	"*":{
    		'css':'../node_modules/require-css/css.min'
    	}
    },
    paths: {
        common:"common",
        text:"../node_modules/text/text",
        json:"../node_modules/requirejs-plugins/src/json",
       	UUID:"../lib/uuid",
       	semantic:"",
       	jQuery:"https://cdn.bootcss.com/jquery/3.3.1/jquery", //"https://cdn.bootcss.com/jquery/3.3.1/jquery.min",
       	semantic:"https://cdn.bootcss.com/semantic-ui/2.2.14/semantic.min",
       	"jQuery.easyui":"../lib/jquery.easyui.min",
        view:"../view",
        rolemanager:"./base/rolemanager",
        MD5:"../node_modules/blueimp-md5/js/md5.min"
    },
    shim:{
    	"UUID":{
    		exports:"UUID"
    	},
    	"semantic":{
    		deps:["jQuery",'css!https://cdn.bootcss.com/semantic-ui/2.2.14/semantic.min.css'],
    		exports:"$"
    	},
    	"jQuery":{
    		exports:"$"
    	},
    	"jQuery.easyui":{
    		deps:["jQuery",'css!../css/lib/themes/material/easyui.css','css!../css/lib/themes/icon.css'],
    		exports:"$"
    	}
    }
});


requirejs(["css!../css/page/dialog.css",
	"jQuery","semantic","jQuery.easyui","common/easyui.extend"
	],function(){
		requirejs(["homepage/homepage"]);
});