function test40() {
    class Greeter {
        constructor(message) {
            this.greeting = message;
        }
        greet() {
            return "Hello, " + this.greeting;
        }
    }
    let greeter = new Greeter("world");
    console.log(greeter.greet());
}
function test41() {
    class Animal {
        constructor(theName) {
            this.name = theName;
        }
        move(distance = 10) {
            console.log(`${this.name} moved ${distance}m`);
        }
    }
    class snake extends Animal {
        constructor(name) {
            super(name);
        }
        move(distance = 5) {
            console.log("Slithering...");
            super.move(distance);
        }
    }
    class Horse extends Animal {
        constructor(name) {
            super(name);
        }
        move(distance = 45) {
            console.log("Galloping...");
            super.move(distance);
        }
    }
    let sam = new snake("Sammy the Python");
    let tom = new Horse("Tommy the Palomino");
    sam.move();
    tom.move(34);
}
function test42() {
    class Animal {
        constructor(theName) {
            this.name = theName;
        }
        move(distance) {
            console.log(`${this.name} moved ${distance}`);
        }
    }
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Employee extends Person {
        constructor(name, department) {
            super(name);
            this.department = department;
        }
        getElevatorPitch() {
            return `Hello,my name is ${this.name} and I work in ${this.department}`;
        }
    }
    let howard = new Employee("Howard", "Sales");
    console.log(howard.getElevatorPitch());
}
function test43() {
    class Octopus {
        constructor(theName) {
            this.numberOfLegs = 8;
            this.name = theName;
        }
    }
    class Animal {
        constructor(name) {
            this.name = name;
        }
        move(distance) {
            console.log(`${this.name} moved ${distance}m`);
        }
    }
}
function test44() {
    let passcode = "secret passcode";
    class Employee {
        get fullName() {
            return this._fullName;
        }
        set fullName(newName) {
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
function test45() {
    class Grid {
        constructor(scale) {
            this.scale = scale;
        }
        calculateDistanceFromOrigin(point) {
            let xDist = (point.x - Grid.origin.x);
            let yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        }
    }
    Grid.origin = { x: 0, y: 0 };
    let grid1 = new Grid(1.0);
    let grid2 = new Grid(5.0);
    console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
}
function test46() {
    class Department {
        constructor(name) {
            this.name = name;
        }
        printName() {
            console.log('Department name: ' + this.name);
        }
    }
    class AccountingDepartment extends Department {
        constructor() {
            super('Accounting and Auditing');
        }
        printMeeting() {
            console.log('The Accounting Department meets each Monday at 10am.');
        }
        generateReports() {
            console.log('Generating accounting reports...');
        }
    }
    let department;
    department = new AccountingDepartment();
    department.printName();
    department.printMeeting();
}
function test47() {
    class Point {
    }
    let point3d = { x: 1, y: 2, z: 3 };
}
