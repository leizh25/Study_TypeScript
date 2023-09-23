export { }
/* 
    在不修改类源代码的情况下,对他进行修改

    装饰器
        - 本质就是一个高阶函数
        - 通过装饰器可以在不修改原来代码的情况下,对类,属性,方法,属性访问器(get,set),参数进行修改
        - 装饰器时可以直接修改类的,但是在使用中尽量遵循OCP(开闭原则)
    
        使用装饰器
            - 装饰器在TS中是一个实验性功能,需要在配置文件中开启
            "experimentalDecorators": true, //开始TS中的装饰器

*/

//定义一个装饰器,装饰器本质就是一个高阶函数
//需要根据装饰器类型的不同去定义不同的参数
//装饰器需要一个参数,参数类型就是构造函数
function render(target:Function){
    const oldRender = target.prototype.render
    target.prototype.render = function(){
        console.log('this: ', this);
        return `<h1>${oldRender.apply(this)}</h1>`
    }   
}

@render
class Person {
    constructor(public name: string) { }
    render() {
        return this.name
    }
}

@render
class News {
    constructor(public title: string) { }
    render() {
        return this.title
    }
}

const p = new Person("孙悟空")
const n = new News("孙悟空大闹天宫")

console.log(p.render());
console.log(n.render());
