Ext.regModel('Member', {
    idProperty: 'ID',
    fields: [
        {name: 'ID', type: 'string'},
        
        // basic info
        {name: 'first_name', type: 'string'},
        {name: 'last_name', type: 'string'},
        {name: 'gravatar_40', type: 'string'},
        {name: 'user_email', type: 'string'},
        {name: 'user_url', type: 'string'},
    ]
});
