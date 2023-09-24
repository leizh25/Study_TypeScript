export { }
/* 
    参数装饰器
        - 用来装饰参数,为其附加一些元数据
        - 参数:
            1. target:被装饰的对象
            2. methodName:方法名
            3. parameterIndex:形参索引
*/
function deco(target: any, methodName: string, parameterIndex: number) {
    console.log('target: ', target, methodName, parameterIndex);

}
class Person {
    sum(@deco a: number, b: number) {
        return a + b
    }
}
