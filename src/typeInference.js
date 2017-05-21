function test81() {
    let x = 3;
    let x1 = [0, 1, null];
}
function test82() {
    class Person {
    }
    let p;
    p = new Person();
    let x;
    let y = { name: "Alice", Location: "Seattle" };
    x = y;
    function greet(n) {
        console.log(n.name);
        return;
    }
    greet(y);
    let x1 = (a) => a;
    let y1 = (b, s) => s.length;
    y1 = x1;
    let items = [1, 2, 3];
    items.forEach((item, index, array) => console.log(item));
    items.forEach((item) => console.log(item));
    let fx1 = () => ({ name: 'Alice' });
    let fy1 = () => ({ name: 'zhangke', Loc: 'ceshi' });
    let x2 = fx1;
    let y2 = fy1;
    x2 = y2;
}
function test83() {
    function extend(first, second) {
        let result = {};
        for (let id in first) {
            result[id] = first[id];
        }
        for (let id in second) {
            if (!result.hasOwnProperty(id)) {
                result[id] = second[id];
            }
        }
        return result;
    }
    class Person {
        constructor(name) {
            this.name = name;
        }
        ;
    }
    class ConsoleLogger {
        log() {
            console.log("ceshi");
        }
    }
    var jim = extend(new Person("jim"), new ConsoleLogger());
    var n = jim.name;
    jim.log();
}
function test84() {
    function padLeft(value, padding) {
    }
    function getSmallPet(b) {
        return b;
    }
    class Animal {
        fly() {
            throw new Error('Method not implemented.');
        }
        layEggs() {
            throw new Error('Method not implemented.');
        }
    }
    let pet = getSmallPet(new Animal());
    pet.layEggs();
    if (pet.swim) {
        pet.swim();
    }
    else {
        pet.fly();
    }
    function isFish(pet) {
        return pet.swim !== undefined;
    }
}
function test85() {
    function pluck(o, names) {
        return names.map(n => o[n]);
    }
    let person = {
        name: 'Jarid',
        age: 35
    };
    let strings = pluck(person, ['name']);
    function getProperty(o, name) {
        return o[name];
    }
    let name = getProperty(person, "name");
    console.log(name);
    let age = getProperty(person, "age");
    console.log(age);
    let keys;
    console.log(keys = "string");
    let test;
    let proxytest;
    function unProxify(t) {
        let result = {};
        for (const k in t) {
            console.log(k);
            result[k] = t[k].get();
        }
        return result;
    }
    let org = unProxify(proxytest);
    for (let k in org)
        console.log(k.toLocaleLowerCase());
}
