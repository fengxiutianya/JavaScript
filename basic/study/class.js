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
 * 用于学习类
 */
/**
 * 小例子
 */
function test40() {
    var Greeter = (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return Greeter;
    }());
    var greeter = new Greeter("world");
    console.log(greeter.greet());
}
/**
 * 类的继承
 */
function test41() {
    var Animal = (function () {
        function Animal(theName) {
            this.name = theName;
        }
        Animal.prototype.move = function (distance) {
            if (distance === void 0) { distance = 10; }
            console.log(this.name + " moved " + distance + "m");
        };
        return Animal;
    }());
    var snake = (function (_super) {
        __extends(snake, _super);
        function snake(name) {
            return _super.call(this, name) || this;
        }
        snake.prototype.move = function (distance) {
            if (distance === void 0) { distance = 5; }
            console.log("Slithering...");
            _super.prototype.move.call(this, distance);
        };
        return snake;
    }(Animal));
    var Horse = (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            return _super.call(this, name) || this;
        }
        Horse.prototype.move = function (distance) {
            if (distance === void 0) { distance = 45; }
            console.log("Galloping...");
            _super.prototype.move.call(this, distance);
        };
        return Horse;
    }(Animal));
    var sam = new snake("Sammy the Python");
    var tom = new Horse("Tommy the Palomino");
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
    var Animal = (function () {
        function Animal(theName) {
            this.name = theName;
        }
        Animal.prototype.move = function (distance) {
            console.log(this.name + " moved " + distance);
        };
        return Animal;
    }());
    var Person = (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var Employee = (function (_super) {
        __extends(Employee, _super);
        function Employee(name, department) {
            var _this = _super.call(this, name) || this;
            _this.department = department;
            return _this;
        }
        Employee.prototype.getElevatorPitch = function () {
            return "Hello,my name is " + this.name + " and I work in " + this.department;
        };
        return Employee;
    }(Person));
    var howard = new Employee("Howard", "Sales");
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
    var Octopus = (function () {
        function Octopus(theName) {
            this.numberOfLegs = 8;
            this.name = theName;
        }
        return Octopus;
    }());
    //利用参数属性把定义和声明合并到一处
    var Animal = (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.move = function (distance) {
            console.log(this.name + " moved " + distance + "m");
        };
        return Animal;
    }());
}
/**
 * 存取器属性
 * get set
 */
function test44() {
    var passcode = "secret passcode";
    var Employee = (function () {
        function Employee() {
        }
        Object.defineProperty(Employee.prototype, "fullName", {
            get: function () {
                return this._fullName;
            },
            set: function (newName) {
                if (passcode && passcode == "secret passcode") {
                    this._fullName = newName;
                }
                else {
                    console.log("Error: Unauthorized update of employee!");
                }
            },
            enumerable: true,
            configurable: true
        });
        return Employee;
    }());
    var employee = new Employee();
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
    var Grid = (function () {
        //声明并初始化 scale
        function Grid(scale) {
            this.scale = scale;
        }
        Grid.prototype.calculateDistanceFromOrigin = function (point) {
            var xDist = (point.x - Grid.origin.x);
            var yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        };
        return Grid;
    }());
    Grid.origin = { x: 0, y: 0 };
    var grid1 = new Grid(1.0); // 1x scale
    var grid2 = new Grid(5.0); // 5x scale
    console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
}
/**
 * 抽象类
 */
function test46() {
    var Department = (function () {
        function Department(name) {
            this.name = name;
        }
        Department.prototype.printName = function () {
            console.log('Department name: ' + this.name);
        };
        return Department;
    }());
    var AccountingDepartment = (function (_super) {
        __extends(AccountingDepartment, _super);
        function AccountingDepartment() {
            return _super.call(this, 'Accounting and Auditing') || this;
        }
        AccountingDepartment.prototype.printMeeting = function () {
            console.log('The Accounting Department meets each Monday at 10am.');
        };
        AccountingDepartment.prototype.generateReports = function () {
            console.log('Generating accounting reports...');
        };
        return AccountingDepartment;
    }(Department));
    var department; // ok to create a reference to an abstract type
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
    var Point = (function () {
        function Point() {
        }
        return Point;
    }());
    var point3d = { x: 1, y: 2, z: 3 };
}
