System.register(["./ZipCodeValidator"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ParseIntBasedZipCodeValidator;
    var exportedNames_1 = {
        "ParseIntBasedZipCodeValidator": true,
        "RegExpBasedZipCodeValidator": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (ZipCodeValidator_1_1) {
                exports_1({
                    "RegExpBasedZipCodeValidator": ZipCodeValidator_1_1["ZipCodeValidator"]
                });
                exportStar_1(ZipCodeValidator_1_1);
            }
        ],
        execute: function () {
            ParseIntBasedZipCodeValidator = class ParseIntBasedZipCodeValidator {
                isAcceptable(s) {
                    return s.length === 5 && parseInt(s).toString() === s;
                }
            };
            exports_1("ParseIntBasedZipCodeValidator", ParseIntBasedZipCodeValidator);
        }
    };
});
