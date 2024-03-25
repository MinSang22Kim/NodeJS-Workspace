const sayNode = function() {
    console.log('Node');
}

const obj = {
    sayJS: function() {
        console.log('JS');
    },

    sayNode: sayNode
}

obj.sayNode();
obj.sayJS();