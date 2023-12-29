class Node {
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

const tree=new Node(1)

tree.left=new Node(2)
tree.left.left=new Node(4)
tree.left.right=new Node(5)

tree.right=new Node(3)
tree.right.left=new Node(6)
tree.right.right=new Node(7)

function inOrderTraversal(tree){

    let results=[]
    if(tree.left){
        results.push(...inOrderTraversal(tree.left))
    }

    results.push(tree.value)
    if(tree.right){
        results.push(...inOrderTraversal(tree.right))
    }

    return results
}

console.log(inOrderTraversal(tree))


function preOrderTraversal(tree){

    let results=[]
    results.push(tree.value)

    if(tree.left){
        results.push(...preOrderTraversal(tree.left))
    }

    
    if(tree.right){
        results.push(...preOrderTraversal(tree.right))
    }

    return results
}
console.log(preOrderTraversal(tree))

function postOrderTraversal(tree){

    let results=[]
    

    if(tree.left){
        results.push(...postOrderTraversal(tree.left))
    }

    
    if(tree.right){
        results.push(...postOrderTraversal(tree.right))
    }

    results.push(tree.value)

    return results
}

console.log(postOrderTraversal(tree))