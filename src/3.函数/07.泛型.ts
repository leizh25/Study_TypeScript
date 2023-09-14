export { }
/* 
    泛型
*/

//定义一个函数,用来获取数组的第一个元素
//使用any类型确实可以满足要求,但与此同时也带来了一些隐患(非必要 不any)

/* 
问题:
    数组的类型只有在调用时才能知道, 在定义函数时无法确认定义函数

    能不能在函数调用时再指定类型呢?
*/

function firstElement<T>(arr: T[]):T {
    return arr[0]
}
let r1 = firstElement<string>(["hello","abc","哈哈"])
let r2 = firstElement<number>([1,2,3,4])

let str:Array<string>
