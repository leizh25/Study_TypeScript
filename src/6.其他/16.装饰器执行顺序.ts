export { }
/* 
    装饰器工厂
*/
function deco(name: string) {
    // console.log("工厂调用", name);

    return function (...args: any[]) {
        // console.log("装饰器执行了: ", name);

    }
}

/* 
    工厂顺序: 实例 -> 静态 -> 类
*/


@deco("类装饰器")
class Person {
    @deco("实例属性")
    name = "孙悟空"

    @deco("静态属性")
    static age = 18

    @deco("实例方法")
    sum(a: number, @deco("实例参数") b: number) {
        return a + b
    }

    @deco("静态方法")
    static sayHello(@deco("静态参数") a: string) {
        console.log("hello ", a);
    }
}



function f(name: string) {
    return function (target: any, methodName: string, descriptor: PropertyDescriptor) {
        const oldMethod = descriptor.value
        descriptor.value = function () {
            console.log(`${name}开始`);
            oldMethod()
            console.log(`${name}开始`);


        }
    }
}

/* 
    1开始
    2开始
    3开始
    test方法
    3开始
    2开始
    1开始
*/
class Dog {
    @f("1")
    @f("2")
    @f("3")
    test() {
        console.log("test方法");

    }
}
new Dog().test()