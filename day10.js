console.log("JS DAY 10")



let num = 91111111;

if (num >= 50 && num <= 90) {

    for (let table = 1; table <= 10; table++) {

        console.log(`Table Number: ${table}`)

        for (let i = 1; i <= 10; i++) {
            console.log(`${table} X ${i} = ${table * i}`)
        }

        console.log("----------------------")
    }


} else if (num < 50) {

    for (let table = 11; table <= 15; table++) {

        console.log(`Table Number: ${table}`)

        for (let i = 1; i <= 10; i++) {
            console.log(`${table} X ${i} = ${table * i}`)
        }

        console.log("----------------------")
    }

} else {
    for (let table = 16; table <= 20; table++) {

        console.log(`Table Number: ${table}`)

        for (let i = 1; i <= 10; i++) {
            console.log(`${table} X ${i} = ${table * i}`)
        }

        console.log("----------------------")
    }
}




let numbers = [12, 45, 4];


console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])



let evenNumbers = 0;
let oddNumbers = 0;




for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 === 0) {
        evenNumbers++;
    } else {
        oddNumbers++;
    }

}



console.log(`Total Even Numbers are: ${evenNumbers}`)
console.log(`Total Odd Numbers are: ${oddNumbers}`)


let studentData = ["Zohaib", 24, "B+", "Ilyaas", 10, "A+","Zohaib", 24, "B+", "Ilyaas", 10, "A+","Zohaib", 24, "B+", "Ilyaas", 10, "A+","Zohaib", 24, "B+", "Ilyaas", 10, "A+","Zohaib", 24, "B+", "Ilyaas", 10, "A+","Zohaib", 24, "B+", "Ilyaas", 10, "A+","Zohaib", 24, "B+", "Ilyaas", 10, "A+","Zohaib", 24, "B+", "Ilyaas", 10, "A+","Zohaib", 24, "B+", "Ilyaas", 10, "A+","Zohaib", 24, "B+", "Ilyaas", 10, "A+",]


let carData = {
    carName: "Toyota",
    carModelName: "Corolla",
    carYear: 2020,
    carColor: "White",
    carPrice: 3000000,
    carChassisNumber: "XYZ1234567890",
    carEngineNumber: "ENG1234567890"

}


let userDetails = {
    userName: "Zohaib",
    userAge: 24,
    userEmail: "zohaib@nsf.com",
    userPassword: "LFNSDLFHNSDJKLFHSDJKLFSHRJKHRK2J34H23JK4H23JK423H4JK23H4KJ23H23JK4H23JKR23JKRB34JKBGF2UIF2UIR23IFB2IKFB23KFB23FIKB23IFB223KJ23KJ23KJ23HKJ23H4K23JHKDJK23HD23JKH",
}