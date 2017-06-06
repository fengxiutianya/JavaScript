/**
 * 用于学习类
 */
/**
 * 小例子
 */
function test40() {
    class Greeter {
        greeting: string;
        constructor(message: string) {
            this.greeting = message;
        }
        greet() {
            return "Hello, " + this.greeting;
        }
    }

    let greeter = new Greeter("world");
    console.log(greeter.greet());
}
/**
 * 类的继承
 */
function test41() {
    class Animal {
        name: string;
        constructor(theName: string) {
            this.name = theName;
        }
        move(distance: number = 10) {
            console.log(`${this.name} moved ${distance}m`);
        }
    }
    class snake extends Animal {
        constructor(name: string) {
            super(name);
        }
        move(distance = 5) {
            console.log("Slithering...");
            super.move(distance);
        }
    }
    class Horse extends Animal {
        constructor(name: string) {
            super(name);
        }
        move(distance = 45) {
            console.log("Galloping...");
            super.move(distance);
        }
    }

    let sam = new snake("Sammy the Python");
    let tom: Animal = new Horse("Tommy the Palomino");
    sam.move();
    tom.move(34);
}
/**
 * 定义类属性的可见性 
 * public :默认都是这个
 * private:不能再声明他的类的外部访问
 * protected 在派生类中仍然可以访问
 * 构造函数也可以被标记成protected。 这意味着这个类不能在包含它的类外被实例化，
 * 但是能被继承;也可以把标记打开至public
 */

function test42() {
    class Animal {
        public name: string;
        public constructor(theName: string) {
            this.name = theName;
        }
        public move(distance: number) {
            console.log(`${this.name} moved ${distance}`);
        }
    }
    class Person {
        protected name: string;
        constructor(name: string) {
            this.name = name;
        }
    }
    class Employee extends Person {
        private department: string;
        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }
        public getElevatorPitch() {
            return `Hello,my name is ${this.name} and I work in ${this.department}`;

        }
    }
    let howard = new Employee("Howard", "Sales");
    console.log(howard.getElevatorPitch());
    // console.log(howard.name); // error

}
/**
 * 属性修饰符
 * readonly修饰符  只读属性必须在声明时或者构造函数里被初始化
 * 参数哦属性可以吧定义和声明合并到一处
 */
function test43() {
    //用readonly标记属性
    class Octopus {
        readonly name: string;
        readonly numberOfLegs: number = 8;
        constructor(theName: string) {
            this.name = theName;
        }
    }
    //利用参数属性把定义和声明合并到一处
    class Animal {
        constructor(private name: string) { }
        move(distance: number) {
            console.log(`${this.name} moved ${distance}m`);
        }
    }

}
/**
 * 存取器属性
 * get set
 */
function test44() {
    let passcode = "secret passcode";

    class Employee {
        private _fullName: string;

        get fullName(): string {
            return this._fullName;
        }

        set fullName(newName: string) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        }
    }

    let employee = new Employee();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        console.log(employee.fullName);
    }
}

/**
 * 类的静态成员
 * static 初始化在定义时就进行，并且所有对象共享这个属性
 */
function test45() {
    class Grid {
        static origin = { x: 0, y: 0 };
        calculateDistanceFromOrigin(point: { x: number; y: number; }) {
            let xDist = (point.x - Grid.origin.x);
            let yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        }
        //声明并初始化 scale
        constructor(public scale: number) { }
    }

    let grid1 = new Grid(1.0);  // 1x scale
    let grid2 = new Grid(5.0);  // 5x scale

    console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
}
/**
 * 抽象类
 */
function test46() {
    abstract class Department {
        constructor(public name: string) {

        }
        printName(): void {
            console.log('Department name: ' + this.name);
        }
        abstract printMeeting(): void; //必须在派生类中实现

    }
    class AccountingDepartment extends Department {


        constructor() {
            super('Accounting and Auditing');
        }
        printMeeting(): void {
            console.log('The Accounting Department meets each Monday at 10am.');
        }

        generateReports(): void {
            console.log('Generating accounting reports...');
        }
    }
    let department: Department; // ok to create a reference to an abstract type
    // department = new Department(); // error: cannot create an instance of an abstract class
    department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
    department.printName();
    department.printMeeting();
    // department.generateReports(); // error: method doesn't exist on declared abstract type
}

/**
 * 类当做接口来使用
 */
function test47() {
    class Point {
        x: number;
        y: number;
    }
    interface Point3d extends Point {
        z: number;
    }
    let point3d: Point3d = { x: 1, y: 2, z: 3 };
}