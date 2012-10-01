Ext.define('AM.store.Main', {
    extend: 'Ext.data.Store',	
    model: 'AM.model.Main',
    autoLoad: false,
    autoSync: false,
    proxy: {
        type: 'ajax',
        url: '/next',
        reader: {
            type: 'json'
        }
    }
});