function* objectEntries(){
    let propKeys  = Object.keys(this);
    for(let propKey of propKeys){
        yield [propKey,this[propKey]];
    }
}
// function* objectEntries(obj) {
//   let propKeys = Reflect.ownKeys(obj);

//   for (let propKey of propKeys) {
//     yield [propKey, obj[propKey]];
//   }
// }
let jane = {first:'Jane',last:'Done'};
// for(let [key,value] of objectEntries(jane)){
//     console.log(`${key}:${value}`);
// }
jane[Symbol.iterator] = objectEntries;

for(let [key,value] of jane){
    console.log(`${key}:${value}`);
}