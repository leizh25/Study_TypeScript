export { }
/* 
    静态属性(方法)
        - 通过类直接访问的属性(方法)
            类.属性名
        - 静态属性和静态方法是直接存储到类中!  在静态方法中只能访问静态属性和静态方法
             所以在静态方法中不能访问实例属性(方法)
            在静态方法中this就是当前的类
        静态属性可以通过#设置为私有,设置之后只能在内部访问

        静态属性不能使用类的泛型
*/

class MyClass {
    age: 123
    static #myStaticProperty: string;

    static myStaticMethod() {
        console.log(this.#myStaticProperty);
        console.log(this);
        console.log(MyClass);
        // this.age
    }
    //静态代码块  他里边的代码只会执行一次,并且是在类定义后立刻执行
    static {
        //在静态代码块中可以访问类中的静态属性和静态方法
        //通常我们会使用静态代码块对静态属性进行初始化(复杂的属性)
        console.log(this);
        console.log("静态代码块执行了 ");
        this.#myStaticProperty = "静态属性被初始化了"
        this.myStaticMethod()
    }
}

MyClass.myStaticMethod();
// MyClass.myStaticProperty

class Person<T>{
    name: T
    // static staticProp: T  //不能使用
    constructor(name: T) {
        this.name = name;
    }
}