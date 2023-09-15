export { }
/* 
    只读数组
        - 数组中的元素只能读 不能修改
            - ReadonlyArray<number>
    只读集合
        - Map
            - ReadonlyMap<键的类型,值的类型>
        - Set
            - ReadonlySet<值的类型>
*/


// const arr: ReadonlyArray<number> = [1, 2, 3, 4, 5]
const arr: readonly number[] = [1, 2, 3, 4, 5]

const map: ReadonlyMap<string, number> = new Map([["one", 1], ["two", 2]])
console.log(map.get("one"));

const set: ReadonlySet<string> = new Set(["swk", "zbj", "shs"])
for (const item of set) {
    console.log(item);
}