export { }
/* 
    通过映射类型来修改属性名
        - 可以通过as修改映射类型中属性名
        - 例子:
            [P in keyof Person as "hello"]
            "name" -> "hello"
            "name" | "age" -> "my_age" | "my_age"
*/

interface Person {
    name: string
    age: number
}
type NewPerson = {
    [P in keyof Person as `my${Capitalize<P>}`]: Person[P];
}

interface Person2 {
    name: string
    age: number
    1: number
}
/* 
    [P in keyof Person2 as `${string & P}`]
    "name" | "age" | 1   -> "name" | "age"  // | "never"
*/
type NewPerson2 = {
    [P in keyof Person2 as `${string & P}`]: Person2[P]
}
type NewPerson3 = {
    [P in keyof Person2 as `${Exclude<P, 1>}`]: Person2[P]
}
type NewPerson4 = {
    [P in keyof Person2 as `${Extract<P, "name" | "age">}`]: Person2[P]
}
type NewPerson5 = {
    [P in keyof Person2 as `my${Capitalize<string & P>}`]: Person2[P]
}
type NewPerson6 = {
    [P in keyof Person2 as P extends string ? `my${Capitalize<P>}` : never]: Person2[P]
}
