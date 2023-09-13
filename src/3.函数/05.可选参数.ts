export { }
/* 
    在定义函数类型时, 可以将参数设置为可选参数
        - 只需要在参数后面添加一个? 则表示当前参数是一个可选的参数
        - 可选参数可以设置多个, 他们必须位于参数列表的最后
            可选参数后边只能是可选参数
*/
type MyFn = (num: number, str?: string) => void

let fn: MyFn = (a, b) => {
    if (typeof b === "string") console.log(b.length);

}



