export { }
/* 
    类型收窄
        - 将一种宽泛的类型限制为更具体的类型
    
    控制流分析
        - 通过控制流分析, 我们能够在不同的代码路径中获得变量更精确的类型
        - 代码执行时,TS会对代码执行过程进行分析
            通过对代码流程的分析,从而使得变量的类型变得更加的具体精确

*/

function doSomething(value: string | number) {
    if (typeof value == "string") {
        value.toUpperCase()
    } else {
        value += 10

    }

}
