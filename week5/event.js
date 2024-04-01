const EventEmitter = require('events');

function listener1() {
    console.log('이벤트1 발생');
}

const myEvent = new EventEmitter();

myEvent.addListener('event1', listener1);
myEvent.on('event2', () => {
    console.log('이벤트2 발생');
});
myEvent.once('event3', () => {
    console.log('이벤트3 발생');
})