Ext.define('AM.store.All', {
    extend: 'Ext.data.Store',
    model: 'AM.model.All',
    autoLoad: false,
    autoSync: false,
    proxy: {
        type: 'ajax',
        url: '/all',
        reader: {
            type: 'json'
        }
    }
});