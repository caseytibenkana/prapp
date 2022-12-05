/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Prapp.Application',

    name: 'Prapp',

    requires: [
        // This will automatically load all classes in the Prapp namespace
        // so that application classes do not need to require each other.
        'Prapp.*'
    ],

    // The name of the initial view to create.
    mainView: 'Prapp.view.students.MainView'
});
