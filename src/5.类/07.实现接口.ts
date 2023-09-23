export{}
/* 
    实现接口
        - 使用implements来实现一个接口
        - 接口和类不同,接口关心标准
        - 多态的体现
        
    实现接口和继承类的区别:
        1. 接口是TS的语法, 而类 TS JS都支持
        2. 定义接口时,不关心具体实现, 但是定义类的时候需要考虑细节
        3. 一个类可以同时实现多个接口, 只能继承一个类
*/

interface Inter{
    name :string
    age:number
    gender:string
}

interface A{}

class B{}

class Person extends B implements Inter,A{
    name: "孙悟空";
    age: 18;
    gender: "男";
}

function printInfo(obj:Inter){
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.gender);
}
printInfo(new Person())