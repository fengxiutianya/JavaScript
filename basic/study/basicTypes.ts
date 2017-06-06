
function test2() {
    //布尔类型声明
    let isDone: boolean = false;
    //Number新添加的二进制 和 八进制
    let decimal: number = 6; //十进制
    let hex: number = 0xf00d; //十六进制
    let binary: number = 0b1010; //二级制
    let octal: number = 0o744;

    //String
    let color: string = "blue";
    color = 'red';
    //也可以使用模板 不过要使用这个标记 ``
    let fullName: string = `Bob Bobbington`;
    let age: number = 37;
    let sentence: string = `Hello,my name is ${fullName}
                            I\`ll be ${age + 1} years old next month`;

    //array
    let list: number[] = [1, 2, 3];
    let list1: Array<number> = [1, 2, 3];
    //申请一个结构体
    let x: [string, number];
    x = ["hello", 10]; //但是这样写是错误的 x = [10,"hello"];
    console.log(x[0].substr(1));
    // console.log(x[1].substr(1)); 
    x[3] = "world";
    console.log(x[5].toString());
    // x[6] = true; error
    //枚举类型
    enum Color { red, green, blue };
    let c: Color = Color.red;
    //任意类型
    let notSure: any = 4;
    notSure = "zhangke";
    //定义数组
    let list2: any[] = [1, true];
    //void 类型的变量只能定义成 undefined 或 null
    let unusable: void = null;
    //never 类型

    //类型断言
    //第一种声明方式
    let someValue: any = "this is a string";
    let strLength: number = (<string>someValue).length;
    //第二种声明方式
    let someValue1: any = "this is a string";
    let strLength1: number = (someValue1 as string).length;
}