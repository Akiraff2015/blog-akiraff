blog = FlowRouter.group({
    prefix: '/blog',
    triggersEnter: [function(context, redirect) {
        if (Meteor.userId()) {
            var userModel = Meteor.users.findOne({_id: Meteor.userId()}, {fields: {username: 1, language: 1, roles: 1}});
            TAPi18n.setLanguage(userModel ? userModel.language : "en");
        }
    }]
});

blog.route('/', {
    subscriptions: function (params, queryParams) {
        this.register('posts', Meteor.subscribe('posts'));
        this.register('usernames', Meteor.subscribe('usernames'));
    },
    action: function () {
        return BlazeLayout.render('main_render', {top: 'navbar', bottom: 'home'});
    }
});

blog.route('/login', {
    action: function () {
        return BlazeLayout.render('main_render', {top: 'navbar', bottom: 'login'});
    },
    triggersEnter: [function (context, redirect) {
        if (Meteor.loggingIn() || Meteor.user() != null) {
            FlowRouter.go("/blog");
        }
    }]
});

blog.route('/post/:postSlug', {
    subscriptions: function (params, queryParams) {
        this.register('posts', Meteor.subscribe('posts', params.postSlug));
    },
    action: function (params) {
        return BlazeLayout.render('main_render', {top: 'navbar', bottom: 'post'});
    }
});

// Admin Panel
var adminRoute = blog.group({
    prefix: '/admin',
    name: 'admin',
    triggersEnter: [function (context, redirect) {
        if (!Roles.userIsInRole(Meteor.user(), ['admin', 'editor'])) {
            FlowRouter.go("/blog");
        }
    }]
});

var adminPostsRoute = adminRoute.group({
    prefix: '/posts'
});

adminPostsRoute.route('/', {
    subscriptions: function (params, queryParams) {
        this.register('posts', Meteor.subscribe('posts'));
        this.register('usernames', Meteor.subscribe('usernames'));
    },
    action: function () {
        return BlazeLayout.render('main_render', {top: 'navbar', bottom: 'posts'});
    }
});

adminPostsRoute.route('/new', {
    subscriptions: function (params, queryParams) {
        this.register('posts', Meteor.subscribe('posts'));
    },
    action: function () {
        return BlazeLayout.render('main_render', {top: 'navbar', bottom: 'new_post'});
    }
});

adminPostsRoute.route('/edit/:postSlug', {
    subscriptions: function (params, queryParams) {
        this.register('posts', Meteor.subscribe('posts', params.postSlug));
    },
    action: function (params) {
        return BlazeLayout.render('main_render', {top: 'navbar', bottom: 'edit_post'});
    }
});