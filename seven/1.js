/**
 * 学习第七章数组
 */

/**
 * 数组的建立
 */
function test1()
{
    var empty = []; //空数组
    var base = 1024;
    var table = [base+1,base+2]; //利用表达式赋值
    var count = [1,,2]; //中间的一个值省略，默认是undefined
    var b = [1,{x:1,y:2}]; //数组元素也可以是对象
    //调用构造函数 Array() 创建数组
    var a = new Array();  //调动时没有参数
    var a1 = new Array(10);  //调用时有一个参数，指定长度,来进行预分配，
                            //但是没有初始化，甚至索引还没初始化
    var a2 = new Array(5,4,3,2,1,"testing,testing");
    //js数组的一个特殊之处
     a[-1.23] = true;  //当使用索引是负数或者是字符串时就会转换成一个索引名为 -1.23的属性
     a["1000"] = 0;    //这是数组的第1001个元素
     a[1.000] ;        //和a[1] 相同
    
}
/**
 * 数组元素的添加和删除
 */
function test2()
{
    a = [];
    //直接添加
    a[0] = 0;
    a[1] = 1;
    //利用数组函数添加 
    a.push(3); //在数组头部添加
    //删除 从尾部删除
    a.pop();  

}
/**
 * 数组排序
 * array.sort() 
 * 默认是按照字母表顺序排序
 * 可以传递一个函数来进行排序，
 * 如果要排在前面 返回一个大于0
 * 排在后面小于0，顺序无关紧要返回0
 */
function test3()
{
    var a = [33,3,111,222];
    a.sort();
    console.log(a);
    a.sort(function(a,b){  //根据数据的大小来排序
        return a-b;
    });
    console.log(a);
    
}
/**
 * es5 中的新方法 
 * 每个方法传递三个参数 数组元素 索引 和数组的本身
 */
function test4()
{
    var data = [1,2,3,4,5];
    var sum= 0;

    data.forEach(function(value) {
        sum += value;
    }, this);
    console.log(sum);
    //foreach 没有自己结束的方法，要结束需要抛出一个异常，然后用catch捕获
    function foreach(a,f,t)
    {
        try {
            a.foreach(f,t);
        } catch (e) {
            if(e == foreach.break)
                return;
            else
                throw e;
        }
    }
    foreach.break = new Error("StopIteration");
}
test4();