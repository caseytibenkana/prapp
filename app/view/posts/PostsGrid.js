  //appName.folderName.className
//classname.configOBJ.callback

Ext.define('Prapp.view.posts.PostsGrid',{
    extend: 'Ext.grid.Panel',

    //xtype to use when instabtiate view
    xtype:'postsgrid',
    // mandatory config

    //define store
    store:{
        //posts
        type: 'posts'
    },
    //define columns
    columns:[
            /*{
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
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
        {
            text: 'Body', //displayable column label
            dataIndex: 'body'
        },
    
    ]
})