export { }

/**
 * 类型推断
 * 当我们没有明确指定一个变量的类型时,TS会自动对变量的类型进行推断
 * 所以,通常情况下我们不需要为变量设置类型注解,都交给TS自动推断
 * 
 * 但是某些场景下,TS无法正确推断出变量的类型,此时我们必须要为变量添加类型注解
 */

let a = "hello"
let c //这种情况下无法推断正确类型, 必须手动注解
c = "abc"
c = 123


