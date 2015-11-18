Posts.allow({
    'insert': function (userId) {
        return Roles.userIsInRole(userId, ['admin', 'editor']);
    },
    'remove': function (userId) {
        return Roles.userIsInRole(userId, ['admin', 'editor']);
    },
    'update': function (userId) {
        return Roles.userIsInRole(userId, ['admin', 'editor']);
    }
});

Images.allow({
    'insert': function (userId) {
        return Roles.userIsInRole(userId, ['admin', 'editor']);
    },
    'update': function (userId) {
        return Roles.userIsInRole(userId, ['admin', 'editor']);
    },
    'download': function() {
        return true;
    }
});

Meteor.users.allow({
    'update': function (userId, user, fields, modifier) {
        if (user._id === userId) {
            Meteor.users.update({_id: userId}, modifier);
            return true;
        }
        else return false;
    }
})