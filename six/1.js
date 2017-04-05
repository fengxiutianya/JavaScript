/**
 * 用于学习第六单元 对象
 */

/**
 * 对象的创建
 * 对象直接量创建对象
 */
function test1()
{
    var empty = {};          //创建一个空对象
    var point = {o:0,y:0};   //创建一个对象，包含俩个属性
    var point2={x:point.x,y:point.y}; //更复杂的值
    var book = {
        "main title" : "Javascript",
        "sub-title"  : "The Definitive Guide",
        "for"        : "all autiedces",
        author: {
            firstname:"David",
            surname  :"Flanagan"
        }
    };
}
/**
 * 通过原型创建对象
 */
function test2()
{
    var o1 = Object.create({x:1,y:2}); //o1 继承了属性x和y
    var o2 = Object.create(null);      //创建了一个对象，不继承任何属性和方法，甚至不包括toString
    var o3 = Object.create(Object.prototype); //o3 和{} 和 new Object()一样
}

/**
 * 通过原型继承创建一个新对象
 */
function inherit(p)
{
    if(p == null)
        throw TypeError();        //p是一个对象，但不能是null
    if(Object.create)             //object.create 存在直接使用
        return Object.create(p);
    var t  = typeof(p);
    if(t !== "object" && t != "function")
        throw TypeError();
    function f(){} ;    //定义一个空构造函数
    f.prototype = p;    //将其原型设置为p
    return new f();     //使用f()创建p的继承对象
}
/**
 * 继承 
 */
function test3()
{
    var o = {};                 //o 是从Object.prototype 继承对象的方法
    o.x = 1;                    //给o定义一个属性x
    var p = inherit(o);         //p 继承o和object.prototype
    p.y = 2;                   
    var q= inherit(p);           //q继承p,o和Object.prototype‘
    q.z = 3;
    var s = q.toString();
    q.x + q.y;
}
/**
 * 属性的访问
 */
function test4()
{
    book.subtitle; //属性不存在 返回undefined
    var len = book.subtitle.length //抛出一个类型错误异常，undefined和null 没有length属性
    //当然给null 和undefined设置属性也是会报错误
    //Object.prototype = 0； 会报赋值失败，但不会报错
}
/**
 * 检测属性
 * 
 */

function test5()
{
    var o = { x:1};
    console.log("x" in o); //检测对象的自有属性或继承属性中包含这个属性
    console.log("y" in o);
    console.log("toString" in o,"end");
    //检测这个属性是否是对象的自有属性
    console.log(o.hasOwnProperty("x"));
    console.log(o.hasOwnProperty("y"));
    console.log(o.hasOwnProperty("toString"),"end");
    //propertyIsEnumable() 是hasOwnProperty的增强版 自有检测是自有属性并且可以枚举时返回true
    console.log(o.propertyIsEnumerable("x"));
    console.log(o.propertyIsEnumerable("y"));
    Object.prototype.propertyIsEnumerable("toString");
}
/**
 * 属性访问的小技巧
 */
function test6()
{
    var o = { x:1};
    console.log(o.x !== undefined); //通过undefined来判断是否是对象的属性
    console.log(o.y !== undefined); 
    //例外
     o.x = undefined;
     console.log(o.x !== undefined);  //此时就会失效
}
/**
 * es5 中提供的新函数
 * Object.keys() 返回一个数组。这个数组有对象中可枚举的自有属性名称组成
 * Onject.getOwnPropertyNames() 返回对象中所有属性自有属性的名称，而不仅仅是可枚举的属性
 */

/**
 * 定义 get set 方法
 * get functionname(){}
 * set functionname(){}
 */
