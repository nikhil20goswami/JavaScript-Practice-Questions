function largestInArray(arr){

    let largest = arr[0];

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

console.log(largestInArray([10,20,30,40,50,100,30]));
