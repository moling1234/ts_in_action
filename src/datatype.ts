// 原始类型
let bool: boolean = true
let num: number = 123
let str: string = 'abc'
// str = num
// 变量数据类型不可变

let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
let arr3: Array<number | string> = [1, 2, 3, '4']
// let arr4: Array<number> = [1, 2, 3, '4']

// 元组
let tuple: [number, string] = [0, '1']
// tuple.push(2)
// console.log(tuple)
// tuple[2]
// ts允许往元组里面添加新的元素，旦不允许越界访问   不建议这样使用

// 函数
// let add = (x, y) => x + y
let add = (x: number, y: number): number => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b

// 对象
// let obj: Object = { x: 1, y: 2 }
// obj.x = 3
let obj: { x: number, y: number } = { x: 1, y: 2 }
obj.x = 3

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
// console.log(s1 === s2)

// undefined，null
let un: undefined = undefined
let nu: null = null
// num = un
// num = nu
// 若要开启，把配置项 strictNullChecks 设置为 false

// void
let noReturn = () => {}

// any
// 兼容 js，少用
let x
// x = 1
// x = []
// x = () => {}

// never
let error = () => {
  throw new Error('error')
}
let endless = () => {
  while (true) {}
}
