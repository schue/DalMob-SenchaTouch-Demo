Ext.ns('DalMob', 'DalMob.views', 'DalMob.store', 'DalMob.model', 'DalMob.controllers');

if(typeof console === "undefined") {
	console = { log: function() { } };
}

Ext.setup({
    phoneStartupScreen: 'startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    
    onReady: function() {
        var app = new DalMob.App();
    }
});
