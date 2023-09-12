export { }
/* 
    断言
        - 断定一个事的真伪, 并判断错误时抛出异常
    断言函数:
        - 起到断言作用的函数
        - asserts 条件
        - 条件就是一个类型谓词
        - 断言函数用来为一个类型进行断言, 断言后变量的类型就会被TS收窄
            如果断言正确, 则什么也不需要做,如果断言错误, 断言函数中报错,抛出异常, 终止程序!

        - 这个断言函数有什么用? 使用场景是什么?
*/

interface Circle {
    kind: "circle"
    radius: number
}
function isCircle(value: any): asserts value is Circle {
    //断言函数通常不需要返回值, 通常会在类型断言失败时报错
    if (value.kind !== "circle") {
        throw new Error("value的类型不是Circle")
    }
}

let a: unknown = {}



// ; (a as Circle).kind
isCircle(a) //调用了断言函数, 那么在函数后边所有的a的类型都会被确认为Circle
console.log(a.kind);
