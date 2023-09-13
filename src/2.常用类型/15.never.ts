export { }
/* 
    never 
        - 表示永远不可能出现的类型
        - 任何值都不能赋值给never
        - 使用场景
            1. 用来设置不可能执行完毕的函数的返回值类型
            2. 用来对类型进行安全检查

*/
let a: never

function fn(): never {
    throw new Error("哈哈出错了")
}
// function fn2(): never {
//     while (true) { }
// }

type Direction = "left" | "right" | "top"

function fn3(dir: Direction) {
    switch (dir) {
        case "left":
            console.log("向左");
            break
        case "right":
            console.log("向右");
            break
        case "top":
            console.log("向上");
            break
        default:
            const unReachable: never = dir
            break

    }
}

