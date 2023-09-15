export { }
/* 
    元祖(tuple)
        - 元祖是一个特殊的数组
        - 使用元组时, 可以为每个元素分别指定类型, 同时可以限制元素的数量
        - 元祖就是数量固定,类型可以分别指定的数组
        - 除了数量固定, 类型分别指定外, 元祖和数组使用方式是一样的
        - 元祖适用于强约定的API
*/

let tuple: [string, number] = ["hello", 123]

function fn(person: [string, number, string]) { }

function fn2() {
    return [() => { }, true, false, null]
}

function fn3(a: string, b: number, ...args: [string, number, boolean]) { }
fn3("hello", 123, "aaa", 456, true)

let tuple2: readonly [string, number] = ["hello", 123]

/* 
    元祖也支持可选元素 和 可变元素
*/
let tuple3: [string, number?] = ["hello", 1]

let tuple4: [string, number, ...boolean[]] = ["hello", 123, false, true]
let tuple5: [string, ...boolean[], number] = ["hello", false, true, 123]
let tuple6: [...boolean[], string, number] = [false, true, "hello", 123]

console.log('tuple4: ', tuple4[5]);