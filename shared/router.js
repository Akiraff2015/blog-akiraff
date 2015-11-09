/**
 * Created by akiraff on 11/7/15.
 */

global = FlowRouter.group({});

global.route('/', {
    name: 'home',
    action: function() {
        return BlazeLayout.render('main_render', {main:'main_public'});
    }
});

global.route('/dashboard', {
   name: 'dashboard',
   action: function() {
       return BlazeLayout.render('dashboard_render',{top: 'main_public', left: 'dashboard'});
   }
});

global.route('/dashboard/new_post', {
   name: 'new_post',
   action: function() {
       return BlazeLayout.render('dashboard_render', {top: 'main_public', left: 'dashboard', right: 'new_post'});
   }
});



global.route('/jp', {
   name: 'japanese-blog',
   action: function() {
       return BlazeLayout.render('main_render', {main:'main_public'});
   }
});

global.route('/pt', {
   name: 'portuguese-blog',
   action: function() {
       return BlazeLayout.render('main_render', {main:'main_public'});
   }
});