import "reflect-metadata"
export { }
/* 
    Reflect.metadata()
        - 创建元数据的装饰器

*/

// Reflect.metadata()






const reqKey = Symbol()

function required(target:any,propName:string){
    Reflect.defineMetadata(reqKey,true,target,propName)
}
class User {
    @required
    username: string
    @Reflect.metadata(reqKey,true)
    password: string
    nickname: string
    constructor(username: string, password: string, nickname: string) {
        this.username = username
        this.password = password
        this.nickname = nickname
    }
}
const u = new User("", "", "")


function checkRequired(obj: {[key:string]:any}) {
    //检查是否传递了必要的字段
    for (const prop in obj) {
        if(Reflect.getMetadata(reqKey,obj,prop)){
            if(!obj[prop])console.log(`${prop}是必须的`);
            
        }
    }
}

checkRequired(u)