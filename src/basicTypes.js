function test2() {
    let isDone = false;
    let decimal = 6;
    let hex = 0xf00d;
    let binary = 0b1010;
    let octal = 0o744;
    let color = "blue";
    color = 'red';
    let fullName = `Bob Bobbington`;
    let age = 37;
    let sentence = `Hello,my name is ${fullName}
                            I\`ll be ${age + 1} years old next month`;
    let list = [1, 2, 3];
    let list1 = [1, 2, 3];
    let x;
    x = ["hello", 10];
    console.log(x[0].substr(1));
    x[3] = "world";
    console.log(x[5].toString());
    var Color;
    (function (Color) {
        Color[Color["red"] = 0] = "red";
        Color[Color["green"] = 1] = "green";
        Color[Color["blue"] = 2] = "blue";
    })(Color || (Color = {}));
    ;
    let c = Color.red;
    let notSure = 4;
    notSure = "zhangke";
    let list2 = [1, true];
    let unusable = null;
    let someValue = "this is a string";
    let strLength = someValue.length;
    let someValue1 = "this is a string";
    let strLength1 = someValue1.length;
}
