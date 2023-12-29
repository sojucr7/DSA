function removeDuplicate(array){
    let set=new Set(array)
    return [...set]
}


console.log(removeDuplicate([1,2,2,3,4,5]))