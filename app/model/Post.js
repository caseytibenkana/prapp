Ext.define('Prapp.model.Post', {
    extend: 'Ext.data.Model',

    //! fields
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
        {
            name: 'body',
            type: 'string'
        },
    ],

})