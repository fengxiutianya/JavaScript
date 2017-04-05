/**
 * 用于学习第四单元表达式
 */
var geval = eval;
var x = "global";
y = "global";  //定义成全局变量
/**
 * in yuunsuan
 * string in object 
 * 如果string是object的属性则返回true 
 */
function test1()
{
    var point = {x:1,y:2};
    console.log("x" in point);
    console.log("z" in point);
    console.log("toString" in point);
}
/**
 * instanceof 
 * object instanceof object 判断左边的对象是否是hi右边对象的实例化
 * 所有的对象都是继承object类型
 */
function test2()
{
    var d = new Date();
    console.log(d instanceof Date);
    console.log(d instanceof object);

}
/**
 * eval 将字符串解析成js的语法进行执行
 * 其中eval的字符串必须是有意义的
 */
function f()
{
    var x = "local";
    eval("x+='changed';");
    return x;
}
function g()
{
    var y = "local";
    geval("y +='changed'");
    return y;
}
// console.log(f(),x);
// console.log(g(),y);
/**
 * void 一元运算符
 * 出现在操作数之前，操作数可以是任意类型，操作数会
 * 照常计算，但是会忽略计算结果并返回undefined
 */
function test3()
{
    console.log(void g());
}
test3();