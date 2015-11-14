Template.login.events({
   'submit': function(event) {
       var username = $("#username").val();
       var password = $("#password").val();
       Meteor.loginWithPassword(username, password, function(error) {
           if (error) {
               $(".error").text(error);
           } else {
               if (Roles.userIsInRole(Meteor.userId(), ["admin", "editor"])) {
                   FlowRouter.go("/blog/admin/posts");
               } else {
                   FlowRouter.go("/blog");
               }
           }
       });
       event.preventDefault();
   }
});