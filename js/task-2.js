function makeArray(firstArray, secondArray, maxLength){
    const arr = [].concat(firstArray, secondArray);
    if (arr.length >= maxLength){
        return arr.slice(0, maxLength);
    }
    else {
        return arr;
    }
}
