export { }
/* 
    成员修饰符
        - 用来修饰类中的属性和方法
            - public  默认值,公共属性, 这个属性可以在任何位置使用
            - protect  受保护的属性,只能在类内部和子类内部访问
            - private  私有属性,只能在类内部使用
*/
class MyClass {
    public name = "孙悟空"
    protected age = 18
    private gender = "男"
    protected sayHello() { 
        this.name = "xxx"
    }
}
class A extends MyClass{
    test(){
        
    }
}
const mc = new MyClass()
mc.name = "aaa"
mc