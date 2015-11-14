Template.navbar.events({
    'click #logoutBtn': function (event) {
        Meteor.logout(function () {
                FlowRouter.go("/blog");
            }
        );
    },
    'click .lang': function (event) {
        var lang = event.currentTarget.getAttribute("data-lang");
        if (Meteor.userId())
            Meteor.users.update({_id: Meteor.userId()}, {$set: {language: lang}}, function (error) {
                console.log(error);
            });
        TAPi18n.setLanguage(lang);
    }
});