//appName.folderName.className
// classname,configOBj,callback

Ext.define('Prapp.store.posts', {

    //extentions to Ext.data.Store
    extend: 'Ext.data.Store',

    //! alias -> store.storename

    alias: 'store.posts',

    //! fields => refence to the model fields 

    //!model 
    model: 'Prapp.model.Post',

    //ajax request
    //! proxy

    proxy: {
        url: 'https://jsonplaceholder.typicode.com/posts/',
        type: 'rest',
        reader: {
            type: 'json',
            // rootProperty
        }
    },
    //* initiate the request to get data automaticall on application load
    autoLoad: true





});