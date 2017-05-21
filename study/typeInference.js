/**
 * 用于学习类型推论  类型兼容性
 */
function test81() {
    //在ts里面没有明确指出类型的地方，类型推论会帮助提供类型
    var x = 3; //这种推论发生在初始化变量和成员，设置默认参数哦值和决定函数返回值时
    //当若干个不同类型在同一个数组里面的时候，会推断出一个最佳类型 所有类型都能兼容
    //如果没有找到通用类型 会报错
    var x1 = [0, 1, null];
}
/**
 * 用于学习类型兼容性
 * ts里的类型兼容性是基于结构子类型的。结构类型是一种只使用期成员来描述类型的方式。他正好与名义类型成对比
 * 在基于名义类型的类型系统中，数据类型的兼容性或等价性是要通过明确的声明或类型的名称决定的
 * 结构性类型系统：他是基于类型的组成结构，且不要求明确地声明
 *
 */
function test82() {
    var Person = (function () {
        function Person() {
        }
        return Person;
    }());
    var p;
    p = new Person();
    //ts结构化类型系统的基本规则是，如果x要兼容y那么y至少具有与x相同的类型
    var x;
    var y = { name: "Alice", Location: "Seattle" };
    x = y;
    //检查函数参数哦是使用相同的规则
    function greet(n) {
        console.log(n.name);
        return;
    }
    greet(y);
    //比较俩个函数，看 x 是否赋值给 y ，先看x的每个参数必须在y里找到对应类型的参数。参数的名字相同与否无所无，只看他们的类型
    var x1 = function (a) { return a; };
    var y1 = function (b, s) { return s.length; };
    //  x1 = y1;  有问题的参数不兼容
    y1 = x1;
    //函数复制能成的原因是参数可以省略
    var items = [1, 2, 3];
    items.forEach(function (item, index, array) { return console.log(item); });
    items.forEach(function (item) { return console.log(item); });
    //类型系统强制原函数的返回值类型必须是目标函数返回值类型的子类型
    var fx1 = function () { return ({ name: 'Alice' }); };
    var fy1 = function () { return ({ name: 'zhangke', Loc: 'ceshi' }); };
    var x2 = fx1;
    var y2 = fy1;
    x2 = y2;
    // y2 = x2; //类型不匹配
}
/**
 * 交叉类型 将多个类型合并为一个类型
 */
function test83() {
    function extend(first, second) {
        var result = {};
        for (var id in first) {
            result[id] = first[id];
        }
        for (var id in second) {
            if (!result.hasOwnProperty(id)) {
                result[id] = second[id];
            }
        }
        return result;
    }
    var Person = (function () {
        function Person(name) {
            this.name = name;
        }
        ;
        return Person;
    }());
    var ConsoleLogger = (function () {
        function ConsoleLogger() {
        }
        ConsoleLogger.prototype.log = function () {
            console.log("ceshi");
        };
        return ConsoleLogger;
    }());
    var jim = extend(new Person("jim"), new ConsoleLogger());
    var n = jim.name;
    jim.log();
}
/**
 * 联合类型
 */
function test84() {
    //使用联合类型 只能输入 string 或者 number类型
    function padLeft(value, padding) {
    }
    function getSmallPet(b) {
        return b;
    }
    var Animal = (function () {
        function Animal() {
        }
        Animal.prototype.fly = function () {
            throw new Error('Method not implemented.');
        };
        Animal.prototype.layEggs = function () {
            throw new Error('Method not implemented.');
        };
        return Animal;
    }());
    var pet = getSmallPet(new Animal());
    pet.layEggs();
    // pet.fly(); 错误不是公有类型
    //如何判定类型 下面使用了 类型断言
    if (pet.swim) {
        pet.swim();
    }
    else {
        pet.fly();
    }
    //用户自定义类型 param is type 
    function isFish(pet) {
        return pet.swim !== undefined;
    }
}
/**
 * 索引类型
 * keyof T 取值为 T属性里面已知类型
 * ：T[k][] 其中的T[k]是表示 类型强大之处  索引访问操作
 */
function test85() {
    function pluck(o, names) {
        return names.map(function (n) { return o[n]; });
    }
    var person = {
        name: 'Jarid',
        age: 35
    };
    var strings = pluck(person, ['name']);
    //进一步理解索引访问操作  返回值是T[k] 类型
    function getProperty(o, name) {
        return o[name];
    }
    var name = getProperty(person, "name");
    console.log(name);
    var age = getProperty(person, "age");
    console.log(age);
    var keys;
    console.log(keys = "string");
    var test;
    var proxytest;
    function unProxify(t) {
        var result = {};
        for (var k in t) {
            console.log(k);
            result[k] = t[k].get();
        }
        return result;
    }
    var org = unProxify(proxytest);
    for (var k in org)
        console.log(k.toLocaleLowerCase());
}
