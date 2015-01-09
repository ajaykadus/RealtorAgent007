/**
 * Created by akadus on 1/7/15.
 */
/**
 * Created by akadus on 12/28/14.
 */
Meteor.publish("leadsList", function () {
    return Leads.find();
});


