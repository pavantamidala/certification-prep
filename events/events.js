// everything in node is a event emitter

// In node server res is a wriatable stream  and req is a readable stream

// for readable stream the following are some of the events
// 'data' - whenever we get the data this callback will be fired. we can write on the console it will be written back to us in the consoloe
// ex :-
// process.stdin.on('data', (chunk) => {
//     console.log(chunk.toString())
// })

// 'data' - whenever we get the data this callback will be fired
// 'error'- whenever error occurs it will fire


// var EventEmitter = require('events').EventEmitter;
// var emitter = new EventEmitter();
// var fooHandler = function (name) {
//     console.log('handler called' + name);
//     // Unsubscribe
// };
// emitter.on('foo', fooHandler);
// // Emit twice
// emitter.emit('foo', 'hello');
// emitter.removeListener('foo', fooHandler);
// emitter.emit('foo');



// var EventEmitter = require('events').EventEmitter;
// var emitter = new EventEmitter();
// // Listener addition / removal notifications
// emitter.on('removeListener', function (eventName, listenerFunction) {
//     console.log(eventName, 'listener removed', listenerFunction.name);
// });
// emitter.on('newListener', function (eventName, listenerFunction) {
//     console.log(eventName, 'listener added', listenerFunction.name);
// });
// function a() { }
// function b() { }
// // Add
// emitter.on('foo', a);
// emitter.on('foo', b);
// // Remove
// // emitter.removeListener('foo', a);
// emitter.newListener('foo', b);
// emitter.removeListener()