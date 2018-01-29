/*解构赋值*/
//数组解构赋值
{
    let a,b,rest;
    [a,b] = [1,2];
    console.log(a,b); //1 2
}

{
    let a,b,rest;
    [a,b,...rest]=[1,2,3,4,5,6,7];
    console.log(a,b,rest); //1 2 [3 4 5 6 7]
}
//对象解构赋值
{
    let a,b;
    ({a,b}={a:1,b:2})
    console.log(a,b); //1 2
}
//
{
    let a,b,c,rest;
    [a,b,c=3] = [1,2];
    console.log(a,b,c); //1 2 3  如果删去c=3 则输出undifined
}
//数组使用场景
//变量交换
{
    let a = 1;
    let b = 2;
    [a,b] = [b,a];
    console.log(a,b); //2 1
}
//函数返回值
{
    function  f() {
        return [1,2]
    }
    let a,b;
    [a,b] = f();
    console.log(a,b); //1 2
}
//只关心自己想要的
{
    function f() {
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,,,b]=f();
    console.log(a,b); //1 4
}
//
{
    function f() {
        return [1,2,3,4,5,6]
    }
    let a,b,c,d;
    [a,...b]=f();
    [c,,...d]=f();
    console.log(a,b); //1 [2 3 4 5 6]
    console.log(c,d); //1 [3 4 5 6]
}
//对象使用场景
{
   let o ={p:42,q:true};
   let {p,q}=o;
   console.log(p,q); //42 true
}
//默认值
{
    let {a=10,b=5}={a:3};
    console.log(a,b); //3 5
}
//
{
    let metData = {
        title:'hahah',
        test:[{
            title:'test',
            desc:'description'
        }]
    }
    let {title:esTitle,test:[{title:cnTitle}]}=metData;
    console.log(esTitle,cnTitle); //hahah  test
}


