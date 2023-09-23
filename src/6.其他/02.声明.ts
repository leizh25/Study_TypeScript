/* 
    声明(declare)
        - 在编译阶段声明一个变量/函数/类型/类/模块/..., 但是不对其进行实现
        - 通过编写声明,可以帮助TS来识别JS库的代码
*/
declare let myGlobal: number // 声明了一个全局变量
declare function printLog(msg: string): void
printLog("hello")

declare class JQueryInstance {
    text(): string
}
declare function jQuery(selecotr: string): JQueryInstance
declare var $: typeof jQuery
$("").text()