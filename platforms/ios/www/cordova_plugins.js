cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.rjfun.cordova.httpd.CorHttpd",
        "file": "plugins/com.rjfun.cordova.httpd/www/CorHttpd.js",
        "pluginId": "com.rjfun.cordova.httpd",
        "clobbers": [
            "cordova.plugins.CorHttpd"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.rjfun.cordova.httpd": "0.9.2",
    "cordova-plugin-whitelist": "1.3.2"
};
// BOTTOM OF METADATA
});