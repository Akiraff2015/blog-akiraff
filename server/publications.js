Meteor.publish("posts", function (postSlug) {
    if (postSlug) {
        return Posts.find({slug: postSlug});
    } else {
        return Posts.find({});
    }
});

Meteor.publish("usernames", function() {
    return Meteor.users.find({}, {fields: {username: 1}});
});

Meteor.publish("images", function() {
    return Images.find({});
});