export { }
/* 
交叉类型:
 -交叉类型使用&符链接, 要求值必须满足多种类型的要求
*/
interface Named {
    name: string
}
interface Aged {
    age: number
}
let a: Named & Aged = {
    name: "孙悟空",
    age: 18
}
a.name