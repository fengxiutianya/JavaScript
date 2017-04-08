/**
 * 用于学习assert
 */

const assert = require("assert");

function test1()
{
    assert(true); // ok
    assert(1);   //ok
    assert(false); //throws "AssertionErrot：false == true"
    assert(0);     //throws ”AssertionError：false ==true"
    assert(false,'it\`s false'); 
}
/**
 * 用于学习assert.deepEqual(actual,expected[,msg])
 */
function test2()
{
    const obj1 = {
        a:{
            b:1
        }
    };
    const obj2 = {
        a:{
            b:2
        }
    };
    const obj3 = {
        a:{
            b:2
        }
    };
    const obj4 = Object.create(obj1);
    assert.deepEqual(obj1,obj1,"Error");
    // assert.deepEqual(obj2,obj1);
}
test2();