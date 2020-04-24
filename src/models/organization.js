const mongoose, {Schema } = require("mongoose");

const { tenenatlessModel } = require("../lib/multiTenant");

const OrganizationSchema = new Schema({
    name: String,
});


const Orginization = tenenatlessModel('organization', OrganizationSchema);

module.exports = Organization;

