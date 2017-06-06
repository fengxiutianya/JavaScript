function test2() {
    //布尔类型声明
    var isDone = false;
    //Number新添加的二进制 和 八进制
    var decimal = 6; //十进制
    var hex = 0xf00d; //十六进制
    var binary = 10; //二级制
    var octal = 484;
    //String
    var color = "blue";
    color = 'red';
    //也可以使用模板 不过要使用这个标记 ``
    var fullName = "Bob Bobbington";
    var age = 37;
    var sentence = "Hello,my name is " + fullName + "\n                            I`ll be " + (age + 1) + " years old next month";
    //array
    var list = [1, 2, 3];
    var list1 = [1, 2, 3];
    //申请一个结构体
    var x;
    x = ["hello", 10]; //但是这样写是错误的 x = [10,"hello"];
    console.log(x[0].substr(1));
    // console.log(x[1].substr(1)); 
    x[3] = "world";
    console.log(x[5].toString());
    // x[6] = true; error
    //枚举类型
    var Color;
    (function (Color) {
        Color[Color["red"] = 0] = "red";
        Color[Color["green"] = 1] = "green";
        Color[Color["blue"] = 2] = "blue";
    })(Color || (Color = {}));
    ;
    var c = Color.red;
    //任意类型
    var notSure = 4;
    notSure = "zhangke";
    //定义数组
    var list2 = [1, true];
    //void 类型的变量只能定义成 undefined 或 null
    var unusable = null;
    //never 类型
    //类型断言
    //第一种声明方式
    var someValue = "this is a string";
    var strLength = someValue.length;
    //第二种声明方式
    var someValue1 = "this is a string";
    var strLength1 = someValue1.length;
}
