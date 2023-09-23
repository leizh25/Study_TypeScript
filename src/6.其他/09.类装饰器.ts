export { }
/* 
    类装饰器
    属性装饰器
    方法装饰器
    访问器装饰器
    参数装饰器

    类装饰器
        - 参数:
            1.被装饰的类
        - 作用:
            - 修改类
        - 修改方式:
            1.直接修改, 通过类来直接对其修改
                - 通过装饰器添加的属性无法直接访问(TS没有为其添加类型守卫)
            2.返回一个新的类,替换旧的类
                - 新的类必须得是旧类的子类
*/


function render(target: Function) {
    const oldRender = target.prototype.render
    target.prototype.render = function () {
        console.log('this: ', this);
        return `<h1>${oldRender.apply(this)}</h1>`
    }
}
function deco(target: Function) {
    target.prototype.age = 18
}

function deco2<T extends { new(...args: any[]): any }>(target: T) {
    return class extends target {
        render() {
            return `<h1>${super.render()}</h1>`
        }
    }
}

@deco2
class Person {
    constructor(public name: string) { }
    render() {
        return this.name
    }
}

const p = new Person('孙悟空')
p.name
    ; (p as any).age
// console.log('(p as any).age: ', (p as any).age);
// console.log(Person);
console.log(p.render());




// function Component(target:Function){
//     target.prototype.selector = "my-news"
//     target.prototype.template =  "<h1>今天天气真不错</h1>"
// }

//装饰器工程   一个返回装饰器的函数
function Component(options: { selector: string, template: string }) {
    return function (target: Function) {
        target.prototype.selector = options.selector
        target.prototype.template = options.template
    }
}

/* 
    selector <my-news />
    template <h1>今天天气真不错</h1>
*/
@Component({ selector: "news", template: "<p>今天天气真不错</p>" })
class News {
    constructor(public title: string) { }
}



