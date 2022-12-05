//appName.folderName.className
//classname.configOBJ.callback

Ext.define('Prapp.store.todos',{
    extend: 'Ext.data.Store',

    //alias - given by store.storename
    alias:'store.todos',

    //fields
    //model
    model: 'Prapp.model.Todo',
    //ajax request
    proxy: {
        url:'http://jsonplaceholder.typicode.com/todos',
        type:'rest',
        reader:{
            type:'json',
            //rootproperty
        }
    },
    //initiate reqquest to get data on app load
    autoLoad: true
})