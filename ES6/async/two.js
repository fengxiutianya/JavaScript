var fs =require('fs');
var path =require("path");
var async = require('asyncawait/async');
var await = require('asyncawait/await');
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
var asyncReadFile = async function () {
  var f1 = await readFile('/etc/fstab');
  var f2 = await readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};