// cho 1 array co 10 so bat ky, tim so lon nhat trong array
let array = [4, 2, 7, 1, 10, 6, 3, 8, 20, 2];
let maxNumber = array[0]
array.forEach((element) => {
   if (element > maxNumber) {
    maxNumber = element;
   }  
})
console.log(maxNumber);