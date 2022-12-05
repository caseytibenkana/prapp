//appName.folderName.className
//classname.configOBJ.callback

Ext.define('Prapp.store.albums',{
    
    extend: 'Ext.data.Store',

    //alias - given by store.storename
    alias:'store.albums',

    //fields
    //model
    model: 'Prapp.model.Album',
    //ajax request
    proxy: {
        url:'http://jsonplaceholder.typicode.com/albums',
        type:'rest',
        reader:{
            type:'json',
            //rootproperty
        }
    },
    //initiate reqquest to get data on app load
    autoLoad: true
});