export { }
/* 
    属性装饰器
        - 属性装饰器定义在属性之上, 不能修改属性!
        - 主要用来在属性上附加一些元数据
        - 属性装饰器需要两个参数:
            1. target  被装饰的目标
                如果是静态属性,target是类(Class)
                如果是实例属性,target是原型(CLass.prototype)
            2. propertyName
                属性名
        - 属性装饰器,无法对实例属性进行任何实质的读取和修改
            在属性装饰器中,只能对原型进行一些操作
*/

function deco(target: any, propName: string) {
    console.log(target, propName);
    // console.log(target[propName]);
    target.fn = function(){}



}

class Person {
    @deco
    name = "孙悟空"
    @deco
    static age = 18
}

