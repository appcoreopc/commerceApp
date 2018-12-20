export const cartWorker = new Worker("js/cartWorker.js");

cartWorker.onmessage = function(e) {
 console.log(e);
 console.log('got a message');
}