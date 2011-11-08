DalMob.controllers.Main = new Ext.Controller({
	// Button control events
	home: function(options) {
		Ext.getCmp('app').setActiveItem(0);
	},

	members: function(options) {
		Ext.getCmp('app').setActiveItem(1);
	},

	about: function(options) {
		Ext.Msg.alert('About DalMob', 'DalMob is a group of mobile phone honey badgers.', function() {});
	},

	member: function(options) {
		Ext.Msg.confirm('Awesome hax0r?', 'Confirm them awesomez', function() {});
	}
});
