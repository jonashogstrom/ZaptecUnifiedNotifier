const { 
    refreshBearerToken, 
    checkChargerAvailability,  
} = require('./ZaptecUnifiedNotifier.js');
const config = require('./config');
    
(async () => {
    console.log("Starting Zaptec Notifier...");
   
    console.log("Setting up intervals for checking charger availability, token refresh...");

    
    // Check charger availability every 3 minutes
    setInterval(async () => {
        await checkChargerAvailability();
     }, config.zaptecUpdateInterval); // configure in config.js

    // Refresh Zaptec token every 24 hours
    setInterval(async () => {
        await refreshBearerToken();
    }, config.zaptecTokenRefreshInterval); // 24 hours

    console.log("Zaptec Unified Notifier is now running!");
})();
