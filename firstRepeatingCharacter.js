
function firstRepeatingCharacter(str){
    let visited={}
    for(let i=0;i<str.length;i++){
        if(visited[str[i]]){
            return str[i]
        }
        visited[str[i]]=true
    }
    return ""
}

console.log(firstRepeatingCharacter("inside code"))
console.log(firstRepeatingCharacter("abcd"))