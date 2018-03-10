// {
//     let arr = ['hello','world'];
//     let map = arr[Symbol.iterator]();
//     console.log(map.next());
//     console.log(map.next());
//     console.log(map.next());
// }
// {
//     let obj = {
//         start:[1,3,2],
//         end:[7,9,8],
//         [Symbol.iterator](){
//             let self = this;
//             let index = 0;
//             let arr = self.start.concat(self.end);
//             let len = arr.length;
//             return{
//                 next(){
//                     if(index<len){
//                         return {
//                             value:arr[index++],
//                             done:false
//                         }
//                     }else {
//                         return{
//                             value:arr[index++],
//                             done:true
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     for(let key of obj){
//         console.log(key);
//     }
// }
{
    //字符串的iterator
    var someString = 'hi';
    // console.log(typeof someString[Symbol.iterator]);//function
    var iter = someString[Symbol.iterator]();
    console.log(iter.next());
    console.log(iter.next());
    console.log(iter.next());

}
{
    //修改方法达到修改遍历器的目的
    var str = new String('hi');
    console.log([...str]);//hi
    str[Symbol.iterator] = function () {
        return {
            next:function () {
                if(this._first){
                    this._first = false;
                    return {value:'bye',done:false};
                }else{
                    return {done:true};
                }
            },
            _first:true
        };
    };
    console.log([...str]);//bye
    console.log(str); //hi
}
// {
//     let arr = ['hello','world'];
//     for(let value of arr){
//         console.log('value',value);
//     }
// }