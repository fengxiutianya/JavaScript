/**
 * 学习泛型
 */
/**
 * 如何定义泛型
 */
function test60() {
    //使用 functionname<T> 来定义泛型
    function identity<T>(arg: T): T {
        return arg;
    }
    //第一种使用方式
    let output = identity<string>("mystring");
    //第二种利用类型推论 省略了string
    let output1 = identity("mystring");
    //下面使用了一个泛型，但是我们现在不知道这个泛型是什么类型，里面有可能不带 length类型
    // function loggingIdentity<T>(arg:T): T{
    //         console.log(arg.length);
    //         return arg;
    // }
    function loggingIdentity<T>(arg: T[]): T[] {
        console.log(arg.length);
        return arg;
    }
    //也可以使用不同的泛型参数名，只要再数量上和使用方式能对应就可以
    //冒号后面的是数据类型
    let myIdentity: <U>(arg: U) => U = identity;  //等价于   let myIdentity:{<U>(arg: U) => U}  = identity; 

    //泛型接口
    interface GenericIdentityFn {
        <T>(arg: T): T;
    }
    let myIdentity1: GenericIdentityFn = identity;

    //定义接口泛型中 T使用什么类型
    interface GenericIdentityFn1<T> {
        (arg: T): T;
    }

}
/**
 * 泛型类
 */
function test61() {
    class GenericNumber<T>{
        zeroValue: T;
        add: (x: T, y: T) => T; //定义函数，并且返回类型也是T
    }
    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) { return x + y; };

}
/**
 * 泛型约束
 */
function test62() {
    interface Lengthwise {
        length: number;
    }
    function loggingIdentity<T extends Lengthwise>(arg: T): T {
        console.log(arg.length);
        return arg;
    }
    // loggingIdentity(3); //error 没有一个length 属性
}
/**
 * 在泛型约束中使用类型参数
 */
function test63() {

    function copyFields<T extends U, U>(target: T, source: U): T {
        // for (let id in source) {
        //     target[id] = source[id];
        // }
        return target;
    }
    function create<T>(c: { new (): T }): T {
        return new c();
    }

    class Beekeeper {
        hasMask: Boolean;
    }
    class Zookeeper {
        nametag: string;
    }
    class Animal {
        numLegs: number;
    }
    class Bee extends Animal {
        keeper: Beekeeper;
    }

}
