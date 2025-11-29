function arrEditor(arr){
    arr.push(10);
    console.log(arr ,'after push');
    arr.unshift(5);
    console.log(arr , 'after unshift');
    arr.pop();
    console.log(arr, 'array after pop')
}

console.log(arrEditor([7,23,4,5,1,7]))