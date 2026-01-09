console.log("LOOPS IN JAVASCRIPT")

// DRY - DONT REPEAT YOURSELF

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10


// FOR LOOP
// WHILE LOOP
// DO WHILE LOOP

// let name = "Zohaib"
// name = "Fahad";

// console.log(name)




// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }




for (let i = 1; i <= 100; i++) {

    if (i % 2 === 0) {
        console.log(`${i} - EVEN`)
    } else {
        console.log(`${i} - ODD`)
    }


}


let a = 5;
let b = 2;

let answer = a * b

console.log(answer)

// 2 X 1 = 2
// 2 X 2 = 4
// 2 X 3 = 6
// 2 X 4 = 8


let tableNumber = 24

for (let i = 1; i <= 10; i++) {
    console.log(`${tableNumber} X ${i} = ${tableNumber * i}`)
}



for (let i = 10; i >= 1; i++) {
    console.log(i)
}

// ARRAYS 

// DRY - DO NOT REPEAT YOURSELF
let studentNames = "Ghanzenfer"
let studentNames2 = "Yaseeen "
let studentNames3 = "Aman "

// ARRAYS

let fruitsName = ["Apple", "Banana", "Pineapple", "Guava"]





console.log(fruitsName.length)




for (let i = 0; i < fruitsName.length; i++) {
    console.log(fruitsName[i])
}