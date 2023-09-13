export { }
/* 
    类型断言
        通过断言可以手动指定类型, 从而让变量的类型更加具体
        - 断言的语法:
            (<类型>变量).xxx
                - 不支持tsx
            (变量 as 类型).xxx
                - 推荐,使用范围比较广
        - 断言只在编译时有效,使用断言时, 一定要确保类型正确
*/
let str: unknown = "hello world";

(<string>str).length;
(str as string).length

