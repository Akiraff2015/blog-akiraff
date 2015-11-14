Template.post.helpers({
    post: function() {
        var postSlug = FlowRouter.getParam("postSlug");
        if (!postSlug)
            return null;

        return Posts.findOne({slug: postSlug});
    },

    postHtml: function() {
        return Spacebars.SafeString(this.body);
    }
});