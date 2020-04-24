const mongoose, { Schema } = require('mongoose');

const {tenantModel } = require('../lib/multiTenant');

const userSchema = new Schema({
    name: String,
    email: String
});

const User = tenantModel('user',userSchema);

module.exports = User;