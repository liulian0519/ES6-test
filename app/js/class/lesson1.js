/*---------------let-------------------*/
// function test(){
//     let a = 1;
//     console.log(a); //1
// }
// test();

// console.log(foo);
// var foo = 2;  //undefined

// console.log(bar);
// let bar = 2; //报错

// var a = [];
// for(var i = 0;i<10;i++){
//     a[i] = function () {
//         console.log(i);
//     };
// }
// a[6]();  //10

// var a = [];
// for(let i = 0;i<10;i++){
//     a[i] = function () {
//         console.log(i);
//     };
// }
// a[6]();  //6
/*-----------------const------------------------*/

// const pi = 3.1415926;
// console.log(pi); //3.1415926
// pi = 3 //出错

// const foo; //出错

function last(){
    const  k = {
        a:1
    }
    k.b = 3;
    console.log(k);
}
last();