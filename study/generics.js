var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 学习泛型
 */
/**
 * 如何定义泛型
 */
function test60() {
    //使用 functionname<T> 来定义泛型
    function identity(arg) {
        return arg;
    }
    //第一种使用方式
    var output = identity("mystring");
    //第二种利用类型推论 省略了string
    var output1 = identity("mystring");
    //下面使用了一个泛型，但是我们现在不知道这个泛型是什么类型，里面有可能不带 length类型
    // function loggingIdentity<T>(arg:T): T{
    //         console.log(arg.length);
    //         return arg;
    // }
    function loggingIdentity(arg) {
        console.log(arg.length);
        return arg;
    }
    //也可以使用不同的泛型参数名，只要再数量上和使用方式能对应就可以
    //冒号后面的是数据类型
    var myIdentity = identity; //等价于   let myIdentity:{<U>(arg: U) => U}  = identity; 
    var myIdentity1 = identity;
}
/**
 * 泛型类
 */
function test61() {
    var GenericNumber = (function () {
        function GenericNumber() {
        }
        return GenericNumber;
    }());
    var myGenericNumber = new GenericNumber();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) { return x + y; };
}
/**
 * 泛型约束
 */
function test62() {
    function loggingIdentity(arg) {
        console.log(arg.length);
        return arg;
    }
    // loggingIdentity(3); //error 没有一个length 属性
}
/**
 * 在泛型约束中使用类型参数
 */
function test63() {
    function copyFields(target, source) {
        // for (let id in source) {
        //     target[id] = source[id];
        // }
        return target;
    }
    function create(c) {
        return new c();
    }
    var Beekeeper = (function () {
        function Beekeeper() {
        }
        return Beekeeper;
    }());
    var Zookeeper = (function () {
        function Zookeeper() {
        }
        return Zookeeper;
    }());
    var Animal = (function () {
        function Animal() {
        }
        return Animal;
    }());
    var Bee = (function (_super) {
        __extends(Bee, _super);
        function Bee() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Bee;
    }(Animal));
}
