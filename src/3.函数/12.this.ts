export { }
/* 
    this
        - 由于开启了严格模式, 直接访问this会出现问题
        - noImplicitThis开启后, 会禁止this有隐式的any类型
        - 咋函数中可以通过第一个参数来为this做类型注解
        - 在箭头函数中不能指定this
*/
function fn(this: any) {
    console.log(this);

}


class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    sayHello(this: Person) {
        console.log(this.name);
    }
    test = () => {
        console.log(this.name);
    }
}
function filterPerson(filter: (this: Person) => boolean): void { }

filterPerson(function () {
    this.name
    return true
})

//错误代码
/* filterPerson(() => {
    this.name
    return true
}) */