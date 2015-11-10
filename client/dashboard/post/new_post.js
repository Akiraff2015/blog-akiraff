/**
 * Created by akiraff on 11/8/15.
 */

console.log("Test");

$(document).ready(function() {
    $('#summernote').summernote();
});

Template.new_post.events({
    'submit': function (e) {
        var postTitle = $("#post_title").val();
        var postContent = $("#post_content").val();
        Posts.insert({title: postTitle, body: postContent, author: Meteor.userId()});
        e.preventDefault();
    }
});