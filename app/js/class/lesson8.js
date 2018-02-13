{
   let a = 1;
   let b = 2;
   let es5={
       a:a,
       b:b
   };
   let es6={
       a,
       b
   };
   console.log(es5,es6);

   let es5_method ={
       hello:function () {
           console.log('hello');
       }
   };
   let es6_method = {
       hello(){
           console.log('hello');
       }
   };
   console.log(es5_method.hello(),es6_method.hello());
}
{
    //属性表达式
    let a = 'b';
    let es5={
        a:'c'
    };
    let es6={
        [a]:'c'
    }
    console.log(es5,es6)
}
{
    //新增api
    console.log('字符串',Object.is('abc','abc'),'abc'==='abc');
    console.log('数组',Object.is([],[]),[]===[]);

    console.log('copy',Object.assign({a:'a'},{a:'b'}));//浅复制

    let test = {k:123,o:456}
    for(let [key,value] of Object.entries(test)){
        console.log([key,value]);
    }
}
{
    //扩展运算符
    // let {a,b,...c}={a:'teee',b:'kill',c:'ddd',d:'sss'};
    // c={
    //     c:'ddd',
    //     d:'sss'
    // }
}