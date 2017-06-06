var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
function test3() {
    var a = 10;
    function f(input) {
        let a = 100;
        if (input) {
            let b = a + 1;
            return b;
        }
    }
    const numLivesForCat = 9;
    const kitty = {
        name: "zhangke",
        numLives: numLivesForCat
    };
    kitty.name = "zhangke3";
}
function test4() {
    let input = [1, 2];
    let [first, second] = input;
    first = input[0];
    second = input[1];
    [first, second] = [second, first];
    let [first1, ...second1] = [1, 2, 3, 4];
    let o = {
        a: "foo",
        b: 12,
        c: "bar"
    };
    let { a, b } = o;
    ({ a, b } = { a: "baz", b: 101 });
    let { c } = o, passthrough = __rest(o, ["c"]);
    let total = passthrough.a + passthrough.b;
    let { a: newName1, b: newName2 } = o;
    function keepWholeObject(wholeObject) {
        let { a, b = 1001 } = wholeObject;
    }
    function f({ a: b } = { a: ",b:0" }) {
    }
    f();
    function f1({ a, b = 0 } = { a: "" }) {
    }
    f1({ a: "yes" });
    f1();
    class C {
        constructor() {
            this.p = 12;
        }
        m() { }
    }
    let c2 = new C();
    let clone = Object.assign({}, c2);
    clone.p;
}
