Template.home.helpers({
    posts: function () {
        return Posts.find({}, {sort: {createdAt: -1}});
    },

    postHtml: function() {
        return Spacebars.SafeString(this.body);
    },

    authorName: function () {
        var user = Meteor.users.findOne({_id: this.author}, {fields: {username: 1}});
        if (!user) return null;
        return user.username;
    }
});