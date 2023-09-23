export { }
/* 
    模板字符串定义字面量类型,可以和其他类型进行拼接
*/

type Fruit = "apple" | "orange" | "banana"

type Hello = `Hello ${Fruit}`

//监视对象的属性变化,并且获取到新的值
/* 
    obj  被监视的对象
    event 事件名   xxxChanged
    callback  回调函数
*/
function eventHandler<T,K extends string & keyof T>(obj: T, eventName: `${K}Changed`, callback: (newValue: T[K]) => void) { }

eventHandler({ name: "swk", age: 18, gender: "nan" }, "ageChanged", newValue => { })