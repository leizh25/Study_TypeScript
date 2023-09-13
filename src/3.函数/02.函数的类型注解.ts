export { }
/* 
    函数的类型注解
        参数:
            1.参数名
                - 类型的参数名和值的参数名不需要一致
                - 最终的函数签名 以类型为准, 尽量将类型的参数名写的有意义一些
            2.参数的数量
                - 值中的参数数量不能多余类型定义额参数数量
                - 为了兼容旧版本的js函数, 所以值中的参数个数可以少于类型中定义的参数个数
            3. 参数的类型
                - "strictFunctionTypes": 开启时
                    - 值中的参数类型不能比类型中的参数类型还严格(具体)
                        值的参数类型 > 类型的参数类型
                - "strictFunctionTypes": 关闭时(双向协变)
                    - 此时只要值中的参数类型被类型中的参数类型包含即可
                strictFunctionTypes 对于方法无效, 只对函数有效
        返回值:
            void
                - void表示没有返回值 或返回值没用
*/

type MyFunction = (str: string, num: number) => string

let fn: MyFunction = (s: string) => "hello"

// fn("a", 123)

type MyFunction2 = (str: string | number) => string

let fn2: MyFunction2 = (a: string | number) => "hello" //这种方式赋值容易导致运行时异常

// fn2("hello")

interface MyObj {
    test(str: string | number): void
}

let obj: MyObj = {
    test(a: string) { },//strictFunctionTypes对于方法无效, 所以这里可能会出现运行时异常
}

type MyFunction3 = () => void
let fn3: MyFunction3 = () => "hello"

