/**
 * Created by Akiraff on 11/9/15.
 */

var Schemas = {};
Posts = new Mongo.Collection('post');

Schemas.Post = new SimpleSchema({
    title: {
        type: String,
        label: 'Title'
    },
    slug: {
        type: String,
        label: 'Permalink'
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
    createdAt: {
        type: Date,
        autoform: {
            omit: true
        }
    },
    modifiedAt: {
        type: Date,
        autoform: {
            omit: true
        }
    }
});

Posts.attachSchema(Schemas.Post);