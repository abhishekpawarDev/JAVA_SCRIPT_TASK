//in array find string and count length

let arr = [1,2,6,7,'Abhishek','Jagdeep',9,'Abhishek'];
const findLengthAndCount=(searchString)=>{
 
let updateArr = arr.filter((i)=>{
    return i == searchString;
});
console.log(`Search Count: ${updateArr.length}, String Length: ${searchString.toString()?.length}`);   
}

findLengthAndCount('Jagdeep')