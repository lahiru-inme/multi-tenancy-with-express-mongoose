const express = require('express');
const app = express()
const port = 3000

const { bindCurrentNamespace, setCurrentTenantId }  = require('./lib/storage');

app.use(bindCurrentNamespace);

// Add Middleware
app.use((req, res, next) => {

    console.log(req.query.organization);

    const tenantId = req.query.organization;

    setCurrentTenantId(tenantId);
    
    next();

})


app.get('/', (req, res)=> res.send('Hello world!'));

app.listen(port, () => console.log(`Server is running at ${port}`));