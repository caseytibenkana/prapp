Ext.define('Prapp.model.Album',{
    extend: 'Ext.data.Model',

    //fields
    fields: [{
            name: 'userId',
            type: 'integer'
        },
        {
            name: 'id',
            type: 'integer'
        },
        {
            name: 'title',
            type: 'string'
        },
    ],
})