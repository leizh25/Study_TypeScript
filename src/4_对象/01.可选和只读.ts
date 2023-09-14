export { }
/* 

*/

interface Person {
    readonly name: string //readonly 只读属性
    age?: number // ? 表示可选属性  类型变为number | undefined
}


//当我们为一个接口类型直接赋值一个字面量时,会进行额外属性检查

const p: Person = { name: "swk", age: 18 }

//属性的只读只是在TS编译时做的限制, 并没有在JS层面对属性产生实质的影响
const obj: { name: string, age?: number } = p

obj.name = "猪八戒"
console.log(p.name);

