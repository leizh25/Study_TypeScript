export { }
/* 
    重载
        - 重载指为一个函数提供多个函数签名, 跟传递的参数不同调用不同的函数签名
        - 一个函数对应多个函数
        - 语法:
            函数签名1
            函数签名2
            ...
            函数实现(){}
            - 当我们调用函数重载时, TS会自动根据参数的个数和类型自动自上向下匹配签名
*/
/* 
function sum(a: number | string, b: number | string): number | string {
    if (typeof a === "number" && typeof b === "number") {
        return a + b
    } else if (typeof a === "string" && typeof b === "string") {
        return a + b
    }
    throw new Error("Type Error")
}
let res = sum("hello", "abc")
console.log('res: ', res);
 */

function sum(a: string, b: string): string
function sum(a: number, b: number): number
function sum(a: string | number, b: string | number): string | number {
    if (typeof a === "string" && typeof b === "string") return a + b
    else if (typeof a === "number" && typeof b === "number") return a + b
    throw new Error("Type error")
}
let res = sum("123", "456")
