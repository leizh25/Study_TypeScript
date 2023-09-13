export { }
/* 
    接口 interface
    - 接口和类的作用很像, 但是不同点在于 接口是用来定义对象的结构的, 而类是用来创建对象
    - 定义接口, 在编译后的js文件中是看不到接口的
    - 定义接口时, 无需关心属性和方法的具体实现
    - 可以在接口中定义, 一个对象中含有哪些方法和属性
        属性的修饰符:
            ? 可选属性
                属性名?:类型
            readonly 只读属性
                readonly 属性名:类型

        方法:
            方法名():返回值
    - implement 接口除了可以限制对象外, 也可以用来限制类的定义
        - 通过让一个类来实现某个接口,来对该类进行限制
            类去实现接口时,必须包含接口中所有的属性
    - extends 接口自身也可以继承接口
*/
interface Person {
    readonly name: string,
    sayHello(): void
}

interface Person {
    age?: number
}

const p: Person = {
    name: "孙悟空",
    age: 18,
    sayHello() {
        console.log("你好");

    }
}
// p.name = ""

interface Animal {
    name: string,
    age: number
}

interface Snake extends Animal {
    length:number
}

const s:Snake = {
    name:"小蛇",
    age:18,
    length:18
}

//创建一个类实现Animal接口
class Dog implements Animal, Person {
    name: string
    age: number
    hello: string = "哈哈"
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    bark() {
        console.log("汪汪汪");

    }
    sayHello(): void {

    }
}

class Cat implements Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    miao() {
        console.log("喵喵喵");

    }
}

function fn(animal: Animal) {
    if (animal instanceof Dog) animal.bark()
    else if (animal instanceof Cat) animal.miao()
}
fn(new Dog("旺财", 5))
fn(new Cat("喵喵", 4))
