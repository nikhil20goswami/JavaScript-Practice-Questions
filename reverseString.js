// Method 1 

function reverseString(str){
    let reversed = "";
    
    for(let i = str.length - 1 ; i >= 0 ; i--){
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("Nikhil"));


// Method 2

// function reverseString(str){
//     return str.split("").reverse().join("");
    
// }


// Method 3

// function reverseString(str){
//     let reversed = "";
//     let i = str.length - 1 ;

//     while(i >= 0){
//         reversed += str[i];
//         i--;
//     }
//     return reversed ;
// }