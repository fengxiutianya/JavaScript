var fs =require('fs');
var path =require("path");
var root= path.resolve();
var readfile= function(filename){
   return new Promise(function(resolve,reject){
        fs.readFile(filename,function(error,data){
                if(error)
                     reject(error);
                resolve(data);
        });
   });
}
var gen = function* () {
  var f1 = yield readfile(root+'/../Generator/hw.js');
  var f2 = yield readfile('../Generator/hw.js');
 console.log(f1.toString());
  console.log(f2.toString());
};
var l = gen();
l.next().value.then(function(data){
  console.log(data.toString());
  l.next(data).value.then(function(data){
     console.log(data.toString());
     l.next(data);
  });
});



