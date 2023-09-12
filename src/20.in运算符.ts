export { }
/* 
    in 收窄
        - 通过检查类型中是否含有某个属性来收窄类型
*/
function fn(str: string | undefined) {
    if (str !== undefined) {
        str.length
    }
}

//定义一个标识圆形的接口
interface Circle {
    radius: number
}
//定义一个正方形的接口
interface Square {
    sideLength: number
}

type Shape = Circle | Square

function getArea(shape: Shape): number {
    if ("radius" in shape) {
        return Math.PI * shape.radius ** 2 //圆形的面积

    }

    return shape.sideLength ** 2 //正方形的面积
}


