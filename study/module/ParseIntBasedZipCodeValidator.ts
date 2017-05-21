export class ParseIntBasedZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && parseInt(s).toString() === s;
    }
}
//导出院线的验证其单做了重命名
export { ZipCodeValidator as RegExpBasedZipCodeValidator } from "./ZipCodeValidator";
export * from "./ZipCodeValidator"; //可以同时导出多个模块