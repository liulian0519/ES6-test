{
    //ES5 原有的
    let regex = new RegExp('xyz','i');
    let regex2 = new RegExp(/xyz/g);
    console.log(regex.test('xyz123'),regex2.test('xyz123'));  //true true

    //es6 新增的
    let regex3 = new RegExp(/xyz/ig,'i');
    console.log(regex3.flags);
}
// y修饰符（与g修饰符的区别）
{
    let s = 'bbb_bb_b';
    let a1 = /b+/g;
    let a2 = /b+/y;
    console.log('one',a1.exec(s),a2.exec(s));//bbb   bbb
    console.log('two',a1.exec(s),a2.exec(s));// bb   null
    // console.log('t',a1.exec(s),a2.exec(s));
    console.log(a2.sticky) //true
}
//u修饰符 unicode>>两个字节
{
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A')); //true
    console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A')); //false

    console.log(/\u{61}/.test('a')); //false
    console.log(/\u{61}/u.test('a')); //true

    console.log('\u{20BB7}');//𠮷
//  . 不是万能的（.必须小于两个字节 \n \r 行分隔符 段分隔符）
    let s ='𠮷';
    console.log('u-11',/^.$/.test(s));//false
    console.log('u-12',/^.$/u.test(s));//true
/*----------*/
    console.log('test-1',/𠮷{2}/.test('𠮷𠮷')); //false
    console.log('test-2',/𠮷{2}/u.test('𠮷𠮷')); //true
    /*--*/
    //s修饰符（）
}