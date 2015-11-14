var Schemas = {};

Schemas.User = new SimpleSchema({
    username: {
        type: String
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        optional: true
    },
    verified: {
        type: Boolean,
        optional: true
    },
    createdAt: {
        type: Date,
        optional: true
    },
    language: {
        type: String,
        allowedValues: ['en', 'jp', 'pt'],
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    roles: {
        type: [String],
        optional: true
    }
});

Meteor.users.attachSchema(Schemas.User);