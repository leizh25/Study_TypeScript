export { }
/* 
    访问器装饰器
        - 用于装饰访问器(get,set)
        - 参数和方法装饰器一样
*/

function setterLog(target: any, propName: string, descriptor: PropertyDescriptor) {
    const oldSet = descriptor.set
    descriptor.set = function (arg: any) {
        console.log(`${propName}被修改了 -- ${new Date()}`);
        oldSet?.call(this, arg)
    }

}
class Person {
    private _name: string

    constructor(name: string) {
        this._name = name;
    }
    @setterLog
    get name() {
        return this._name;
    }
    set name(name: string) {
        this._name = name
    }
}

const p = new Person('Tom');

p.name = "猪八戒"
console.log(p.name);

