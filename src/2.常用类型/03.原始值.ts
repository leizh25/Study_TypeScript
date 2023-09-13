/* 
原始值:
    number
    string
    boolean
    bigint 大整数
    symbol 符号
*/
export { }
let a: number = 10
a = 0x123
a = 0b111
a = 0o1234
a = NaN
a = Infinity

let b: string = "hello"
b = `hello ${a}`

let c: boolean = true
c = false

let d: bigint = 100n
let e: symbol = Symbol()
