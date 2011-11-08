DalMob.store.Members = new Ext.data.Store({
	model: 'Member',
	sorters: 'first_name',
	proxy: {
		type: 'ajax',
		url: 'http://www.dalmob.org/conclave122011/WPUserDemo.php',
		reader: {
			type: 'json',
			root: ''
		},
		extraParams: {
		}
	},
	autoLoad: true
});
