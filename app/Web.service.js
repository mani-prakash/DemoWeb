System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var WebService;
    return {
        setters:[],
        execute: function() {
            WebService = (function () {
                function WebService() {
                    this.isLogin = false;
                }
                WebService.prototype.LoginStatus = function () {
                    return this.isLogin;
                };
                WebService.prototype.setUserCredentials = function (userName, password) {
                    console.log(userName + ':' + password);
                    this.isLogin = true;
                };
                return WebService;
            }());
            exports_1("WebService", WebService);
        }
    }
});
//# sourceMappingURL=Web.service.js.map