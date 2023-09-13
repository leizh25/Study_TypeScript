export { }
/* 
    instanceof
        - 用来检查某个类的原型是否出现在了某个对象的原型链上
        - instanceof 只适用于检查类和实例的关系
*/
function fn(value: string[] | Date | number) {
    // if (value instanceof Object) {
    //     value
    // } else {
    //     value
    // }

    if(Array.isArray(value)){
        value
    }
}

