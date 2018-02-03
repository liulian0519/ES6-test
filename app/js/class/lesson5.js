{
    console.log('2进制',0b111110111); //503
    console.log('八进制',0o767);      //503
}
//数是否有限
{
   console.log('15',Number.isFinite(15));
    console.log('0.5',Number.isFinite(0.5));
    console.log('NaN',Number.isFinite(NaN));
}
//是否为NAN
{
    console.log('nan',Number.isNaN(NaN));
    console.log('0',Number.isNaN(0));
}
//判断是否为整数
{
    console.log('25',Number.isInteger(25));
    console.log('25.00',Number.isInteger(25.00)); //true
    console.log('25.1',Number.isInteger(25.1));
}
//-2^53 …… 2^53安全整数
{
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.MIN_SAFE_INTEGER);
    console.log('10',Number.isSafeInteger(10)); //true
    console.log('a',Number.isSafeInteger('a')); //false
}
//返回整数部分
{
    console.log(4.1,Math.trunc(4.1)); //4
    console.log(4.9,Math.trunc(4.9)); //4
}
//判断一个数是正数1 负数-1还是00
{
   console.log(-5,Math.sign(-5));  //-1
    console.log(0,Math.sign(0));   //0
    console.log(5,Math.sign(5));   //1
    console.log('20',Math.sign('20'));//1
    console.log('f00',Math.sign('foo'));//NaN
}
{
    //开3次跟
    console.log(Math.cbrt(512))  //8
}