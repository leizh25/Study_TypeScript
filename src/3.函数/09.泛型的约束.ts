export { }
/* 
    泛型的约束
        - 在定义泛型时, 可以通过extends关键字来对泛型进行约束
        - 语法:
            泛型 extends 类型
        - 例子:
            T extends {length:number}
            T extends keyof T
*/
function getLength<T extends { length: number }>(a: T): number {
    return a.length
}
getLength("hello")
getLength([1, 2])

function getProperty<T, K extends keyof T>(obj: T, prop: K) {
    return obj[prop]
}

interface Person { name: string, age: number, gender: string }

/* 
    keyof运算符:可以一个类型(接口, 类, 类型别名)获取对象中的所有属性名
*/
type objKeys = keyof Person //"name" | "age" | "gender"
let a: objKeys = "age"

getProperty({name:"孙悟空"},"name")