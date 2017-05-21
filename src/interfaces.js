function test31() {
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
    }
    let myObj = { size: 10, label: "Size 10 object" };
    printLabel(myObj);
}
function test32() {
    function printLabel(labellObj) {
        console.log(labellObj.label);
    }
    let myObj = { size: 10, label: "Size 10 object" };
    printLabel(myObj);
}
function test33() {
    function createSquare(config) {
        let newSquare = { color: "white", area: 100 };
        if (config.color)
            newSquare.color = config.color;
        if (config.width)
            newSquare.area = config.width * config.width;
        return newSquare;
    }
    let mySquare = createSquare({ color: "black" });
    console.log(mySquare);
}
function test34() {
    ;
    let p1 = { x: 10, y: 20 };
    let a = [1, 2, 3, 4];
    let ro = a;
    a = ro;
}
function test35() {
    function createSquare(config) {
        let newSquare = { color: "white", area: 100 };
        if (config.color)
            newSquare.color = config.color;
        if (config.width)
            newSquare.area = config.width * config.width;
        return newSquare;
    }
    let mySquare = createSquare({ color: "black" });
    console.log(mySquare);
    mySquare = createSquare({ width: 100, opacity: 0.5 });
    console.log(mySquare);
}
function test36() {
    ;
    function createSquare(config) {
        let newSquare = { color: "white", area: 100 };
        if (config.color)
            newSquare.color = config.color;
        if (config.width)
            newSquare.area = config.width * config.width;
        return newSquare;
    }
    let mySquare = createSquare({ colo: "black" });
    console.log(mySquare);
}
function test37() {
    let mySearch = function (source, subString) {
        let result = source.search(subString);
        return result > -1;
    };
}
function test38() {
    ;
    let myArray;
    myArray = ["Bob", "Fred"];
    let myStr = myArray[0];
    class Animal {
    }
    class Dog extends Animal {
    }
    ;
    ;
    myArray;
    myArray = ["Alice", "zhangke"];
}
function test39() {
    class Clock {
        setTime(d) {
            return d.toLocaleString();
        }
        constructor(h, m) {
        }
    }
}
function test310() {
    function createClock(ctor, hour, minute) {
        return new ctor(hour, minute);
    }
    class DigitalClock {
        constructor(h, m) { }
        tick() {
            console.log("beep beep");
        }
    }
    class AnalogClock {
        constructor(h, m) { }
        tick() {
            console.log("tick tock");
        }
    }
    let digital = createClock(DigitalClock, 12, 17);
    let analog = createClock(AnalogClock, 7, 32);
    console.log(digital);
    console.log(analog);
}
function test311() {
    function getCounter() {
        let counter = function (start) {
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
function test312() {
    class Control {
    }
    class Button extends Control {
    }
}
