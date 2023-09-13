export { }

/* 
    any
        - 表示任意类型
        - 当为一个变量设置any后, 他可以接收任何值
            同时也可以赋值给任意类型的变量
        - 当一个变量设置any类型后, 他将跳过所有的类型检查
            可以对他调用任意属性或方法, 这将导致运行时异常的概率大大增加
        - 基于以上特点,在开发室尽量不要使用它
*/

let a: any
a = 123
a = "hello"
a = [1, 2, 3, 4]

let b: boolean = a

let c //声明变量没有注解也没有赋值, 类型会被推断为any

function sum(a: number, b: number) {
    return a + b
}
sum(a, 123)

console.log(a.length);
