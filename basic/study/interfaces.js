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
 * 用于学习接口
 */
function test31() {
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
    }
    var myObj = { size: 10, label: "Size 10 object" };
    printLabel(myObj);
}
/**
 * 定义interface
 * 然后在参数中传进参数
 */
function test32() {
    function printLabel(labellObj) {
        console.log(labellObj.label);
    }
    var myObj = { size: 10, label: "Size 10 object" };
    printLabel(myObj);
}
/**
 * interface 中可选属性
 * 可以传入也可以不传入
 * 在属性名和类型前面加入 ？ 就是可选属性
 */
function test33() {
    function createSquare(config) {
        var newSquare = { color: "white", area: 100 };
        if (config.color)
            newSquare.color = config.color;
        if (config.width)
            newSquare.area = config.width * config.width;
        return newSquare; //必须返回要求的属性
    }
    var mySquare = createSquare({ color: "black" });
    console.log(mySquare);
}
/**
 * 声明只读属性
 * readonly   在第一次声明的时候可以修改，以后不可以修改
 * ReadonlyArray<T>
 */
function test34() {
    ;
    var p1 = { x: 10, y: 20 };
    // p1.x = 10; //错误
    //定义数组只读，不能修改
    var a = [1, 2, 3, 4];
    var ro = a;
    // ro[0] = 12;//错误
    a = ro; //可以重新定义
}
/**
 * ts如何执行类型检查
 */
function test35() {
    function createSquare(config) {
        var newSquare = { color: "white", area: 100 };
        if (config.color)
            newSquare.color = config.color;
        if (config.width)
            newSquare.area = config.width * config.width;
        return newSquare; //必须返回要求的属性
    }
    var mySquare = createSquare({ color: "black" });
    console.log(mySquare);
    //下面在 ts的立场室友问题的
    // mySquare = createSquare({ colr: "black" });
    //绕过这些检查
    mySquare = createSquare({ width: 100, opacity: 0.5 });
    console.log(mySquare);
}
/**
 * 指定可选属性的接口，并且接口中的属性也可以是任意的
 *
 */
function test36() {
    ;
    function createSquare(config) {
        var newSquare = { color: "white", area: 100 };
        if (config.color)
            newSquare.color = config.color;
        if (config.width)
            newSquare.area = config.width * config.width;
        return newSquare; //必须返回要求的属性
    }
    var mySquare = createSquare({ colo: "black" });
    console.log(mySquare);
}
/**
 * 用接口定义函数的类型
 */
function test37() {
    //函数里面参数的名字可以和接口的名字不同 source 可以改成 src
    var mySearch = function (source, subString) {
        var result = source.search(subString);
        return result > -1;
    };
}
/**
 * 定义索引类型
 * [index:type]:type
 */
function test38() {
    ;
    var myArray;
    myArray = ["Bob", "Fred"];
    var myStr = myArray[0];
    var Animal = (function () {
        function Animal() {
        }
        return Animal;
    }());
    var Dog = (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Dog;
    }(Animal));
    ;
    ;
    myArray;
    myArray = ["Alice", "zhangke"];
}
/**
 * 类实现接口
 */
function test39() {
    var Clock = (function () {
        function Clock(h, m) {
        }
        Clock.prototype.setTime = function (d) {
            return d.toLocaleString();
        };
        return Clock;
    }());
}
/**
 *
 */
function test310() {
    function createClock(ctor, hour, minute) {
        return new ctor(hour, minute);
    }
    var DigitalClock = (function () {
        function DigitalClock(h, m) {
        }
        DigitalClock.prototype.tick = function () {
            console.log("beep beep");
        };
        return DigitalClock;
    }());
    var AnalogClock = (function () {
        function AnalogClock(h, m) {
        }
        AnalogClock.prototype.tick = function () {
            console.log("tick tock");
        };
        return AnalogClock;
    }());
    var digital = createClock(DigitalClock, 12, 17);
    var analog = createClock(AnalogClock, 7, 32);
    console.log(digital);
    console.log(analog);
}
/**
 * 混合类型
 */
function test311() {
    function getCounter() {
        var counter = function (start) {
        };
        counter.interval = 123;
        counter.reset = function () { };
        return counter;
    }
    var c = getCounter();
    c(10);
    c.reset();
    c.interval = 5.0;
}
/**
 * 接口继承类
 */
function test312() {
    var Control = (function () {
        function Control() {
        }
        return Control;
    }());
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Button;
    }(Control));
}
