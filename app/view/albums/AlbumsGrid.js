  //appName.folderName.className
//classname.configOBJ.callback

Ext.define('Prapp.view.albums.AlbumsGrid',{
    extend: 'Ext.grid.Panel',

    //xtype to use when instabtiate view
    xtype:'albumsgrid',
    // mandatory config

    //define store
    store:{
        //albums
        type: 'albums'
    },
    //define columns
    columns:[
            /*{
            "userId": 1,
            "id": 1,
            "title": "quidem molestiae enim"
        },*/
        {
            text: 'User ID', //displayable column label
            dataIndex: 'userId'
        },
        {
            text: 'Album ID', //displayable column label
            dataIndex: 'id'
        },
        {
            text: 'Title', //displayable column label
            dataIndex: 'title'
        },
    
    ]
})