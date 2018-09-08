const express = require('express')

module.exports = function(server){
    
    // Define base URL for all routes
    const router = express.Router()
    server.use('/api', router)

    // Payment cycles routes
    const BillingCycle = require('../api/billingCicle/billingCicleService')
    BillingCycle.register(router, '/billingCycles')

}