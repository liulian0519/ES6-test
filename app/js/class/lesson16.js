{
    let readonly = function (target,name,descriptor) {
        descriptor.writable=false;
        return descriptor
    };
    class Test{
        @readonly
        time(){
            return '2018-05-08'
        }
    }
    let test = new Test();
    //以下代码会出错
    // test.time=function()
    // {
    //     console.log('reset time');// Cannot assign to read only property 'time' of object
    // }
    console.log(test.time());
}
{
    let typename = function (target,name,descriptor) {
        target.myname = 'hello';
    }
    @typename
    class Test{

    }
    console.log('类修饰符',Test.myname);
}