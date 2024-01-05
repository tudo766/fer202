let bp =(number)=>{
    console.log((number*number));
}
bp(5)
let bp2 =(number)=> number*number;
console.log(bp2(5));

let checknum=(number) => {
    if(number%2==0) console.log('so chan');
    if(number%2!=0) console.log('so le');
}
checknum(4)