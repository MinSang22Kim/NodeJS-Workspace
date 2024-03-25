async function f() {
    const r = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "Test",
            body: "I am testing!",
            userId: 1,
        }),
    });
    data = await r.json();
    console.log(data);
}
f(); 