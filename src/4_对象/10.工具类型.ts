export { }
/* 
    工具类型
        - TS中为我们提供的一组用于操作类型的方法
        - 泛型中的字母:
            T Type 类型
            U 第二个类型
            K Key 键(属性名)
        - 例子:
            Partial<T> 将属性设置为可选属性
            Readonly<T> 将属性设置为只读属性
            Required<T>  将属性变为必须的属性
            Pick<T, K>  从T类型中挑选指定的属性K
            Omit<T, K>  从T类型中移除指定属性K
            Record<K, T> 创建一个新的类型
            Exclude<T, U> 将U中的类型从T中排除
            Extract<T, U> 将T中服务U的类型取出
            NonNullable<T> 将类型中的空值和undefined去除
*/

interface Todo {
    title?: string
    description?: string
}

let todo: Required<Todo> = { title: "hello", description: "哈哈哈哈" }

function printObj<T>(obj: Required<T>) {
    console.log(obj);

}

printObj<Todo>({ title: "hello", description: "哈哈哈哈" })


/* 
    Pick 和 Omit
*/
interface Person {
    name: string
    age: number
    gender: string
    address: string
}

let p: Pick<Person, "name" | "age" | "gender"> = {
    name: "swk",
    age: 18,
    gender: "男"
}

interface ButtonProps {
    color: string
    onclick: () => void
    text: string
    disabled?: boolean
}

let props: Pick<ButtonProps, "color" | "text"> = { color: "#f00", text: "我是按钮" }

let props2: Omit<ButtonProps, "onclick"> = {
    color: "#f00",
    text: "我是按钮"
}
/* REcord */
type MyType = Record<"name" | "gender" | "address", string>

let personRecord: Record<"tom" | "jerry" | "sunwukong", Person> = {
    tom: { name: "xxx", age: 11, gender: "男", address: "12" },
    jerry: { name: "xxx", age: 11, gender: "男", address: "12" },
    sunwukong: { name: "xxx", age: 11, gender: "男", address: "12" },
}

/* 
    Exclude
    Extract
*/
//Exclude
type M1 = Exclude<"a" | "b" | "c", "b"> // "a"  | "c"
type M2 = Exclude<"a" | "b" | "c", "a" | "b"> // "c"

//Extract
type M3 = Extract<"a" | "b" | "c", "a"> // "a"
type M4 = Extract<"a" | "b" | "c", "a" | "c"> // "a" | "c"

/* NonNullable */
type T1 = NonNullable<string | null | undefined | number>

function removeNullFromArray<T>(array:T[]):NonNullable<T>[]{
    return array.filter(item => item !== null && item !== undefined) as NonNullable<T>[];
}

let res = removeNullFromArray([1,2,3,4,undefined,65,null])
console.log('res: ', res);