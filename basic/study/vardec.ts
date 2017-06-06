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
    function f(input: boolean) {
        let a = 100;
        if (input) {
            let b = a + 1;
            return b;
        }
        //以下是错误的
        // return b;
    }
    const numLivesForCat = 9; //不可修改
    const kitty = {
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
    let input = [1, 2];
    let [first, second] = input;
    //上面的等同于
    first = input[0];
    second = input[1];

    [first, second] = [second, first];

    let [first1, ...second1] = [1, 2, 3, 4];
    //first1  1
    //second1 [2,3,4]

    //对象解构
    let o = {
        a: "foo",
        b: 12,
        c: "bar"
    };
    let { a, b } = o; //a = o.a b = o.b c不需要可以不用
    //没有声明也是可以的
    ({ a, b } = { a: "baz", b: 101 });
    // c = o.c
    let { c, ...passthrough } = o;
    let total = passthrough.a + passthrough.b;

    //重新命名 并按照特定类型来进行赋值
    let { a: newName1, b: newName2 }: { a: string, b: number } = o;

    function keepWholeObject(wholeObject: { a: string, b?: number }) {
        let { a, b = 1001 } = wholeObject;
    }

    //函数嵌套解构
    function f({ a: b } = { a: ",b:0" }): void {
        //** */
    }
    f(); //默认的可以省略
    function f1({ a, b = 0 } = { a: "" }): void {

    }
    f1({ a: "yes" });
    f1(); //默认有值
    // f1({}); //错误 a 是需要的值

    class C {
        p = 12;
        m() { }
    }
    let c2 = new C();
    let clone = { ...c2 }; //不要省略三点
    clone.p; //
}


