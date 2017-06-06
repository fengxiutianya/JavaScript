var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/**
 * 用于学习ts的声明
 *
 */
function test3() {
    //js的声明方式
    var a = 10;
    //ts的 声明方式 let 
    /**
     * 1. 可以使用块级作用域
     * 2. 使用之前不声明，是会报错
     * 3. 不允许重复声明
     */
    function f(input) {
        var a = 100;
        if (input) {
            var b = a + 1;
            return b;
        }
        //以下是错误的
        // return b;
    }
    var numLivesForCat = 9; //不可修改
    var kitty = {
        name: "zhangke",
        numLives: numLivesForCat
    };
    kitty.name = "zhangke3"; //里面的是可以修改的
}
/**
 * 解构
 *
 */
function test4() {
    var input = [1, 2];
    var first = input[0], second = input[1];
    //上面的等同于
    first = input[0];
    second = input[1];
    _a = [second, first], first = _a[0], second = _a[1];
    var _b = [1, 2, 3, 4], first1 = _b[0], second1 = _b.slice(1);
    //first1  1
    //second1 [2,3,4]
    //对象解构
    var o = {
        a: "foo",
        b: 12,
        c: "bar"
    };
    var a = o.a, b = o.b; //a = o.a b = o.b c不需要可以不用
    //没有声明也是可以的
    (_c = { a: "baz", b: 101 }, a = _c.a, b = _c.b);
    // c = o.c
    var c = o.c, passthrough = __rest(o, ["c"]);
    var total = passthrough.a + passthrough.b;
    //重新命名 并按照特定类型来进行赋值
    var newName1 = o.a, newName2 = o.b;
    function keepWholeObject(wholeObject) {
        var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    }
    //函数嵌套解构
    function f(_a) {
        var b = (_a === void 0 ? { a: ",b:0" } : _a).a;
        //** */
    }
    f(); //默认的可以省略
    function f1(_a) {
        var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    }
    f1({ a: "yes" });
    f1(); //默认有值
    // f1({}); //错误 a 是需要的值
    var C = (function () {
        function C() {
            this.p = 12;
        }
        C.prototype.m = function () { };
        return C;
    }());
    var c2 = new C();
    var clone = __assign({}, c2); //不要省略三点
    clone.p; //
    var _a, _c;
}
