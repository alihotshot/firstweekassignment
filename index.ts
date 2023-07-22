//Simple Calculator by using interfaces

console.log('Simple Caculator')

interface CalcFun {
  (x: number, y: number): number
}

const sum: CalcFun = (x: number, y: number): number => x + y
console.log(sum(2, 5))

const sub: CalcFun = (x: number, y: number): number => x - y
console.log(sub(10, 5))

const mul: CalcFun = (x: number, y: number): number => x * y
console.log(mul(7, 5))

const div: CalcFun = (x: number, y: number): number => x / y
console.log(div(50, 5))

