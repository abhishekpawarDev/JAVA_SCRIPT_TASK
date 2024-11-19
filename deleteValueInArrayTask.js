// delete 4 number in array 

let arr = [1, 2, 3, 4, 5, 7, 9, 10, 12];

let newArr = arr.filter((i) => {
    return i !== 4

});

console.log(newArr);
