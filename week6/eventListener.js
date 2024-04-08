const EventEmitter = require('events');

function listener1(){
    console.log('이벤트 1 발생');
}

const myEvent = new EventEmitter();

myEvent.addListener('event1', listener1);

myEvent.on('event2', () => {
    console.log('이벤트 2 발생');
});
myEvent.on('event2', () => {
    console.log('이벤트 2 발생 추가');
});
myEvent.on('event3', () => {
    console.log('이벤트 3 발생');
});

myEvent.emit('event1');
myEvent.emit('event2');
myEvent.emit('event3');
myEvent.emit('event3'); // 리스너 실행 안됨

console.log(myEvent.listenerCount('event2') + '개');

myEvent.removeListener('event1', listener1);
myEvent.emit('event1');
myEvent.removeAllListeners('event2');
myEvent.emit('event2');