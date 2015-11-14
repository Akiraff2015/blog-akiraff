Template.posts.helpers({
    posts: function () {
        return Posts.find({}, {fields: {body: 0}, sort: {createdAt: -1}});
    },

    authorName: function () {
        var user = Meteor.users.findOne({_id: this.author}, {fields: {username: 1}});
        if (!user) return null;
        return user.username;
    }
});

Template.posts.events({
    'click .deleteBtn': function (e) {
        Posts.remove({_id: this._id});

    }
});