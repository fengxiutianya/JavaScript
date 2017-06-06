/**
 * 学symbol
 */
function test110() {
    let sym1 = Symbol();
    let sym2 = Symbol("key"); //可选的字符串key
    //并且symbol是不可变且唯一的
    let sym3 = Symbol("key");
    let sym4 = Symbol("key");
    console.log(sym3 == sym4);
    let obj = {
        [sym1]: "value"
    }
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
/**
 * 可迭代性
 * for ... of 语句会变量迭代对象
 */
function test111() {
    let someArray = [1, "string", false];
    for (let entry of someArray)
        console.log(entry);
    let list = [4, 5, 6];
    //for in 用于迭代对象的 键 的列表
    for (let i of list) {
        console.log(i);
    }
    //for of 用于迭代对象的 值 的列表
    for (let i in list) {
        console.log(i);
    }
}
test111();