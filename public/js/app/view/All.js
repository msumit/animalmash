Ext.define('AM.view.All', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.all',

    border: 0,

    //store: 'AM.store.All',

    autoScroll: true,

    tpl: [
        '<tpl for=".">',
        '<div class="{[xindex % 2 === 0 ? "thumb-even" : "thumb-odd"]}">',
            '<img src="/images/{data.image}" height="100px" width="150px">',
            '<span class="likes">{data.like} like',
            '<tpl if="data.like &gt; 1">s</tpl>',
            '</span></div>',
        '</tpl>',
        '<div class="x-clear"></div>'
    ],

    initComponent: function() {
        this.callParent(arguments);
    }

});