import "reflect-metadata"
export { }
/* 
    元数据(metadata)
        - 元数据就是用来描述数据的数据
    使用元数据
        - 通常会使用 reflect-metadata 来处理元数据
        - 这是一个对ES中原生Reflect扩展工具
        - 使用步骤
            1. 安装
                pnpmi reflect-metadata
            2. 引入
                import reflect-metadata
*/
class User {
    username: string
    password: string
    nickname: string
    constructor(username: string, password: string, nickname: string) {
        this.username = username
        this.password = password
        this.nickname = nickname
    }
}

const u = new User("", "", "")
/* 
Reflect.defineMetadata
    1. metadataKey  字符串 或 符号
    2.metadataValue 任意值
    3.对象(原型对象)
    4.属性名
Reflect.getMetadata
    1. metadataKey  字符串 或 符号
    2.metadataValue 任意值
    3.对象(原型对象)
    4.属性名
Reflect.deleteMetadata
    1. metadataKey  字符串 或 符号
    3.对象(原型对象)
    4.属性名
 */

const reqKey = Symbol()

Reflect.defineMetadata(reqKey,true,User.prototype,"username")
let res = Reflect.getMetadata(reqKey,u,"username")
console.log('res: ', res);

function checkRequired(user: User) {
    //检查是否传递了必要的字段
    for (const prop in user) {
        if (prop === "username" || prop === "password") {
            if (!user[prop]) {
                console.log(`${prop}属性是必须的`);

            }
        }
    }
}

// checkRequired(u)