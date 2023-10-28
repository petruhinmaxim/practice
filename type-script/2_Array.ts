let array: string[]
let arrayG: Array<string>

array =["1", "2"]

const numbers:ReadonlyArray<number> = [1, 2, 3, 4]
// numbers.push нет метода. Массив неизменяем

type TypeArray = [number, string, null]
const newArray:TypeArray = [1, "2", null]
