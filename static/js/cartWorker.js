
let i = 0;
postMessage(i);
onmessage = function(e) {
  postMessage(++i)
}

console.log('loading up cart worker ');


postMessage('helolll');

