export { }
/* 
object 表示一个对象 (除了原始值以外的任何值)
    - object所表示的对象范围太过宽泛
     - 所以调用object的属性或方法时, 必须要进行类型检查
     - 开发时不推荐使用object

    {} 使用对象字面量可以直接声明一个类型   (不便于重复使用)
    语法:
    {
        属性名:类型;
        ...
        可选属性?:类型;
    }


    class  直接使用class来声明对象的类型
        - 使用class进行类型注解时,类本身也会被编译到js文件中
    interface TS中独有,JS并不支持
      - 他的定义方式和类相似
      - 注意: interface只用来做类型注解,无法用来创建对象, 同时不会被编译到js文件中
*/
let obj: object = { name: "孙悟空" }

// obj = new Date()

if ("name" in obj) {
    console.log(obj.name);
}

let obj2: { name: string; age?: number } = { name: "孙悟空", age: 18 }

// obj2.name = "孙悟空"
console.log(obj2.name);
console.log(obj2.age);


function sum(a: number, b: number): number {
    return a + b
}
if (typeof obj2.age == "number") sum(123, obj2.age)


class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}
interface Dog {
    name: string
    age: number
}

// let p1: Person = { name: "孙悟空", age: 18 }
// let p2: Person = { name: "猪八戒", age: 28 }
// let d: Date = new Date()
// let re: RegExp = /a/
let d1: Dog = { name: "旺财", age: 5 }


