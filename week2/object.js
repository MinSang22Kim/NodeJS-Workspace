const sayNode = function() {
    console.log('Node');
}
const obj = {
    sayJS() {
        console.log('JS');
    },

    sayNode
}

obj.sayNode();
obj.sayJS();