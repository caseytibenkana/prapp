//appName.folderName.className
//classname.configOBJ.callback

Ext.define('Prapp.view.students.MainView',{
        //class to extend from
        extend: 'Ext.tab.Panel',
        //xtype unique name for view
        xtype: 'mainview',

        //content or the objects within the tabpanel
        items:[{
            //object type to create
            xtype: 'panel',
            title: 'Todos',
            items: [
                {xtype: 'todogrid'}
            ]
        },
        {
            //object type to create
            xtype: 'panel',
            title: 'Albums',
            items: [
                {xtype: 'albumsgrid'}
            ]
        },
        {
            //object type to create
            xtype: 'panel',
            title: 'Posts',
            items: [
                {xtype:'postsgrid'}
            ]
        }

        ]

    },

    function() {
        console.log("Main view loaded");
    }
)    