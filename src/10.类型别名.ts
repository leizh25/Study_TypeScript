export { }
/* 
类型别名
    - 就是为类型起的别名, 使用type关键字来创建
    - 注意:类型别名不能重名
*/
type str = string
type bool = boolean
type strOrNumOrBool = string | number | boolean
let a: strOrNumOrBool

interface Named {
    name: string
}
interface Aged {
    age: number
}

type Person = Named & Aged