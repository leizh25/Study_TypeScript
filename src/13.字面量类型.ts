export { }
/* 
    字面量类型
        - 就是将一个值指定为类型
        - TS中常用的字面量类型string , number
        - 通常来讲, 字面量都会结合联合类型使用, 用来限制某个值的范围

    类型推断
        - 当我们为一个常量直接赋值一个字面量时,他的类型会自动被推断为当前字面量
        - 推断对象类型时, let和const没有区别
    
    as const (常量断言)
        - 将一个值或对象断言为常量
*/

type Direction = "left" | "right" | "up" | "down"
type Directive = 1 | 2 | 3 | 4 | 5 | 6

let dir: Direction = "down"
let dice: Directive = 1  // ctrl + i 智能提示

let a = "hello" //string
const b = "hello" //"hello"

let c = { x: 1, y: 2 } //推断对象类型时, let和const没有区别
const d = { x: 1, y: 2 }

let e = "haha" as const  //等价于 let e:"haha" = "haha"
const f = { x: 1, y: 2 } as const //对对象进行常量断言时, 对象会变成只读对象

