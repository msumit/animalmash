Ext.define('AM.model.All',{
    extend: 'Ext.data.Model',
    fields: [
        {name: '_id', type: 'string'},
        {name: 'image', type: 'string'},
        {name: 'like', type: 'int'}
    ]
});