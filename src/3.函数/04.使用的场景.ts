export { }
/* 

*/
type MyFunction = (str: string) => void

//直接使用函数类型限制变量
let fn: MyFunction = a => "hello"

//用来限制回调函数的结构
function eventHandle(event: string, callback: MyFunction) { }

eventHandle("hello", (a: string) => { })