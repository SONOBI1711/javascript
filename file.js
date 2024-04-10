// delta = b^2 - 4ac
// ax^2 + bx + c = 0
console.log(1);
const a = 1;
const b = -4;
const c = 1;
console.log(2);
const giai_phuong_trinh= (a, b, c) => {
    const delta = Math.pow(b, 2) - 4*(a*c);
    console.log(3);
    if(delta < 0) {
        console.log("phuong trinh vo nghiem");
    }
    else if(delta === 0) {
        const x = -b/(2*a)   
        console.log("phuong trinh co 1 nghiem", x);
    } 
    else {
        const x1 = (-b + Math.sqrt(delta))/(2*a);
        const x2 = (-b - Math.sqrt(delta))/(2*a);
        console.log("pt 2 nghiem", x1, x2);
    }
}
console.log(4);
giai_phuong_trinh(a, b, c)
console.log(5);