Posts.allow({
   'insert': function(userId) {
       //return Roles.userIsInRole(userId, 'admin');
       return true;
   }
});