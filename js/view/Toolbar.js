DalMob.views.Toolbar = Ext.extend(Ext.Toolbar, {
	initComponent: function() {
		this.title = 'DalMob';
		this.dock = 'top';
		this.defaults = {
			ui: 'plain',
			iconMask: true
		};
		this.items = [
			{
				xtype: 'button',
				iconCls: 'home',
				handler: function() {
					Ext.dispatch({
						controller: DalMob.controllers.Main,
						action: 'home',
					});
				}
			},
			{flex: 1, xtype: 'spacer'}, 
			{
				xtype: 'button',
				iconCls: 'refresh',
				handler: function() {
					Ext.dispatch({
						controller: DalMob.controllers.Main,
						action: 'home',
					});
				}
			},
		];
        	DalMob.views.Toolbar.superclass.initComponent.call(this);
	}
});
