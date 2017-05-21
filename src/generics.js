function test60() {
    function identity(arg) {
        return arg;
    }
    let output = identity("mystring");
    let output1 = identity("mystring");
    function loggingIdentity(arg) {
        console.log(arg.length);
        return arg;
    }
    let myIdentity = identity;
    let myIdentity1 = identity;
}
function test61() {
    class GenericNumber {
    }
    let myGenericNumber = new GenericNumber();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) { return x + y; };
}
function test62() {
    function loggingIdentity(arg) {
        console.log(arg.length);
        return arg;
    }
}
function test63() {
    function copyFields(target, source) {
        return target;
    }
    function create(c) {
        return new c();
    }
    class Beekeeper {
    }
    class Zookeeper {
    }
    class Animal {
    }
    class Bee extends Animal {
    }
}
