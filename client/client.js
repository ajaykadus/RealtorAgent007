/**
 * Created by akadus on 1/7/15.
 */
Session.setDefault('leadsData', [])
Leads = new Mongo.Collection("leads");
Meteor.subscribe("leadsList");
