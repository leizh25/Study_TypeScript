export { }
/* 
    unknown
    -未知类型
    -他的作用和any很像, 可以为一个unknown类型的变量 赋任意类型值
     但是却不能任意的使用unknown类型
    - 要使用unknown类型的变量, 需要结合类型断言或类型守卫
*/

let a: unknown
a = 123
a = "hello"
a = [1, 2, 3];

// (<string[]>a).length
(a as number[]).length

console.log((<string[]>a).length);

a = "string"

if(typeof a === "string") a.toUpperCase()

