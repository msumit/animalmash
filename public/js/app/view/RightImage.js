Ext.define('AM.view.RightImage', {
    extend: 'Ext.Img',

    alias: 'widget.rightImage',

    enableKeyEvents: true,

    border: 0,

    afterRender: function() {
        this.callParent(arguments);
        this.field = this.el;
        this.field.on('click', this.onClick, this);
        //console.log(this);
    },

    onClick: function() {
        this.fireEvent('click', this, this.field.dom.imageId);
    },

    initComponent: function() {
        this.callParent(arguments);
    }

});