export { }
/* 
    类型谓词
*/

function fn(str: string | undefined) {
    if (str !== undefined) {
        str.length
    }
}

//定义一个标识圆形的接口
interface Circle {
    kind: "circle"
    radius: number
}
//定义一个正方形的接口
interface Square {
    kind: "square"
    sideLength: number
}

type Shape = Circle | Square

/* 
    在对值的类型进行判断时,如果有一些类型需要经常判断 或有些类型判断比较复杂, 此时我们就习惯性希望可以将这些验证封装到一个函数中, 
        然后通过函数的返回值来判断这个类型
    但是如果直接创建一个返回布尔值的函数, 对于ts来说, 这就是一个普普通通的函数, 无法用来进行类型收窄

    类型谓词:
        - 类型谓词是一个特殊的返回值类型, 设置后TS会根据函数的返回值来对值的类型进行收窄
        - p is T  (实例 is 类型)
*/

//创建一个函数, 用来验证shape是否是圆形
function isCircle(shape: Shape): shape is Circle {
    return shape.kind === "circle"
}

function getArea(shape: Shape): number {
    if (isCircle(shape)) {
        return Math.PI * shape.radius ** 2 //圆形的面积

    }

    return shape.sideLength ** 2 //正方形的面积
}


