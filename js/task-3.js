function filterArray(numbers, value){
let arr = [];
for (let num of numbers){
    if (num > value){
        arr.push(num);
    }
}
return arr;
}
