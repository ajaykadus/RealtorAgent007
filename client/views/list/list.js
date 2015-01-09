/**
 * Created by akadus on 1/7/15.
 */
Template.navbar.helpers({

});
Template.navbar.events({
   'click  .search-leads': function(event, template) {
       event.preventDefault();
       var searchKey = template.find('.search-string').value;
       Session.set('leadsData',Leads.find({geo: searchKey.toLowerCase()},{sort: {freshness: -1}}).fetch());
       Router.go('search');
   },
    'click .sort-leads': function(event, template) {
        event.preventDefault();
        var $obj = $(event.currentTarget);
        var searchKey = template.find('.search-string').value;
        if($obj.hasClass('freshness')) {
            $('.active-sort').text('Freshness');
            Session.set('leadsData',Leads.find({geo: searchKey.toLowerCase()},{sort: {freshness: -1}}).fetch());
        }
        else if($obj.hasClass('hotness')){
            $('.active-sort').text('Hotness');
            Session.set('leadsData',Leads.find({geo: searchKey.toLowerCase()},{sort: {hotness: -1}}).fetch());
        }
    }
});
Template.listView.helpers({
    leadsData: function() {
        return Session.get('leadsData');
    }
});

Template.listItemView.helpers({

});

Template.listItemView.events({
    'click .reply-lead-btn': function() {
        $('#myModal').modal('hide');
    },
    'click .close-modal': function() {
        $('#successModal').modal('hide');
    }

});

Template.hotNessTmpl.helpers({
});