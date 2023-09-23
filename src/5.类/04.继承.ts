export { }
/* 
    继承:
        1.方便代码复用
        2.方便扩展(OCP开闭原则)
        3.多态
        4.JS的语法
    继承时发生了什么事:
        1.创建类时JS引擎会为每个类定义一个原型对象
        2.当一个子类继承父类时, 子类的原型会被设置为父类原型的实例
            Child[[prototype]] = 父类原型的实例
        3.当我们调用子类的构造函数创建子类实例时,JS引擎会自动调用super()来使用父类的构造函数初始化子类
 */
//父类 超类
class A {
    name:string
    constructor(){
        console.log("父类A的构造函数执行了");
        
        this.name = "孙悟空";
    }

    method() {
        console.log("method");
    }
}

//子类 派生类
class B extends A {
    //继承以后,如果需要重写构造函数,在构造函数中第一件事就是调用super()
    constructor(){
        super()
        
    }
    newMethod() {
        super.method()
        console.log("b添加的方法");

    }
}

class C{}

function fn(arg:Animal){}

class Animal{
    name:"动物"
}
class Dog extends Animal{}
class Cat extends Animal{}
class Snake  extends Animal {}

const obj:A = new B()
const obj2:Animal = new Dog()