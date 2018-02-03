{
    function test(x,y = 'world') {
        console.log('默认',x,y);
    }
    test('hello'); //hello world
    test('hello','liulian') //hello liulian
}

{
    let x = 'test';
    function test2(x,y=x){
        console.log('作用域',x,y);
    }
    test2('kill'); //kill kill
}
{
    function test3(...arg) {
        for(let v of arg){
            console.log('rest',v);
        }
    }
    test3(1,2,3,4,'a');
}

{
   console.log('a',...[1,2,3])
}
{
    let arrow = v => v*2;
    let srr = ()=>5;
    console.log(arrow(3));
    console.log(srr());
}
//尾调用
{
    function tail(x) {
        console.log('tail',x);
    }
    function fx(x) {
        return tail(x);
    }
    fx(123);
}