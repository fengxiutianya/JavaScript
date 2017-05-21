System.register(["./my-module.js"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var numberRegexp, ZipCodeValidator;
    return {
        setters: [
            function (_1) {
            }
        ],
        execute: function () {
            exports_1("numberRegexp", numberRegexp = /^[0-9]+$/);
            ZipCodeValidator = class ZipCodeValidator {
                isAcceptable(s) {
                    return s.length === 5 && numberRegexp.test(s);
                }
            };
            exports_1("ZipCodeValidator", ZipCodeValidator);
            exports_1("maininValidator", ZipCodeValidator);
        }
    };
});
