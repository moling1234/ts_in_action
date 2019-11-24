// 数字枚举
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}
// console.log(Role)
// 实现原理：
// 反向映射（value, key 互相作为参数，互相映射）

// 字符串枚举
enum Message {
  Success = '成功',
  Fail = '失败'
}
// 不会反向映射

// 异构枚举
enum Answer {
  N,
  Y = 'Yes'
}

// 枚举成员
enum Char {
  a,
  b = Char.a,
  c = 1 + 3,
  d = Math.random(),
  e = '123'.length
}
// Char.a = 1

// 常量枚举
const enum Month {
  Jan,
  Feb,
  Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型
enum E {
  a,
  b
}
enum F {
  a = 0,
  b = 1
}
enum G {
  a = 'apple',
  b = 'banana'
}
let e: E = 3
let f: F = 3
// e === f
// console.log(e)
// 不同类型的枚举成员不可与比较

let e1: E.a = 3
let e2: E.b = 3
let e3: E.a = 3
// e1 === e2
// e1 === e3

// 字符串枚举的类型，只能是枚举成员的类型
let g2: G = G.a
// let g1: G = G
