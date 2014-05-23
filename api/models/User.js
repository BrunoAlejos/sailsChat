/*jslint node: true */
'use strict';
/**
 *
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

var bcrypt = require('bcrypt');

module.exports = {

    attributes: {
        surname : 'string',
        username: 'string',
        password: 'string',
        loggedIn: 'boolean'
    },

    beforeCreate: function (values, next) {
        bcrypt.hash(values.password, 8, function (err, hash) {
            if (err) {
                return next(err);
            }
            values.password = hash;
            next();
        });
    }

};
