Template.view_all_post.helpers({
    posts: function () {
        return Posts.find({}, {sort: {createdAt: -1}});
    }
});