{
    //声明
     let a1 =Symbol();
     let a2 = Symbol();
     console.log(a1 === a2); //false
     let a3 = Symbol.for('a3');
     let a4 = Symbol.for('a3');
     console.log(a3 === a4); //true
}
{
    let a1 = Symbol.for('abc');
    let obj={
        [a1]:'123',
        'abc':345,
        'c':456
    }
    console.log(obj);  //{abc: 345, c: 456, Symbol(abc): "123"}

    for (let [key,values] of Object.entries(obj)){
        console.log('let of',key,values);// abc 345  c 456
    }
    //新的api
    //只拿到symbol
    Object.getOwnPropertySymbols(obj).forEach(function (item) {
       console.log(obj[item]); //123
    })
    //所有的key value
    Reflect.ownKeys(obj).forEach(function (item) {
        console.log('ownKeys',item,obj[item]);
        //ownKeys abc 345  c 456  Symbol(abc) 123
    })
}
