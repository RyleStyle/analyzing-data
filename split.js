// In this file you will learn how to split up a string at any character.
// Keep in mind the character you use to split will NOT be included in the final array.

const string = "test,string"

string.split(",") // Splitting the string in between both words

console.log(string) // test,string
console.log(string.split(",")) // ["test", "string"]

let stringOne = string.split(",")[0] // test
let stringTwo = string.split(",")[1] // string

console.log(stringOne)
console.log(stringTwo)