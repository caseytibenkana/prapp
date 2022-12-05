//appName.folderName.className
//classname.configOBJ.callback

Ext.define('Prapp.view.todos.TodoGrid',{
    extend: 'Ext.grid.Panel',

    //xtype to use when instabtiate view
    xtype:'todogrid',
    // mandatory config

    //define store
    store:{
        //todos
        type: 'todos'
    },
    //define columns
    columns:[
        /*
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        }*/
        {
            text: 'User ID', //displayable column label
            dataIndex: 'userId'
        },
        {
            text: 'Todo ID', //displayable column label
            dataIndex: 'id'
        },
        {
            text: 'Title', //displayable column label
            dataIndex: 'title'
        },
        {
            text: 'Completed', //displayable column label
            dataIndex: 'completed'
        },
    ]
})