//1 Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Azamay"
let lastName ="Axamadov"
let country = "Uzbekistan"
let city ="Tawket"
let age = 28
let isMerried = true
let year = 2013

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMerried))
console.log(typeof(year))

//2 Check if type of '10' is equal to 10
let a = "10"
let b = 10
console.log(a==b) //true
console.log(a===b)//false

//3 Check if parseInt('9.8') is equal to 10
let aa = "9.8"
let bb = 10
console.log(aa==bb) //false

//5 Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
let a1 = 4 > 3
let t1 = 4 >= 3
let t2 = 4 < 3
let t3 = 4 <= 3
let t4 = 4 == 4
let t5 = 4 === 4
let t6 = 4 != 4
let t7 = 4 !== 4
let t8 = 4 != '4'
let t9 = 4 == '4'
let t10 = 4 === '4'
console.log(a1 ,t1 ,t2 ,t3 , t4 , t5 , t6 , t7 ,t8 ,t9 ,t10) //true true false false true true false false false true false

//6 Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
4 > 3 && 10 < 12  //true
4 > 3 && 10 > 12  //false
4 > 3 || 10 < 12  //true
4 > 3 || 10 > 12  // true
!(4 > 3)  //false
!(4 < 3)  //true
!(false)  //true
!(4 > 3 && 10 < 12) //false
!(4 > 3 && 10 > 12) //true
!(4 === '4') // true

//7 Use the Date object to do the following activities
let now = new Date()
console.log(now.getFullYear)
console.log(now.getMonth)
console.log(now.getDate)
console.log(now.getHours)
console.log(now.getMinutes)
console.log(now.getDay)
