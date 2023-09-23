export { }
/* 
    枚举(Enum)
        - 枚举就是常量的集合
        - 使用enum关键字来定义一个枚举
            默认情况下,成员的至自上向下为0开始的整数, 也可以根据需要自行指定成员的值
        - 声明枚举时,使用const关键字,会使得枚举变为常量枚举
            常量枚举使用时会直接转换为字面量,不会被编译到JS中, 所以所有的运行时功能都不支持
*/

let status = 1
enum Status {
    Pending,
    Approved,
    Rejected,
}


if (status === Status.Pending) console.log("加载中");
else if (status === Status.Approved) console.log("加载完毕");
else if (status === Status.Rejected) console.log("加载失败");

let a = Status.Approved;
let b = Status[2]
// console.log(a,b);

enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue",
}
function setColor(color: Color) { }
setColor(Color.Blue)


const enum Num {
    One, Two, Three
}
let c = Num.One   //常量枚举
let d = Color.Red //普通枚举

