function* numbers(){
    yield 1;
    yield 2;
    return 3;
}
//扩展运算
[...numbers()]
console.log([...numbers()])
//Array.frim(numbers)
Array.from(numbers());
console.log(Array.from(numbers()))
//结构赋值
let[x,y] = numbers();

//for of 循环
for(let n of numbers()){
    console.log(n);
}