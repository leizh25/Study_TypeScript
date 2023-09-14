export { }
/* 
    索引签名
        - 用来设置类型中索引(属性, 键) 和值的类型
        - 语法: [名字:类型]:类型
        - TS中支持的属性名的类型:
            string
            number
            symbol
*/
interface Inter {
    [propName: string]: string | number
}

interface Inter2 {
    [index: number]: number
}

//在对象中,所有的数字为属性名的属性,最终属性名都会转换为字符串
const obj: Inter = { name: "swk", gender: "男", age: 18, 0: 123 }

const obj2: Inter2 = [123, 456, 789]

