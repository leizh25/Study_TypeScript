export { }
/* 
    非空断言
*/
function fn(str: string | null) {
    if (typeof str == "string") {
        str.length
    }

    ; (str as string).length

    let num = str!.length //非空断言 str不为空

    let num2 = str?.length //可选链

}