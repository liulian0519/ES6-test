{
    console.log('a','\u0061')  //a
    console.log('s','\u20BB7')  //乱码+7当成连个字符

    console.log('s','\u{20BB7}');

}
//codepointat
{
    let s ='𠮷';
    console.log('length',s.length);  //2
    // es5
    console.log(s.charAt(0));
    console.log(s.charAt(1));
    console.log(s.charCodeAt(0)) //码职55362
    console.log(s.charCodeAt(1)) //码职57271

    let s1 = '𠮷a';
    console.log('length',s1.length); //3
    console.log('code',s1.codePointAt(0).toString(16));   //20bb7
    console.log('code',s1.codePointAt(1));  //57271
    console.log('code',s1.codePointAt(2));  //97
}
//fromcodepoint
{
    console.log(String.fromCharCode('0x20bb7')); //es5  乱码
    console.log(String.fromCodePoint('0x20bb7')); //es6
}
//遍历器接口
{
    let str= '\u{20bb7}abc';
    //es5
    for(let i=0;i<str.length;i++){
        console.log('es5',str[i]);
    }
    //es6
    for(let i of str){
        console.log('es6',i);
    }

}