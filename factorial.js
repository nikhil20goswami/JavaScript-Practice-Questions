function factorial (ele){

    let fact = 1 ; 

    for (let i = 1 ; i <= ele ; i++){
        fact *= i;
    }
    return fact;

}

console.log(factorial(5));
