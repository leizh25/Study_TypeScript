export { }
/* 
    构造签名的主要作用:使用来描述类的
*/

interface MyFn {
    new(str: string): any
}

type MyFn2 = {
    new(): any
}

interface MyFn3 {
    new(): any
    (): any
}

let Fn: MyFn = class {
    a: string
    constructor(a: string) {
        this.a = a
    }
}
new Fn("hello")

let Fn2: MyFn2 = function () { } as any


