{
    let arr = Array.of(3,4,7,9,11);
    console.log('arr=',arr); //[3,4,7,9,11]

    let empty = Array.of();
    console.log(empty); //[]
}

{
    //将伪数组或集合转换为数组
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    pArr.forEach(function (item) {
        console.log(item.textContent);
    });
    //类似映射
    console.log(Array.from([1,3,5,7],function (item) {
        return item*2;
    }))
}
//fill
{
    console.log('fill-7',[1,5,5,4].fill(7)); //7 7  7 7
    console.log('fill.pos',['a','b','c','d','e'].fill(7,1,3));//a 7 7 d e
}
//遍历
{
    for (let index of ['1','c','ll'].keys()){
        console.log('keys',index); // 下标
    }
    for (let values of ['1','c','ll'].values()){
        console.log('values',values); // 值
    }
    for (let [index,values] of ['1','c','ll'].entries()){
        console.log('key-values',index,values); // 下标和值
    }
}

{
    //从第二个到第四个之前 覆盖从0开始
    console.log([1,2,3,4].copyWithin(0,2,4));//3434
}

{
    console.log([1,2,3,4,5,6].find(function (item) {
        return item>3  //4
    }));
    console.log([1,2,3,4,5,6].findIndex(function (item) {
        return item>3  //3  下标
    }));
}
{
    console.log('number',[1,2,NaN].includes(1)); //TRUE
    console.log('number',[1,2,NaN].includes(NaN)); //TRUE
}





