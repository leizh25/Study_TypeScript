export { }
/* 
    重载签名
    实现签名
        - 实现签名不会在调用时显示
        - 实现签名应该覆盖重载签名的所有参数和返回值

        - 调用函数时,实参必须能和某个重载签名完全匹配, 否则会报错
        - 如果能够使用联合类型来实现,就尽量不用重载
*/

//这个重载没有太大意义
function fn(a: string): void
function fn(a: boolean, b: number): void
function fn() { }

function fn2(a: string): void
function fn2(a: boolean, b: number): void
function fn2(a: string | boolean, b?: number) { }



function len(str: string): number
function len(arr: any[]): number
function len(value: string | any[]): number {
    return value.length
}
len("hello")
len([1, 2, 3, 4])

//错误的
// len(Math.random() > .5 ? "hello" : [1,2,3,4,5])

function len2(value: string | any[]): number {
    return value.length
}
len2("hello")
len2([1, 2, 3, 4, 5])
len2(Math.random() > .5 ? "hello" : [1, 2, 3, 4, 5])