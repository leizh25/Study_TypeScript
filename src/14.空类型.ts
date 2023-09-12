export { }
/* 
    空类型
    null
    undefined
        -null 和 undefined在ts中默认是所有类型的子类型,默认情况下, null和undefined可以赋值给任意类型
        - 但是这样一来会带来很多隐患, 建议在开发时,将 strictNullChecks 开启, 开启后Null和undefined智能赋值给对应的类型
    void
        - void表示空类型
        - 默认情况下void类型的变量可以接受undefined和null
            如果开启了 strictNullChecks, 则只能接受undefined
        - void用来指定没有返回值的函数的返回值类型
*/
let a: string | null = null

function greet(name: string | undefined) {
    if (typeof name == "string") {
        name.length
    }
}
function fn():void{
    return undefined
}


let b:void = undefined