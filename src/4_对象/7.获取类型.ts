export { }
/* 
    keyof
        - 用来获取类型的所有属性
    typeof
        - 在TS中可以通过typeof来获取一个值的类型
        - 对于原始值就是返回对应值的类型
            对于常量(或as const 常量注解)返回的是字面量类型
        - 对于对象类型, 返回对象的类型签名
            如果使用了常量断言, 则获取到的对象的属性都是只读的
    属性类型
        - 通过类型["属性名"]来获取属性的类型
*/

interface Person {
    name: string
    age: number
    gender: string
}
const obj = {
    name: "swk",
    age: 18
} as const
type PersonProperties = keyof Person  //"name" | "age" | "gender"
type ObjProperties = keyof typeof obj

// let p: PersonProperties = "age"
let obj2: ObjProperties = "age"
let a = "hello" as const
type GetType = typeof obj

type PropertyType = Person["name"]  //获取Person的name属性类型
type PropertyType2 = typeof obj.age  //获取Person的name属性类型
