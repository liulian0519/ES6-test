{
    console.log('a','\u0061')  //a
    console.log('s','\u20BB7')  //乱码+7当成连个字符

    console.log('s','\u{20BB7}');

}
{
    let s ='𠮷';
    console.log('length',s.length);  //2
    // es5
    console.log(s.charAt(0));
    console.log(s.charAt(1));
    console.log(s.charCodeAt(0)) //码职
    console.log(s.charCodeAt(1)) //码职

    let s1 = '𠮷a';
    console.log('length',s1.length); //3
    console.log('code',s1.codePointAt(0).toString(16))   //20bb7
}