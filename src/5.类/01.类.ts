export { }
/* 
    面向对象(oop)
        - JS是一个面向对象的编程语言
        - 面向对象指在程序中做的所有操作都需要通过哦对象来完成
    对象(object)
        - 编程语言是对现实事物的抽象
        - 具体 抽象
        - 具体的事物抽象到计算机里后就变成了一个对象
        - 例子:
            浏览器窗口 -> window对象
            网页 -> document对象
            控制台 -> console对象
    程序是如何对具体事物进行抽象的?
        - 一个事物再复杂,无非由两部分组成
            1. 数据(属性)
            2. 行为(方法)

    类(class)
        - 对象的模板,通过类可以批量创建对象
        - 使用class关键字
            - 类由两部分构成
                属性 properties
                    - 属性, 字段, 成员变量
                    - 直接在类中定义
                    - 如果开启了 strictPropertyInitialization选项, 则要求属性必须进行正确的初始化
                    - 初始化:
                        1. 直接在属性声明处
                            name = "孙悟空"  进行初始化
                        2. 可以在构造函数中对属性进行初始化
                            constructor(name:string){
                                this.name = name  //在构造函数中对属性进行初始化
                            }
                方法 methods
                    - 
*/

class Person {
    name: string  //添加name属性
    age!: number  //非空断言, 不需要在类中对属性进行初始化, 但是一定要记得在其他地方初始化
    //构造函数用来在创建对象时执行一系列的操作
    constructor(name: string) {
        this.name = name  //在构造函数中对属性进行初始化
    }
    //正常的方法, 添加到原型上,不会重复创建多个, 所有的实例共享
    sayHello() {
        console.log(`大家好,${this.name}在这里祝大家工作顺利`);
    }
    //通过属性的方式添加的方法, 添加到实例上
    //不推荐使用
    test = () => {
        console.log("测试方法", this.name);

    }
}
const p = new Person("swk")
p.age = 19
const p2 = new Person("猪八戒")
p2.age = 88

console.log('p: ', p);
p.sayHello();
p.test()
console.log('p2: ', p2);
p2.sayHello()