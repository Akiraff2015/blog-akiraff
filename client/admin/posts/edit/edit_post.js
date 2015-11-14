// Kenta Iwasaki
function formatSlug(value) {
    value = value.indexOf(" ", value.length - 1) === -1 ? value.toLowerCase().replace(/ /g, '-') : value;
    value = value.replace(/[-]+/g, '-').replace(/[^\w\x80-\xFF-]+/g, '').replace(/[0-9]/g, '');

    var conflict = Posts.findOne({slug: value}, {sort: {slug: 1, createdAt: 1}});
    if (conflict) {
        var words = Posts.findOne({slug: {$regex: value}}, {sort: {slug: -1, createdAt: -1}}).slug.split("-");
        var index = words[words.length - 1];
        if (!isNaN(index)) {
            words[words.length - 1] = (parseInt(index) + 1).toString();
        } else {
            words.push("1");
        }
        return words.join("-");
    } else {
        return value;
    }
}

Template.edit_post.events({
    'submit': function (e) {
        var postSlug = FlowRouter.getParam("postSlug");
        var postTitle = $("#post_title").val();
        var postContent = $("#post_content").code();
        Posts.update({_id: Posts.findOne({slug: postSlug})._id}, {
                $set: {
                    title: postTitle,
                    slug: formatSlug(postTitle),
                    body: postContent,
                    modifiedAt: new Date()
                }
            },
            function (error) {
                if (error) {
                    console.log(error);
                } else {
                    FlowRouter.go("/blog/admin/posts");
                }
            });
        e.preventDefault();
    }
});

Template.edit_post.helpers({
    post: function () {
        var postSlug = FlowRouter.getParam("postSlug");
        if (!postSlug)
            return null;

        return Posts.findOne({slug: postSlug});
    },
    postHtml: function () {
        return Spacebars.SafeString(this.body);
    }
});

Template.edit_post.onRendered(function () {
    $('#post_content').summernote();
});

