import { StringValidator } from "./Validation"; //导入某个模块
import * as validator from "./ZipCodeValidator"; //导入整个模块到一个变量，并通过他来访问模块的导出部分
import "./my-module.js";                       //一些模块会设置一些全局状态供其他模块使用。这些模块类似于配置文件，可以这样导入
export const numberRegexp = /^[0-9]+$/;

class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export { ZipCodeValidator };
export { ZipCodeValidator as maininValidator };