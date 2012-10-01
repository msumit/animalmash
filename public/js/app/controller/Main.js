Ext.define('AM.controller.Main', {
    extend: 'Ext.app.Controller',

    stores: ['Main'],
	
    models: ['Main'],
	
    views: ['LeftImage', 'RightImage', 'All'],
	
    refs: [
        {
            ref: 'leftImage',
            selector: 'leftImage'
        },
        {
            ref: 'rightImage',
            selector: 'rightImage'
        }
	],


    init: function() {
        this.control({
            'leftImage': {
                click: this.onImageClick
            },
            'rightImage': {
                click: this.onImageClick
            },
            'all': {
                beforeactivate: this.onViewChange
            }
        });
    },

    onLaunch: function(){
        this.loadImages();
    },

    onImageClick: function(field, imageId){
        this.saveLike(imageId);
        this.loadImages();
    },

    onViewChange: function(f, e){
        var store = Ext.create('AM.store.All');
        store.load({
            callback: function(records){
                records.sort(function(a, b) {
                    return b.data.like - a.data.like;
                });
                f.tpl.overwrite(f.body, records);
            }
        });
    },

    loadImages: function(){
        this.getMainStore().load({
            scope: this,
            callback: function(records, operation, success){
                //console.log(records);
                this.getLeftImage().field.dom.src = '/images/' + records[0].data.image1;
                this.getLeftImage().field.dom.imageId = records[0].data.id1;

                this.getRightImage().field.dom.src = '/images/' + records[0].data.image2;
                this.getRightImage().field.dom.imageId = records[0].data.id2;
            }
        });
    },

    saveLike: function(id){
        Ext.Ajax.request({
            url: '/' + id,
            method: 'PUT',
            success: function(response){
                console.log(response);
            }
        });
    }
});