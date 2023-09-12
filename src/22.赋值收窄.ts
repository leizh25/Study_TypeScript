export { }
/* 
    赋值收窄
        - 当我们为一个联合类型类型的变量赋一个准确的值时, TS会自动根据所赋的值对变量的类型进行收窄
*/

let x: number | string | boolean
x = 10

x = "hello"

x = true


