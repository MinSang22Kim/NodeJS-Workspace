const obj = {
    status: {
        name: 'Joe',
        age: 25,
    },
    sayNode: function () {
        console.log('Node');
    },
};

// const sayNode = obj.sayNode;
// const age = obj.status.age;

const { sayNode, status: {age} } = obj;