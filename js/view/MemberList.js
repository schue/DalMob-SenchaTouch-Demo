/**
 * @class DalMob.views.VendorList
 * @extends Ext.List
 *
 * Requires a textarea template to be in the dom to function.
 */
DalMob.views.MemberList = Ext.extend(Ext.Panel, {
	id: 'member-list',
        layout: {
                type: 'fit',
                align: 'stretch',
        },
	initComponent: function() {
		this.list = new Ext.List({
			id: 'member-list-impl',
			store: DalMob.store.Members,
			itemTpl: '{first_name} {last_name}',
		});
		this.list.on('itemtap', this.onListItemTap);

		this.items = [ this.list ];

		DalMob.views.MemberList.superclass.initComponent.call(this);
	},

	onListItemTap: function(dv, index, item, e) {
	        var ds = dv.getStore(),
		r = ds.getAt(index);
		Ext.dispatch({
			controller: DalMob.controllers.Main,
			action: 'member',
			data: r.data,
		});
	}
});
