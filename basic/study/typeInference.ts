/**
 * 用于学习类型推论  类型兼容性
 */
function test81() {
    //在ts里面没有明确指出类型的地方，类型推论会帮助提供类型
    let x = 3;  //这种推论发生在初始化变量和成员，设置默认参数哦值和决定函数返回值时
    //当若干个不同类型在同一个数组里面的时候，会推断出一个最佳类型 所有类型都能兼容
    //如果没有找到通用类型 会报错
    let x1 = [0, 1, null];

}
/**
 * 用于学习类型兼容性
 * ts里的类型兼容性是基于结构子类型的。结构类型是一种只使用期成员来描述类型的方式。他正好与名义类型成对比
 * 在基于名义类型的类型系统中，数据类型的兼容性或等价性是要通过明确的声明或类型的名称决定的
 * 结构性类型系统：他是基于类型的组成结构，且不要求明确地声明
 *  
 */
function test82() {
    interface Name {
        name: string;
    }
    class Person {
        name: string;
    }
    let p: Name;
    p = new Person();

    //ts结构化类型系统的基本规则是，如果x要兼容y那么y至少具有与x相同的类型
    let x: Name;
    let y = { name: "Alice", Location: "Seattle" };
    x = y;
    //检查函数参数哦是使用相同的规则
    function greet(n: Name): void {
        console.log(n.name);
        return;
    }
    greet(y);
    //比较俩个函数，看 x 是否赋值给 y ，先看x的每个参数必须在y里找到对应类型的参数。参数的名字相同与否无所无，只看他们的类型
    let x1 = (a: number) => a;
    let y1 = (b: number, s: string) => s.length;
    //  x1 = y1;  有问题的参数不兼容
    y1 = x1;
    //函数复制能成的原因是参数可以省略
    let items = [1, 2, 3];
    items.forEach((item, index, array) => console.log(item));
    items.forEach((item) => console.log(item));
    //类型系统强制原函数的返回值类型必须是目标函数返回值类型的子类型
    let fx1 = () => ({ name: 'Alice' });
    let fy1 = () => ({ name: 'zhangke', Loc: 'ceshi' });
    let x2 = fx1;
    let y2 = fy1;
    x2 = y2;
    // y2 = x2; //类型不匹配

}
/**
 * 交叉类型 将多个类型合并为一个类型
 */
function test83() {
    function extend<T, U>(first: T, second: U): T & U {
        let result = <T & U>{};
        for (let id in first) {
            (<any>result)[id] = (<any>first)[id];
        }
        for (let id in second) {

            if (!result.hasOwnProperty(id)) {
                (<any>result)[id] = (<any>second)[id];
            }
        }
        return result;
    }
    class Person {
        constructor(public name: string) { };
    }
    interface Loggable {
        log(): void;
    }
    class ConsoleLogger implements Loggable {
        log(): void {
            console.log("ceshi");
        }
    }
    var jim = extend(new Person("jim"), new ConsoleLogger());
    var n = jim.name;
    jim.log();
}
/**
 * 联合类型
 */
function test84() {
    //使用联合类型 只能输入 string 或者 number类型
    function padLeft(value: string, padding: string | number) {

    }
    // let indentedString = padLeft("Hello world",true); //类型输入错误

    //如果一个值是联合类型 只能访问联合类型里面共有的成员
    interface Bird {
        fly();
        layEggs();
    }
    interface Fish {
        swim();
        layEggs();
    }
    function getSmallPet(b: Bird): Fish | Bird {
        return b;
    }
    class Animal implements Bird {
        fly() {
            throw new Error('Method not implemented.');
        }
        layEggs() {
            throw new Error('Method not implemented.');
        }


    }
    let pet = getSmallPet(new Animal());
    pet.layEggs();
    // pet.fly(); 错误不是公有类型

    //如何判定类型 下面使用了 类型断言
    if ((<Fish>pet).swim) {
        (<Fish>pet).swim();
    }
    else {
        (<Bird>pet).fly();
    }
    //用户自定义类型 param is type 
    function isFish(pet: Fish | Bird): pet is Fish {
        return (<Fish>pet).swim !== undefined;
    }
}

/**
 * 索引类型
 * keyof T 取值为 T属性里面已知类型
 * ：T[k][] 其中的T[k]是表示 类型强大之处  索引访问操作
 */
function test85() {
    function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
        return names.map(n => o[n]);
    }
    interface Person {
        name: string;
        age: number;
    }
    let person: Person = {
        name: 'Jarid',
        age: 35
    }
    let strings: string[] = pluck(person, ['name']);

    //进一步理解索引访问操作  返回值是T[k] 类型
    function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
        return o[name];
    }
    let name: string = getProperty(person, "name");
    console.log(name);
    let age: number = getProperty(person, "age");
    console.log(age);
    // let unknown = getProperty(person,"unknown");  //错误的原因是 person 中没有 属性叫做 unknown的属性

    //索引类型
    interface Map<T> {
        [key: string]: T;
    }
    let keys: keyof Map<number>;
    console.log(keys = "string");
    //映射类型
    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P];
    }
    let test: ReadOnly<Person>;
    //很好的映射 下面俩个是将未知的类型来进行类型声明  是type
    type Proxy<T> = {
        get(): T;
        set(value: T): void;
    }
    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>;
    }

    let proxytest: Proxify<Person>;

    function unProxify<T>(t: Proxify<T>): T {
        let result = {} as T;
        for (const k in t) {
            console.log(k);
            result[k] = t[k].get();
        }
        return result;
    }
    let org = unProxify(proxytest);

    for (let k in org)
        console.log(k.toLocaleLowerCase());
}
