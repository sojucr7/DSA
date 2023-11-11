

const hasPath=(graph,source,destination)=>{

    let visited =new Set()

    const queue=[source]    

    while(queue.length){

        let current=queue.pop()

        if(visited.has(current)){
            continue
        }
        visited.add(current)

        if(current==destination) return true

        for(let i=0;i<graph[current].length;i++){

            queue.push(graph[current][i])
        }
    }

    return false

}


const hasPathRecursive=(graph,source,destination,visited)=>{

    if(source==destination) return true

    if(visited.has(source)) return false

    visited.add(source)
    
    for(let i=0;i<graph[source].length;i++){

        if(hasPathRecursive(graph,graph[source][i],destination,visited)==true){
            return true
        }
    }

    return false
}   

const graph={
    'i':['j','k'],
    'j':['i'],
    'k':['i','m','l'],
    'm':['k'],
    'l':['k'],
    'o':['n'],
    'n':['o']
}

console.log(hasPath(graph,'i','o'))
console.log(hasPath(graph,'i','j'))
console.log(hasPath(graph,'i','k'))


console.log(hasPathRecursive(graph,'i','o',new Set()))
console.log(hasPathRecursive(graph,'i','j',new Set()))
console.log(hasPathRecursive(graph,'i','k',new Set()))


