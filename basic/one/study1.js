
/**
 * 测试对象的比较
 * 不是值得比较即使对象包含同样的属性及相同的值，他们也是不等的
 */
function test1()
{
    var o = {x:1},p={x:1}; //具有相同属性的俩个对象
    console.log(o == p);    
}

/**
 * 将数字转换成字符串
 * 并且按照指定的格式 
 */
function test2()
{
    var n = 17;
    var b = n.toString(2);
    console.log(b);
    b = n.toString(8);
    console.log(b);
     b = n.toString(16);
    console.log(b);
    var n = 123456.789
    b = n.toFixed(0);  //根据小数点后面的位数来制定位置
    console.log(b);
    n.toExponential(1); //根据指定的小数位来进行指数的显示
    n.toPrecision(10); //指定有效位数来填充
}

/**
 * 函数作用域
 * 不管定义在函数内的位置如何，在整个函数内，变量只要定义都是作为统一变量对待
 * 对下面的理解，可以认为str在函数最开始的定点声明，但是没有初始化
 * 这个特点是有js编译时进行的设置
 */
function test3()
{
    console.log(str);  
    var str = "string";
    console.log(str);
}

