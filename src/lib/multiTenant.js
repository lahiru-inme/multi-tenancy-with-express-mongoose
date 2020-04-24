const mongoose, {Schema } = require("mongoose");

const { getCurrentTenantId } = require("./storage");

const tenantModel = (name, schema, options) => {
    return (props = {}) => {
        
        schema.add({tenantId: String});
        
        const Model = mongoose.Model(name, schema, options);

        const { skipTenant } = props;

        if(skipTenant) return Model;

        Model.schema.set('discriminatoryKey', 'tenantId');

        const tenantId = getCurrentTenantId();

        const dicscriminatorName = `${Model.modelName}-${tenantId}`;

        const existingDiscriminator = (Model.discriminators || {} )[dicscriminatorName];
        
        return existingDiscriminator || Model.discriminator(dicscriminatorName, new Schema({}));
    }

}

const tenantlessModel = (name, schema, options) => {

    return () => mongoose.model(name, schema, options);

} 

module.exports = {
    tenantModel,
    tenantlessModel
}