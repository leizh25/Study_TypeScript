export { }
/* 
    抽象类
        - 介于接口和类之间
        - abstract关键字来定义一个抽象类
            抽象类就是专门用来被其他类继承的
        - 特点:
            1.抽象类不能创建实例
            2.抽象类是专门被继承的类
            3.在抽象类中可以添加抽象属性和方法
                抽象属性和方法必须在子类中被初始化和实现
        - 抽象类会被转换为JS代码,但其中加了abstract关键字的属性和方法都会被删除
*/

abstract class MyAbClass {
    // constructor(public name:string,public age:number){ }
    abstract name: string  //抽象属性
    abstract sayHello(): void
}
// class A extends MyAbClass {
//     name: string;
//     constructor(name: string) {
//         super();  //调用父类的构造函数
//         this.name = name;  //初始化抽象属性
//     }
//     sayHello(): void {

//     }
// }




