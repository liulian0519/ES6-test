// import './class/lesson1'
// import './class/lesson2'
import 'babel-polyfill'
import './class/lesson4'
class  Test{
    constructor(){
        this.a = 'hello'
    }
}
let test = new Test();

document.body.innerHTML=test.a