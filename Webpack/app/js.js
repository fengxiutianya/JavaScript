import 'es6-promise/auto'; //与下面一个相同
// import Promise from 'promise-polyfill';
// if (!window.Promise) {
//   window.Promise = Promise;
// }
function determineDate() {
    import('moment')
      .then(function(moment) {
        console.log(moment().format());
  }).catch(function(err) {
    console.log('Failed to load moment', err);
  });
}

console.log(12);
determineDate();