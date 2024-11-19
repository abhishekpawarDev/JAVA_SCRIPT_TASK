//Index and find index Method 

let arr = [1,2,3,4,5,6,7,8,9,10];
let std = ['Abhishek' , 'Jagdeep' , 'Anil'];
let newArr = arr.map((i)=>i*2);
console.log(newArr)

std.find((i)=>{
    if(typeof i  === 'string' && i.toLowerCase() || i.toUpperCase() === 'jagdeep'){
        console.log('Yup');
        return true;
    }
})


let indexFind = std.findIndex((i)=>{
    if(typeof i  === 'string' && i.toLowerCase() || i.toUpperCase() === 'jagdeep'){
        console.log('hmmmm...')
        return true;
    }
    return false;
})

console.log(indexFind)




