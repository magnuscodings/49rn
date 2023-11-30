{
    module.exports = {
        // use the variable if it's defined, otherwise use the fallback
        icon: process.env.APP_ICON || './assets/icon.png',
        name: process.env.APP_NAME || 'test49',
        expo: {
          "extra": {
            "eas": {
              "projectId": "02e4cb04-81b4-4459-954f-f9e0e93db8a9"
            }
          }
        }
      };
    
}