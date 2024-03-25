const p = fetch("http://www.google.com");

p.then((response) => {
    return response.text();
})
.then((data) => {
    console.log(data);
});

console.log(''); // 멈출려고 그냥 쓴 거임