function test7()
{
    var p = {
        //x y  是普通的属性 可读写
        x: 1.0,
        y: 1.0,
        //r 是可读写的存取器属性，他有getter 和setter
        //函数体结束后不要忘记带上逗号

        get r()
        {
            return Math.sqrt(this.x * this.x + this.y*this.y);
        },
        set r(newvalue)
        {
            var oldvalue = Math.sqrt(this.x * this.x + this.y*this.y);
            var ratio  = newvalue / oldvalue;
            this.x *= ratio;
            this.y *= ratio;
        },
        //只读存取器属性，他只有getter方法 因此是只读属性
        get theta()
        {
            return Math.atan2(this.x,this.y);
        }
    };
    var q = inherit(p);
    q.x = 1,q.y = 1;
    console.log(q.r);
    console.log(q.theta);
}
/**
 * 属性的特性
 * 通过这些API给原型对象添加方法，并将它们设置成不可枚举的，这让他们看起来更像内置的方法
 * 通过这些API给对象定义不能修改或删除的属性，借此锁定这个对象
 * 属性包含一个名字和4个特性
 * 值(value) 可写性(writable) 可枚举性(enumerable) 可配置性(configurable)
 * 存取器属性不具有值和可写性，他的可写性与setter有关，因此存取属性的4个特性是读取 写入 可枚举 可配置性
 * 
 */
function test8()
{   //获取对象属性的描述 
    //value:1 writable:true,enumable:true,configuable:true
    console.log(Object.getOwnPropertyDescriptor({x:1},"x"));
    //继承属性不能获得，智能得到自有属性
    console.log({},"toString");
    //设置某个属性的特性
    //Object.definePeoperty()
    var o = {};//创建一个空对象
    Object.defineProperty(o,"x",{
        value:1,
        writable:true,
        enumable:false,
        configuable:true
    });
    //属性存在但是不可被枚举
    console.log(o.x);
    console.log(Object.keys(o));

    //对属性修改让其变成只读属性
    Object.defineProperty(o,"x",{writable:false});
    //试图修改这个属性的值 ，操作会失败但不会报错，但是在严格模式中抛出类型错误异常
    o.x = 2;
    console.log(o.x);
    //但是属性是依然可以配置的，需要通过下面这种方式
    Object.defineProperty(o,"x",{value:2});
    console.log(o.x);
    /**
     * 完整的 defineProperty definePeoperties
     * 如果对象是不可扩展的，则可以编辑已有的自有属性，但不能给他添加新属性
     * 如果属性是不可配置的，则不能修改他的可配置属性和可枚举属性
     * 如果存取器属性是不可配置的，则不能修改其getter和setter方法，也不能将他转换为数据属性
     * 如果数据属性是不可配置的，则不能将它转换为存取器属性
     * 如果数据属性是不可配置的，则不能将它的可写性从false修改为true。但是可以从true修改成false
     * 如果数据属性是不可配置且不可写的，则不能修改他的值。然而可配置但不可写属性的值是可以修改的
     * 实际上是现将标记修改为可写的然后修改它的值，最后转换为不可写的
     */
}
function test9()
{
    Object.defineProperty(Object.prototype,
    "extend", //定义 Object.propertype.extend
    { 
        writable:true,
        enumable:false,
        configurable:true,  
        value:function(o) 
        {
            //值就是这个函数
            //得到所有属性，包括不可枚举属性
            var names = Object.getOwnPropertyNames(o);
            for(var i = 0; i < names.length;i++)
            {
                //如果已经存在，则跳过
                if(names[i] in this)
                    continue;
                //获得o中的属性描述符
                var desc = Object.getOwnPropertyDescriptor(o,name[i]);
                //用它给this创建一个属性
                Object.defineProperty(this,name[i],desc);
            }
            
        }
    })
}
/**
 * 对象的三个属性
 * 原型属性
 * 类属性
 * 可扩展性
 */
//类的属性，同时也避免因为tostring的重写带来的麻烦
function classof(o)
{
    if(o == null)
        return "null";
    if(o == undefined)
        return "undefined";
    return Object.prototype.toString.call(o).slice(8,-1);  
}
function test9()
{
    //原型属性
    var p = {x:1}; //定义一个原型对象
    var o = Object.create(p); //使用这个原型创建一个对象
    console.log(p.isPrototypeOf(o)); //o继承自p
    var tem = Object.prototype.isPrototypeOf(p);
    console.log(tem);
    //可扩展属性 知识对对象本身的设置，不影响原型链上面的对象
    //一旦配置就不能取消
    // objet.asExtensible()(检测是否可扩展) object.preventExpensions()(设置为不可扩展)
    // object.seal()    和上面类似，还可以将对象设置为不可配置的 object.isseal()
    // Object.freeze()  更加严格 还将所有的属性设置为只读属性 object.isFrozen()

    var o = Object.seal(Object.create(Object.freeze({x:1})),{y:{value:2,writable:true}});
 

}
test9();