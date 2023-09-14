export { }
/* 

*/

interface Inter {
    [key: symbol]: string
}

//创建一个符号
let s = Symbol()

let obj: Inter = {
    [s]: "hello"
}
console.log(obj[s]);

//索引签名可以混合使用
//下边的例子, 就避免了额外属性的检查
//其他属性的类型 必须时string属性的一个子类型
interface Inter2 {
    [propName: string]: any
    name: string
    gender: string
    age: number
}
interface Inter3 {
    [propName: string]: string | number
    [index: number]: number
}

let obj2: Inter2 = {
    name: "swk",
    gender: "男",
    address: "花果山",
    age: 18
}

let obj3: Inter3 = {
    name: "swk",
    0: 123,
    1: 123
}

// let obj4: Inter3 = [1, 2, 3]