/**
 * Created by Akiraff on 11/9/15.
 */

Posts = new Mongo.Collection('post');
var Schemas = {};

Schemas.Post = new SimpleSchema({
    title: {
        type: String,
        label: 'Title'
    },
    body: {
        type: String,
        label: 'Body',
        autoform: {
            type: 'textarea',
            rows: 5
        }
    },
    author: {
        type: String,
        optional: true,
        autoform: {
            omit: true
        }
    },
});

Posts.attachSchema(Schemas.Post);