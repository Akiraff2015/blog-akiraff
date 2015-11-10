Template.view_all_post.helpers({
    posts: function () {
        return Posts.find({}, {sort: {createdAt: -1}});
    }
});

//deleteBtn

Template.view_all_post.events({
     'click .deleteBtn':function(e){
         console.log('delete');
         Posts.remove({_id:this._id});

     },
    'click .editBtn':function(e){
         console.log('edit');
    }
});