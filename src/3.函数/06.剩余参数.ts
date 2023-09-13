export { }
/* 
    剩余参数  rest
        - 剩余参数只能有一个, 以...开头, 声明时需要添加数组类型的注解
*/
type MyFn = (a: string, b?: number, ...args:any[]) => void


