function test110() {
    let sym1 = Symbol();
    let sym2 = Symbol("key");
    let sym3 = Symbol("key");
    let sym4 = Symbol("key");
    console.log(sym3 == sym4);
    let obj = {
        [sym1]: "value"
    };
    console.log(obj[sym1]);
    const getClassNameSybol = Symbol();
    class C {
        getClassNameSybol() {
            return "C";
        }
    }
    let c = new C();
    let className = c.getClassNameSybol();
    console.log(className);
}
function test111() {
    let someArray = [1, "string", false];
    for (let entry of someArray)
        console.log(entry);
    let list = [4, 5, 6];
    for (let i of list) {
        console.log(i);
    }
    for (let i in list) {
        console.log(i);
    }
}
test111();
