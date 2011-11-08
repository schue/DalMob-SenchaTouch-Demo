/**
 * @class DalMob.App
 * @extends Ext.Panel
 *
 * This is the top level (fullscreen) class for DalMob.
 */

DalMob.App = Ext.extend(Ext.Panel, {
    id: 'app',
    cls: 'app',
    fullscreen: true,
    layout: {
	type: 'card',
	align: 'stretch'
	},
    activeItem: 0,
	initComponent: function() {        
		this.main = new Ext.Panel({
		    items: [
				new Ext.Button({
					ui: 'round',
					margin: 10,
					text: "Browse Member List",
					handler: function(button) {
						Ext.dispatch({
							controller: DalMob.controllers.Main,
							action: 'members'
						});
					}
				}),
				new Ext.Button({
					ui: 'round',
					margin: 10,
					text: 'About DalMob',
					handler: function(button) {
						Ext.dispatch({
							controller: DalMob.controllers.Main,
							action: 'about'
						});
					}
				})
			]
		});

		this.dockedItems = [ new DalMob.views.Toolbar() ];
	        this.items = [this.main, new DalMob.views.MemberList()];

		DalMob.App.superclass.initComponent.call(this);
	},
    
	onSplashDeactivate: function() {
		this.loginScreen.list.getSelectionModel().deselectAll();
	},
});
