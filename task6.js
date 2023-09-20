let arr = [4, 5, 4];

let theSame = true;
for (let i = 0; i < arr.length; i++){
    for (let j = i; j < arr.length; j++){
        if (arr[i] !== arr[j]){
            theSame = false;
        }
    }
}
if (theSame) {
    console.log("true");
} else {
    console.log("false");
}