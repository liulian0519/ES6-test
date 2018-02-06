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