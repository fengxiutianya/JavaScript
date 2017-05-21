/**
 * 用于学习第八章函数
 */
/**
 * 函数表达式
 * 定义之后立即调用
 */
function test1()
{
    //此模式下的this一般是global
    var tem = (function(x){return x* x}(10));
    console.log(tem);
}


/**
 * 函数的实参和形参
 * js不检查函数的参数类型和函数的参数个数
 * 省略和多加参数js都不会认为是错误
 */
function test2(x,y,z)
{
    if(arguments.length != 0)
        for(var i = 0; i < arguments.length;i++ )
        console.log(arguments[i]);
}
/**
 * 用于测试匿名函数的 callee属性
 */
function test3()
{
    var factorial = function(x){
        if(x <= 1)
            return 1;
        return x * arguments.callee(x - 1);
    }
   ;
    console.log( factorial(2));
}
/**
 * 测试
 */
function test2()
{
    //定义一个扩展函数，用来将第二个以及后续参数复制到第一个参数
    //这里我们处理了 IE bug
    //在多数IE版本中，如果o的属性拥有一个不可枚举的同名属性，则for/in循环
    //不会枚举对象o的可枚举属性，也就是说，将不会正确处理注入tostring的属性
    //除非我们显示的检测
    var extend = (function(){
            //在修复之前，首先检测bug是否存在
            for(var p in {toString:null}){
                //如果代码执行到这里，那么for/in循环会正确工作并返回
                //一个简单版本的extend函数
                return function extend(o){
                    for(var i =1; i < arguments.length;i++)
                    {
                        var source  = arguments[i];
                        for(var prop in source )
                            o[prop] = source[prop]; 
                    }
                    return o;
                }
            }
            //如果执行到这里，说明for/in循环不会枚举测试对象的tostring属性
            //返回另外一个版本的extend函数
            //这个函数显示测试Object.prototype的不可枚举属性
            return function patched_extend(o){
            
                   for(var i =1; i < arguments.length;i++)
                    {
                        var source  = arguments[i];
                        //复制所有可枚举的属性
                        for(var prop in source )
                            o[prop] = source[prop]; 
                        //现在检查特殊属性
                        for(var j = 0; j < protoprops.length;j++){
                            prop = protoprops[j];
                            if(source.hasOwnProperty(prop))
                                o[prop] = source[prop];
                        }
                    }
                    return o;
            }
            //这个列表列出需要检查的特殊属性
            var protoprops = ["toString","valueOf","constructor","hasOwnProperty",
                "isPrototypeOf","propertyIsEnumerable","toLocaleString"];
    }());
}
/**
 * 闭包 ： 函数体内的变量都可以保存在函数作用域内，这种特性在计算机科学文献中成为闭包
 * 所有的js函数都是闭包，他们都是对象，他们都关联到作用域链
 * 
 * 理解：我们将作用域链描述为一个对象列表，不是绑定的栈，每次调用js函数的时候，都会为之创建一个
 * 新的对象来保存局部变量，把这个对象添加至作用链中。当函数返回的时候，就从作用域链中将这个绑定变量的对象删除
 * 如果不存在嵌套函数，也没有其他引用指向这个绑定对象，就会当做垃圾回收掉
 * 如果定义了嵌套函数，每个嵌套的函数都各自对应一个作用域链， 并且这个作用域链指向一个变量绑定的对象。
 * 但如果这些嵌套的函数对象在外部函数中保存下来，那么他们也会和所指向的变量绑定对象一样当做垃圾回收
 * 但是如果这个函数定义了嵌套函数，并将它们作为返回值或者存储在某处的属性里，这时就会有一个外部引用指向这个嵌套的函数
 * 他就不会被当做垃圾回收，并且他所指向的变量绑定对象也不会当做垃圾回收
 * 
 */
var scope = "global scope";
function checkscope()
{
    var scope = "local scope";
    function f()
    {
        return scope;
    }
    return f;
}
//下面体现了js作用域链的特性，不管在任何时候执行函数f，最初的绑定依然有效
// console.log(checkscope()()); //打印的是 local scope

function test4()
{
    var uniqueInteger = (function(){  //定义函数并立即调用
        var counter = 0; //定义函数的私有变量
        return function(){
            return counter++;
        }
    });
    //利用get set来进行设置
    //此处需要注意到的一点是，n被当做couter的私有变量
    function counter(n)
    {
        return {
            //属相getter方法返回并给私有计数器var递增1
            get count(){
                return n++;
            },
            //属性setter不允许n递减
            set count(m)
            {
                if( m >= n )
                    n = m;
                else
                    throw new Error("count can only be set to a larger value");
            }
        }
    }
    var c = counter(100);
    console.log(c.count);
    console.log(c.count);
    c.count = 200;
    console.log(c.count);
    c.count = 200;
}

/**
 * 特殊的闭包
 * 关联到闭包的作用量都是活动的，嵌套的韩硕不会讲作用域内的私有成员复制一份，
 * 也不会对绑定的变量生成静态快照
 * this 和 arguments 都会因为闭包的不同而不同
 */
function test5()
{
    var funs = (function(){
        var funs = [];
        for(var i =0; i < 10; i++)  //共享了变量i
            funs[i] = function(){return i;};
            return funs;
    }());
    console.log(funs[5]());
}
function test6()
{
    //这个函数检查实参和形参的哥说是否相等
    function check(args)
    {
        var actual = args.length; //实参的真是哥说
        var expected = args.callee.length; //期望的实参个数
        if(actual !== expected)
            throw new Error("args");
    }
     function f(x,y,z)
        {
            check(arguments);
            return x+y+z;
        }
        console.log(f(1,2,3));
}
/**
 * function.call(object,arg1,arg2)
 * function.apply(object,array)
 */
function test7()
{
    var o = {
        f:function(arg1,arg2)
        {
            for(var i = 0; i <arguments.length;i++)
                console.log(arguments[i]);
        }
    };
    //对象中函数的调用
    o.f.apply(o,[1,2,3,4]);
    o.f.call(o,5,6);
}
test7();3