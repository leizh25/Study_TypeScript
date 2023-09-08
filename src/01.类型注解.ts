/* 
    TS是JS的超集,所有的JS代码都是合法的TS代码
*/

//单行注释

/**
 * 类型注解
 * 作用:通过类型注解可以为变量设置类型
 */
let a: string
let b: number
let c: boolean
a = "hello"

function greet(name:string, times:number):string {
    const str = `你好 ${name}`
    for (let i = 0; i < times; i++) {
        console.log(str);

    }
    return str
}

greet("孙悟空",6)