function maxSubArray(array){
    let globalSum=-Infinity
    let localSum=0
    for(let i=0;i<array.length;i++){
        localSum=Math.max(array[i],localSum+array[i])
        globalSum=Math.max(globalSum,localSum)
    }
    return globalSum
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
