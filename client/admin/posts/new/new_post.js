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

Template.new_post.events({
    'submit': function (e) {
        var postTitle = $("#post_title").val();
        var postContent = $("#post_content").code();
        var currentDate = new Date();
        Posts.insert({
                title: postTitle,
                slug: formatSlug(postTitle),
                body: postContent,
                author: Meteor.userId(),
                createdAt: currentDate,
                modifiedAt: currentDate
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

Template.new_post.onRendered(function () {
    //$('#post_content').summernote();
    var template = this;

    $(document).ready(function () {
        $('#post_content').summernote({
            height: 200,
            onImageUpload: function (files) {
                for (var i = 0, ln = files.length; i < ln; i++) {
                    Images.insert(files[i], function (err, fileObj) {
                        if (!err) {
                            console.log(fileObj.url());
                            template.autorun(function (c) {
                                var imageUrl = Images.findOne(fileObj._id).url();
                                if (imageUrl) {
                                    $("#post_content").summernote('insertImage', imageUrl);
                                    c.stop();
                                }
                            });
                        } else {
                            console.log(err);
                        }
                    });
                }
            }
        });
    });
});

