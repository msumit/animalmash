Ext.Loader.setConfig({enabled: true});

Ext.Loader.setPath('AM', '/js/app');

Ext.application({
    name: 'AM',

    appFolder: '/js/app',
    
    controllers: ['Main'],

    launch: function() {

        myApp = Ext.create('Ext.panel.Panel', {
            layout: 'card',
            deferredRender: true,
            renderTo: 'app',
            width: 700,
            height: 450,
            border: 0,
            defaults: {bodyStyle:'padding:5px', border:0},
            items: [
                {
                    xtype: 'panel',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'leftImage',
                            margins: '20 5 20 10',
                            flex: 1
                        },
                        {
                            xtype: 'rightImage',
                            margins: '20 5 20 10',
                            flex: 1
                        }
                    ]
                },
                {
                    xtype: 'all'
                }

            ]
        });

        Ext.get('change').on('click', function(e,f){
            if(f.text === 'Go Back'){
                f.innerHTML = 'See Pseudo Ranks';
                Ext.get('msg').dom.innerHTML = 'Click on the Picture you like more!!';
                myApp.getLayout().setActiveItem(0);
            }
            else{
                f.innerHTML = 'Go Back';
                Ext.get('msg').dom.innerHTML = 'Pseudo Ranks to Animal Pictures!!';
                myApp.getLayout().setActiveItem(1);
            }
        }, this, {
            delay: 100,
            stopEvent : true
        });
    }
});
