/**
 * Created by akiraff on 11/7/15.
 */

global = FlowRouter.group({});

global.route('/', {
    name: 'home',
    action: function () {
        return BlazeLayout.render('main_render', {top: 'main_public'});
    }
});

global.route('/dashboard', {
    name: 'dashboard',
    action: function () {
        return BlazeLayout.render('dashboard_render', {top: 'main_public', left: 'dashboard'});
    }
});

global.route('/dashboard/new_post', {
    name: 'new_post',
    subscriptions: function(params, queryParams) {
        this.register('posts', Meteor.subscribe('posts'));
    },
    action: function () {
        return BlazeLayout.render('dashboard_render', {top: 'main_public', left: 'dashboard', right: 'new_post'});
    }
});

global.route('/dashboard/view_post', {
    name: 'view_all_post',
    subscriptions: function(params, queryParams) {
        this.register('posts', Meteor.subscribe('posts'));
    },
    action: function () {
        return BlazeLayout.render('dashboard_render', {top: 'main_public', left: 'dashboard', right: 'view_all_post'});
    }
});

global.route('/dashboard/posts/:postId', {
    name: 'post',
    subscriptions: function(params, queryParams) {
        this.register('posts', Meteor.subscribe('posts'), params.postId);
    },
    action: function (params) {
        return BlazeLayout.render('dashboard_render', {top: 'main_public', left: 'dashboard', right: 'post'});
    }
});

global.route('/jp', {
    name: 'japanese-blog',
    action: function () {
        return BlazeLayout.render('main_render', {main: 'main_public'});
    }
});

global.route('/pt', {
    name: 'portuguese-blog',
    action: function () {
        return BlazeLayout.render('main_render', {main: 'main_public'});
    }
});