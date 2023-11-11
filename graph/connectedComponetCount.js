const connectedComponentCount=(graph)=>{

    let visited = new Set()

    let islandCount=0;

    for(key of Object.keys(graph)){
        if(island(graph,key,visited)){
            islandCount+=1
        }
    }
    return islandCount
}

const island=(graph,src,visited)=>{

    if(visited.has(Number(src))){
        return false
    }

    const queue=[src]

    while(queue.length){

        const current = queue.pop()

        if(visited.has(current)){
            continue
        }

        visited.add(Number(current))


        for(let i=0;i<graph[current].length;i++){
            
            queue.push(graph[current][i])
        }
    }

    return true
}



const connectedComponentCountRecursive=(graph)=>{

    let visited = new Set()

    let islandCount=0;

    for(key of Object.keys(graph)){
        if(islandRecursive(graph,key,visited)){
            islandCount+=1
        }
    }
    return islandCount
}

const islandRecursive=(graph,src,visited)=>{

    if(visited.has(Number(src))){
        return false
    }

    visited.add(Number(src))

    for(let i=0;i<graph[src].length;i++){
            
        islandRecursive(graph,graph[src][i],visited)
    }

    return true
}

const graph={
    3:[],
    4:[6],
    6:[4,5,7,8],
    8:[6],
    7:[6],
    5:[6],
    1:[2],
    2:[1],
    20:[3],
    3:[20]
}

console.log(connectedComponentCountRecursive(graph))

