Template.post.helpers({
    post: function() {
        var postId = FlowRouter.getParam("postId");
        console.log(postId);
        if (!postId)
            return null;

        return Posts.findOne({_id: postId});
    }
});