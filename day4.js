console.log("This is day 4 file")

// CONDITIONAL STATEMENTS
// if else statements


let citizenAge = 18;

// <

// < - LESS THEN
// > - GREATER THEN

if (citizenAge >= 18) {
    console.log("You are eligible for CNIC. The user age is" + citizenAge)
} else {
    console.log("You are not eligible for CNIC. The user age is" + citizenAge)
}






let userNumberInput = 34343;

// MODULUS - %

// == - checks only value   19 == "19" - true
// === - checks value and type  19 === "19" -  false

if (userNumberInput % 2 === 0) {
    console.log("EVEN")
} else {
    console.log("ODD")
}






let password = "qwerwe23423we45"


10 < 15


if (password.length < 15) {
    console.log(`Please enter password more than 15 characters. User entered password length is ${password.length}`)
} else {
    console.log("Account Created")
}



// 80 - 100 - A-ONE
// 70 - 79 - A
// 60 - 69 - B+
// 50 - 59 - C
// LESS THEN 50 - FAIL

// ELIF LADDER

// AND
// OR
// NOT


let studentPercentage = -20;


if (studentPercentage > 100) {
    console.log("MARKS CANNOT EXCEED 100")
} else if (studentPercentage >= 80) {
    console.log(`Students percentage is ${studentPercentage} and student got A-ONE grade`)
} else if (studentPercentage >= 70) {
    console.log(`Students percentage is ${studentPercentage} and student got A grade`)
} else if (studentPercentage >= 60) {
    console.log(`Students percentage is ${studentPercentage} and student got B+ grade`)
} else if (studentPercentage >= 50) {
    console.log(`Students percentage is ${studentPercentage} and student got C grade`)

} else {
    console.log(`Students percentage is ${studentPercentage} and student got F grade`)

}





let ageChecker = citizenAge > 18;

console.log(ageChecker)