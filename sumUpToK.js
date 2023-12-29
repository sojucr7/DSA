
function sumUpToK(array,k){

    array.sort((a,b)=>{
        return a-b
    })
    let left=0;

    let right=array.length-1;

    while(left<right){

        if(array[left]+array[right]==k){
            return true
        }

        if(array[left]+array[right]>k){
            right--
        }

        if(array[left]+array[right]<k){
            left++
        }

    }

    return false
}

console.log(sumUpToK([2,1,3,4,5,6],100))