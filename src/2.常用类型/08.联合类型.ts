export { }
/* 
联合类型
    - 联合类型允许某个值可以是多种类型中的一种
    - 使用联合类型时, 只能访问联合类型中共有的属性和方法
    - 如果想访问某个类型独有的属性或方法, 需要使用类型守卫 或 类型断言
*/
let a: string | number | boolean
a = "hello"
a = 123
a = true

interface Person {
    name: string
    age: number
}
interface Dog {
    age: number
}
let someone: Person | Dog = {
    name: "孙悟空",
    age: 12
}
someone = { age: 18 }

function fn(personOrDog: Person | Dog) { 
    (personOrDog as Person).age
    if("name" in personOrDog){
        personOrDog.name
    }
}


