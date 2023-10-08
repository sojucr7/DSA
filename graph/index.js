
//STEPS #STACK APPROCH

//1)PUSH GIVEN NODE TO EMPTY STACK

//2)POP THE CURRENT VALUE

//3)GET ALL THE EDGES OF THE POPPED NODE

//4)PUSH THOSE NODES TO STACK

//5)CONTINUE UNTIL STACK IS EMPTY

const depthFirstTraversal=(graph,source)=>{
    const queue=[]
    queue.push(source)

    while(queue.length>0){
        const node=queue.pop()
        console.log(node)
        for(let i=0;i<graph[node].length;i++){
            queue.push(graph[node][i])
        }
    }
}



//STEPS #STACK APPROCH

//1)PUSH GIVEN NODE TO EMPTY STACK

//2)POP THE CURRENT VALUE

//3)GET ALL THE EDGES OF THE POPPED NODE

//4)PUSH THOSE NODES TO STACK

//5)CONTINUE UNTIL STACK IS EMPTY

//difference is the order ->BFS uses shift ,DFS uses pop for dealing with nodes


const breadthFirstTraversal=(graph,source)=>{
    const queue=[]
    queue.push(source)

    while(queue.length>0){
        const node=queue.shift()
        console.log(node)
        for(let i=0;i<graph[node].length;i++){
            queue.push(graph[node][i])
        }
    }
}



const graph={
    a:['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}


depthFirstTraversal(graph,'a')
breadthFirstTraversal(graph,'a')