Meteor.startup(function () {
    if (typeof Meteor.users.findOne({
            username: "Akiraff"
        }) === 'undefined') {
        Accounts.createUser({
            username: "Akiraff",
            email: "akiraff@gmail.com",
            password: "apple1"
        });
        var userakira = Meteor.users.findOne({username: 'Akiraff'});

        if (userakira != null) {
            Roles.addUsersToRoles(userakira._id, ['admin']);
            Meteor.users.update({_id: userakira._id}, {
                $set: {
                    language: "en",
                    createdAt: new Date()
                }
            });
        }
    }
    //if (typeof Meteor.users.findOne({
    //        username: "Akiraff"
    //    }) === 'undefined') {
    //    Accounts.createUser({
    //        username: "Akiraff",
    //        email: "akiraff@gmail.com",
    //        password: "apple1",
    //        language: "en",
    //        createdAt: new Date()
    //    });
    //    var userakira = Meteor.users.findOne({username: 'Akiraff'});
    //
    //    if (userakira != null) {
    //        Roles.addUsersToRoles(userakira._id, ['admin']);
    //
    //        //Meteor.users.update({_id: userakira._id}, {$set: {language: "en", createdAt: new Date}});
    //    }
    //}
    //
    //if (typeof Meteor.users.findOne({
    //        username: "blog"
    //    }) === 'undefined') {
    //    Accounts.createUser({
    //        username: "blog",
    //        email: "blog@gmail.com",
    //        password: "apple1",
    //        language: "en",
    //        createdAt: new Date()
    //    });
    //    var userblog = Meteor.users.findOne({username: 'blog'});
    //
    //    if (userblog != null) {
    //        Roles.addUsersToRoles(userblog._id, ['editor']);
    //        //Meteor.users.update({_id: userblog._id}, {$set: {language: "en", createdAt: new Date}});
    //    }
    //}
    //
    //if (typeof Meteor.users.findOne({
    //        username: "user"
    //    }) === 'undefined') {
    //    Accounts.createUser({
    //        username: "user",
    //        email: "user@gmail.com",
    //        password: "apple1",
    //        language: "en",
    //        createdAt: new Date()
    //    });
    //    var usernormal = Meteor.users.findOne({username: 'user'});
    //
    //    if (usernormal != null) {
    //        Roles.addUsersToRoles(usernormal._id, ['user']);
    //        //Meteor.users.update({_id: usernormal._id}, {$set: {language: "en", createdAt: new Date}});
    //    }
    //}
});