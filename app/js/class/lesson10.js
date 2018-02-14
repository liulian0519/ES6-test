{
    //set
    let list = new Set();
    list.add(5);
    list.add(7);
    console.log('size',list.size); //2
}
{
    let arr = [1,2,3,4];
    let list  = new Set(arr);
    console.log('size',list.size); //4
}
{
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);
    console.log(list); //不报错 添加无效 1 2
    //去重
    let arr = [1,2,3,4,1,2];
    let list2 = new Set(arr);
    console.log('unq',list2); //1 2 3 4

    let arr1 = [1,2,3,4,"1",2];
    let list3 = new Set(arr1);
    console.log('unq',list3); //1 2 3 4 '1''
}
{
    let arr = ['add','delete','clear','has'];
    let list = new Set(arr);
    console.log('has',list.has('add')); //true
    console.log('delete',list.delete('add'),list.has('add'),list); //true false  delete clear has
    list.clear();
    console.log('list',list) //0 kong
}
{
    let arr = ['add','delete','clear','has'];
    let list = new Set(arr);

    for(let key of list.keys()){
        console.log('keys',key);
    }
    for(let values of list.values()){
        console.log('values',values);
    }
    for(let value of list){
        console.log('list',value);
    }
    for(let [key,value] of list.entries()){
        console.log('entries',key,value);
    }
    list.forEach(function (item) {
        console.log(item)
    })

}
//WeakSet
{
    let weaklist = new WeakSet();
    let arg={};
    weaklist.add(arg);
    //weaklist.add(2);
    console.log(weaklist);
}
//map
{
   let map = new Map();
   let arr = ['123'];
   map.set(arr,456);
   console.log(map,map.get(arr));
}
{
    let map = new Map([['a',123],['b',456]]);
    console.log(map);

    console.log('size',map.size); //delete 与set相同  清空也是 clear 遍历也相同

}
//WeakMap
{
    let weakmap = new WeakMap();
    let o={};
    weakmap.set(o,123);
    console.log(weakmap.get(o)); //123
}
//数据结构横向对比 增删改查
{
    //map
    let map = new Map();
    let array = [];
    //增
    map.set('t',1);
    array.push({t:1});
    console.info('map-array',map,array);
    //查
    let map_exist = map.has('t');
    let array_exist = array.find(item=>item.t);
    console.info('map_array',map_exist,array_exist);
    //改
    map.set('t',2);
    array.forEach(item=>item.t?item.t=2:'');
    console.info('map-array',map,array);
    //删
    map.delete('t');
    let index = array.findIndex(item=>item.t);
    array.splice(index,1);
    console.info('map-array',map,array);
}
{
    //set
    let set = new Set();
    let array=[];
    //增
}