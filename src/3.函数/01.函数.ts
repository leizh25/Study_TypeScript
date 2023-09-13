export { }
/* 
    函数的类型注解
        1.Function
            - 开发几乎不用, 因为他的范围过于宽泛, 使用意义不大
        2.函数类型表达式 常用
            - 语法: (参数列表) => 返回值
        3.使用调用签名
            - 适用于更加复杂的函数
            - 调用签名需要在对象或接口中使用,使用后即表示该类型是一个可调用的类型
*/
let fn: Function
fn = (a: string) => { }

let fn2: (str: string) => string
fn2 = (str: string) => str.toUpperCase()

type MyFunction = (str: string) => string

//可调用的对象(函数)
type MyFunction2 = {
    (a: number, b: number): number
    hello: string
}
interface MyFun3 {
    (a: string, b: string): string
}

// let sum: MyFunction2 = function (a: number, b: number) { return a + b }
// sum.hello = "你好"

let getStr: MyFun3 = (a: string, b: string) => a + b

