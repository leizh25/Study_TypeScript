export { }
/* 
    条件类型
        - 根据不同的条件返回不同的类型
        - 语法:
            T extends U ? X : Y
        - 条件类型在常规开发中几率并不高
            主要用来开发编写一些类型工具
*/

let a: number

type isString<T> = T extends string ? "YES" : "NO"

let b: isString<number>

type NumberArr = string[]


//获取数组类型的元素类型  infer用来表示TS的自动推断
type ElementType<T> = T extends Array<infer U> ? U : T

//希望c的类型和NumberArr的元素类型相同
let c: ElementType<NumberArr>
