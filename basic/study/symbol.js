/**
 * 学symbol
 */
function test110() {
    var sym1 = Symbol();
    var sym2 = Symbol("key"); //可选的字符串key
    //并且symbol是不可变且唯一的
    var sym3 = Symbol("key");
    var sym4 = Symbol("key");
    console.log(sym3 == sym4);
    var obj = (_a = {},
        _a[sym1] = "value",
        _a);
    console.log(obj[sym1]);
    var getClassNameSybol = Symbol();
    var C = (function () {
        function C() {
        }
        C.prototype.getClassNameSybol = function () {
            return "C";
        };
        return C;
    }());
    var c = new C();
    var className = c.getClassNameSybol();
    console.log(className);
    var _a;
}
/**
 * 可迭代性
 * for ... of 语句会变量迭代对象
 */
function test111() {
    var someArray = [1, "string", false];
    for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
        var entry = someArray_1[_i];
        console.log(entry);
    }
    var list = [4, 5, 6];
    //for in 用于迭代对象的 键 的列表
    for (var _a = 0, list_1 = list; _a < list_1.length; _a++) {
        var i = list_1[_a];
        console.log(i);
    }
    //for of 用于迭代对象的 值 的列表
    for (var i in list) {
        console.log(i);
    }
}
test111();
