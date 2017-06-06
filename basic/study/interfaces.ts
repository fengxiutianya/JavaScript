/**
 * 用于学习接口
 */
function test31() {

    function printLabel(labelledObj: { label: string }) {
        console.log(labelledObj.label);
    }

    let myObj = { size: 10, label: "Size 10 object" };
    printLabel(myObj);
}

/**
 * 定义interface
 * 然后在参数中传进参数
 */
function test32() {
    interface LabelledValue {
        label: string;
    }
    function printLabel(labellObj: LabelledValue) {
        console.log(labellObj.label);
    }
    let myObj = { size: 10, label: "Size 10 object" };
    printLabel(myObj);
}
/**
 * interface 中可选属性
 * 可以传入也可以不传入
 * 在属性名和类型前面加入 ？ 就是可选属性
 */
function test33() {

    interface SqureConfig {
        color?: string; //可选属性
        width?: number; //可选属性
    }
    function createSquare(config: SqureConfig): { color: string; area: number } {
        let newSquare = { color: "white", area: 100 };
        if (config.color)
            newSquare.color = config.color;
        if (config.width)
            newSquare.area = config.width * config.width;
        return newSquare;  //必须返回要求的属性
    }
    let mySquare = createSquare({ color: "black" });
    console.log(mySquare);
}
/**
 * 声明只读属性
 * readonly   在第一次声明的时候可以修改，以后不可以修改
 * ReadonlyArray<T>
 */
function test34() {
    interface Point {
        readonly x: number;
        readonly y: number;
    };
    let p1: Point = { x: 10, y: 20 };
    // p1.x = 10; //错误

    //定义数组只读，不能修改
    let a: number[] = [1, 2, 3, 4];
    let ro: ReadonlyArray<number> = a;
    // ro[0] = 12;//错误
    a = ro as number[];  //可以重新定义

}
/**
 * ts如何执行类型检查
 */
function test35() {

    interface SqureConfig {
        color?: string; //可选属性
        width?: number; //可选属性
    }
    function createSquare(config: SqureConfig): { color: string; area: number } {
        let newSquare = { color: "white", area: 100 };
        if (config.color)
            newSquare.color = config.color;
        if (config.width)
            newSquare.area = config.width * config.width;
        return newSquare;  //必须返回要求的属性
    }
    let mySquare = createSquare({ color: "black" });
    console.log(mySquare);
    //下面在 ts的立场室友问题的
    // mySquare = createSquare({ colr: "black" });
    //绕过这些检查
    mySquare = createSquare({ width: 100, opacity: 0.5 } as SqureConfig);
    console.log(mySquare);
}
/**
 * 指定可选属性的接口，并且接口中的属性也可以是任意的
 * 
 */
function test36() {
    interface SquareConfig {
        color?: string;
        width?: number;
        [propName: string]: any;
    };
    function createSquare(config: SquareConfig): { color: string; area: number } {
        let newSquare = { color: "white", area: 100 };
        if (config.color)
            newSquare.color = config.color;
        if (config.width)
            newSquare.area = config.width * config.width;
        return newSquare;  //必须返回要求的属性
    }
    let mySquare = createSquare({ colo: "black" });
    console.log(mySquare);
}
/**
 * 用接口定义函数的类型
 */
function test37() {
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }
    //函数里面参数的名字可以和接口的名字不同 source 可以改成 src
    let mySearch = function (source: string, subString: string) {
        let result = source.search(subString);
        return result > -1;
    };
}
/**
 * 定义索引类型
 * [index:type]:type
 */
function test38() {
    interface StringArray {
        [index: number]: string;
    };
    let myArray: StringArray;
    myArray = ["Bob", "Fred"];
    let myStr: string = myArray[0];

    class Animal {
        name: string;
    }
    class Dog extends Animal {
        breed: string;
    }
    //下面这个错误是因为使用number类型的索引查找时，
    // 会得到dog类型
    // interface NotOkay{
    //     [x:number]:Animal;
    //     [x:string]:Dog;
    // }

    interface NumberDictionary {
        [index: string]: number;
        length: number;
        // name:string; // 错误是因为value 不是number类型的子类型
    };
    //声明只读类型
    interface ReadonlyStringArray {
        readonly [index: number]: string;
    };
    myArray as ReadonlyStringArray;
    myArray = ["Alice", "zhangke"];
}
/**
 * 类实现接口
 */
function test39() {
    interface ClockInterface {
        currentTime: Date; //属性的定义
        setTime(d: Date): String; //函数的定义
    }
    class Clock implements ClockInterface {
        setTime(d: Date): string {
            return d.toLocaleString();
        }

        currentTime: Date;
        constructor(h: number, m: number) {

        }

    }
}
/**
 * 
 */
function test310() {
    interface ClockConstructor {
        new (hour: number, minute: number): ClockInterface;
    }
    interface ClockInterface {
        tick();
    }
    function createClock(ctor: ClockConstructor, hour: number, minute: number)
        : ClockInterface {
        return new ctor(hour, minute);
    }
    class DigitalClock implements ClockInterface {
        constructor(h: number, m: number) { }
        tick() {
            console.log("beep beep");
        }
    }
    class AnalogClock implements ClockInterface {
        constructor(h: number, m: number) { }
        tick() {
            console.log("tick tock");
        }
    }
    let digital = createClock(DigitalClock, 12, 17);
    let analog = createClock(AnalogClock, 7, 32);
    console.log(digital);
    console.log(analog);
}
/**
 * 混合类型
 */
function test311() {
    interface Counter {
        (start: number): string;
        interval: number;
        reset(): void;
    }
    function getCounter(): Counter {
        let counter = <Counter>function (start: number) {

        };
        counter.interval = 123;
        counter.reset = function () { };
        return counter;
    }
    let c = getCounter();
    c(10);
    c.reset();
    c.interval = 5.0;
}
/**
 * 接口继承类
 */
function test312() {
    class Control {
        private state: any;
    }
    interface SelecttableControl extends Control {
        select(): void;
    }
    class Button extends Control {

    }
}