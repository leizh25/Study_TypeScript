export { }
/* 
    断言函数 实际上时TS中一种运行时的类型检查方式

    代码即使写的再好, 依然不能完全避免运行时的错误

    比如: 当我们调用后台接口加载数据, 后台所返回的数据需要经过前端的渲染, 然后显示
        但是我们作为前端是无法保证后台的数据结构的准确性, 这时就会引起运行时的异常
*/

//创建数据接口
interface Data {
    msg: string
}

function isData(data:any):asserts data is Data{
    if(data.msg === undefined) throw new Error("data的结构有误")
}

//创建一个函数, 模拟从后台加载数据的情况
function getData(): Promise<Data> {
    return new Promise((resolve, reject) => {
        const data = { msg: "合法数据!" } //从服务器加载的数据
        //对data做一系列的检查, 如果正确则调用resolve()返回数据, 错误则调用reject()来报错

        //也可以使用断言函数来断言data的类型
        isData(data)
        resolve(data)
    })
}
getData().then(data => {
    console.log('data: ', data);
}).catch(e=>{
    console.log("出错了");
    
})

