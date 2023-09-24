export { }
/* 
    方法装饰器
        - 用于对方法进行扩展,修改
        - 参数:
            1. target 被装饰的对象
                静态方法返回类,实例方法返回原型
            2. methodName 方法名
            3.descriptor  描述符
                {
                value: [Function: sayHello],
                writable: true, 可写
                enumerable: false,可枚举
                configurable: true 可配置
                }
            - 返回值:
                返回的对象会作为新的描述符使用
*/

function deco(target: any, methodName: string, descriptor: PropertyDescriptor) {
    // console.log(descriptor.value == target.sayHello);
    descriptor.value = () => {
        console.log("这是一个新函数");

    }


}

/* 
   创建一个装饰器,可以在方法调用时记录日志
 
*/
function logger(target: any, methodName: string, descriptor: PropertyDescriptor) {
    //获取旧方法
    const oldMethod:Function = descriptor.value
    descriptor.value = function (...args:any[]) {
        console.log(`${methodName}函数调用 - ${new Date()}`);
        let res = oldMethod.apply(this, args)
        console.log(`${methodName}函数调用结束 - ${new Date()}`);
        return res
    }
}

class Person {
    sayHello() {
        console.log("sayHello()方法");
    }
    @logger
    sum(a: number, b: number) {
        console.log("this: ",this);
        
        return a + b
    }
}

const p = new Person()
let res = p.sum(123, 456)
console.log('res: ', res);