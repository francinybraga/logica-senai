const num1 = 125
const num2 = 123
const num3 = 11211
let x = []
let y = []
for (let i = num1 - 1; i >= 0; i--) {
    num1.reverse()
    x.push(num1)
}
for(let i = 0; i = num1; i--){
    x.unshift(num1)
} 
console.log(x)