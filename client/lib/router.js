/**
 * Created by akadus on 1/7/15.
 */

Router.route('/', function () {
});
Router.map(function(){
    this.route('details', {
        path: '/details/:_id',
        template: 'details',
        data: function() {
            return Leads.findOne({leadId:this.params._id}); }
    });
    this.route('search', {
        path: '/search',
        template: 'listView'
    })
});

