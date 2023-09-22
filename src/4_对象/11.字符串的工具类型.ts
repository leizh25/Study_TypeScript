export { }
/* 
    Uppercase<StringType>
        - 将字符串字面量类型转换成大写
    Lowercase<StringType>
        - 将字符串字面量类型转换成小写
    Capitalize<StringType>
        - 将字符串字面量类型转换为首字母大写
    Uncapitalize
        - 将字符串字面量类型转换为首字母小写

*/
type MyType = "hello"

let a:Uppercase<MyType> = "HELLO"

let b:Lowercase<"HELLO"> = "hello"

let c:Capitalize<MyType> = "Hello"

let d:Uncapitalize<"HELLO"> = "hELLO"