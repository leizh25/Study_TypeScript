export { }
/* 
    泛型
        - 泛型是一种定义函数,类,接口,类型别名时不指定具体类型, 而在使用时再指定类型的变成方法
        - 泛型也可以被推断, 如果使用时不指定泛型的类型,TS会自动推断其类型
*/

function fn<T>(arg: T): T {
    return arg
}
fn<string>("hello")
interface MyInterface<T> {
    get(): T
}
class MyClass<T>{
    property: T
}
type MyType<T> = T