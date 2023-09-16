export { }
/* 
    映射类型
        - 根据已有的类型创建一个新的类型
        - 映射类型只支持对象语法
        - 创建映射类型时, 可以根据需要对原类型中的属性进行修改
        - 内置的工具类:
            Readonly<T>  创建一个所有属性都是只读的T类型
            Partial<T>  创建一个所有属性都是可选的T类型
        - 映射修改器:
            +Readonly
            -Readonly
            +?
            -?
*/

interface Person {
    name: string
    age: number
    address: string
}

interface Dog {
    age: number
}

// MyPerson 是对Person结构的完全复制
type MyPerson = {
    [P in keyof Person]: Person[P]
}
//将所有属性设置为只读属性
type Readonly<T> = {
    readonly [P in keyof T]: T[P]
}

//将所有属性设置为可选属性
type Partial<T> = {
    [P in keyof T]?: T[P]
}

interface Animal {
    name?: string;
    readonly age: number;
}

type MyAnimal = {
    -readonly [P in keyof Animal]-?: Animal[P]  //去除属性的可选 -?
}

let p: Readonly<Person> = { name: "swk", age: 18, address: "huaguoshan" }

let d: Readonly<Dog> = { age: 5 }

let p2: Partial<Person> = { name: "zbj" }



