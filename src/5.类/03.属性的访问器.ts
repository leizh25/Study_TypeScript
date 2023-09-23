export { }
/* 
    属性的访问器(Getter Setter)
        - 操作属性的方法
        - 通过他们可以避免直接去修改和读取属性
        - 使用访问器的有点:
            1.可以在读取和设置属性时添加逻辑 
            2.方便我们控制属性的访问权限
*/
class Person {
    //#符号标识的属性是私有属性,只能在类内部使用,这是JS的语法
    #name: string
    #age: number
    constructor(name: string, age: number) {
        this.#name = name;
        this.#age = age;
    }
    //get方法用来返回属性值
    get name() {
        // console.log("get方法执行了");

        return this.#name.replaceAll("空", "*");
    }
    set name(name: string) {
        this.#name = name;
    }
    get age() {
        return this.#age
    }
    set age(age: number) {
        if (age >= 0) this.#age = age
    }
}

let p = new Person("孙悟空", 18)
// p.name = "zbj"
// p.age = 33

p.name = "猪八戒"

p.age = -10


console.log(p.age);

