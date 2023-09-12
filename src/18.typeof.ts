export { }
/* 
    typeof
        - 在js中可以用过typeof来检查值的类型, 会返回字符串作为结果
            string boolean number undefined function bigint symbol ...
        - 在ts中, 如果将typeof用在流程控制语句中(if, switch...),ts会根据typeof的结果自动对类型进行收窄 
*/

function doSomething(value: string | number) {
    if (typeof value == "string") {
        value.toUpperCase()
    } else {
        value += 10

    }

}