const {tenantModel} = require('../lib/multiTenant');

const PageSchema = new PageSchema({
    title: String,
    body: String
});

const Page = tenantModel('page', PageSchema);

module.exports = Page;