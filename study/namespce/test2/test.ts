/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
//要测试必须把所有的文件丢打包成一个文件
// tsc -- outFile sample.js test.ts 
//tsc --outFile sample.js  所有需要的文件都打包
// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        console.log("\"" + s + "\" " + (validators[name].isAcceptable(s) ? " matches " : " does not match ") + name);
    }
}