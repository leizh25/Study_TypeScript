export { }
/* 
    接口继承:
        - 继承后子接口将拥有父接口中全部属性的定义
        - 继承可以多重继承
        - 接口之间是继承  类和接口之间是实现  类和类之间是继承
    交叉类型:
        - 混合两种类型
    区别:
        - 继承发生在接口(或类)之间, 交叉类型只要是类型就可以继承
        - 发生冲突属性时,接口会报错 交叉类型会合并出never
*/
interface A {
    name: string
    gender: string
}
interface B {
    age: number
    gender: any[]
}
// interface C extends A, B { }

// type C = A & B

// let c: C = {
//     name: "swk",
//     age: 18,
//     gender: "男"
// }

// interface C extends A, B {
//     gender: string
// }

// class D implements A, B {
//     name: string = "12";
//     age: number = 18;
// }

// type F = A & B
// let f: F = {
//     name: "swk",
//     age: 18
// }

// type G = { name: string }
// type H = { age: number }

// type I = G & H

// type J = string & number