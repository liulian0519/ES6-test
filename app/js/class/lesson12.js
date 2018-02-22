{
    //基本定义额生成实例
    class Parent{
        constructor(name = 'liulian'){
            this.name = name;
        }
    }
    let s_parent = new Parent('soul');
    console.log(s_parent);
}
{
    //继承
    class Parent{
        constructor(name = 'liulian'){
            this.name = name;
        }
    }
    class Child extends Parent{

    }
    console.log(new Child());
}
{
    //继承
    class Parent{
        constructor(name = 'liulian'){
            this.name = name;
        }
    }
    class Child extends Parent{
        constructor(name='child'){
            super(name);
            this.type = 'child';
        }
    }
    console.log(new Child('hello'));
}
{
    //getter setter
    class Parent{
        constructor(name = 'liulian'){
            this.name = name;
        }
        get longName(){
            return 'mk'+ this.name
        }
        set longName(value){
            this.name = value;
        }
    }
    let v = new Parent();
    console.log('getter',v.longName);

    v.longName = 'hello world';
    console.log('setter',v.longName);
}
{
    //静态方法
    class Parent {
        constructor(name = 'liulian') {
            this.name = name;
        }
        static tell(){
            console.log('tell');
        }
    }
    Parent.tell();
}
{
    //静态属性
    class Parent {
        constructor(name = 'liulian') {
            this.name = name;
        }
        static tell(){
            console.log('tell');
        }

    }
    Parent.type = 'test';
    console.log(Parent.type);
}