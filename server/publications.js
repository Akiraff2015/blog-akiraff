Meteor.publish("posts", function (postId) {
    if (postId) {
        return Posts.find({_id: postId});
    } else {
        return Posts.find({});
    }
});