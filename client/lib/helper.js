/**
 * Created by akadus on 1/7/15.
 */

Handlebars.registerHelper("prettifyDate", function(timestamp) {
    return moment(timestamp).fromNow();

});

Handlebars.registerHelper("formatHotness", function(hotness) {
    var hotData = {className:"redIcon", textContent:"Hot!"};
    switch(hotness) {
        case "1":
            hotData = {className:"warmIcon", level: "1", status: "Normal"};
            break;
        case "2":
            hotData = {className:"warmDarkIcon", level: "2", status: "Warm"};
            break;
        case "3":
            hotData = {className:"lightRedIcon", level: "3", status:"Hot!"};
            break;
        case "4":
            hotData = {className:"redIcon", level:"4" ,status: "Too Hot!!"};
            break;
        case "5":
            hotData = {className:"darkRedIcon", level:"5", status: "Inferno!!!"};
            break;
        default:
            hotData = {className:"redIcon", level:"4" ,status: "Too Hot!!"};
    }
    return hotData;
});
