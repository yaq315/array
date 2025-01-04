//basic
//task1
let n =[1,2,3,4,5]
document.writeln(n.length )
document.writeln("<br>")
//task2
let num =[1,2,3,4,5]
for (const x of num){
    document.writeln(x) } 
document.writeln("<br>")
//task3
const num1 =[1,2,3,4,5]
for (const y in num1){
    document.writeln(num1[y])} 

document.writeln("<br>")

//task4

let num2 =[1,2,3,4,5]

document.writeln(Array.isArray(num2)) 
document.writeln("<br>")

//task5
let num3 ={0:"a",1:"b", 2: "c", length: 3}
document.writeln(Array.from(num3))
document.writeln("<br>")
//task6
let number =[1,2,3,4,5]

    number.forEach (function  (number){
         
        console.log(number)
    })
    console.log(number.push(5))

    document.writeln("<br>")

//mid
//task1
 const num5  =[1,2,3]
const  num6 = [4,5,6]
const combine= num5.concat(num6)
document.writeln(combine)

document.writeln("<br>")
//task2

let number1 =[1,2,3,4,5]
document.writeln( number1.indexOf(1)+1,
number1.indexOf(2)+1,
number1.indexOf(3)+1,
number1.indexOf(4)+1,
number1.indexOf(5)+1,
)
document.writeln("<br>")

//task3
let number2 =[1,2,3,4,5,6]
document.writeln(number2.slice(0,2)+","+number2.slice(4,6))

document.writeln("<br>")

//task4
let number3 =[1,2,3,4,5,6]
let removeditem =number3.splice(1,1)
document.writeln(removeditem)
document.writeln("<br>")


//task5
let number5 ="12345"
let number6=number5.split("")
let number7=number6.splice(4)
document.writeln(number7)


document.writeln("<br>")

//task6
let number4 =[1,2,3,4,5]
document.writeln(number4.join(""))
document.writeln("<br>")


//task7
let number8 =[1,2,3]
document.writeln(Array.of(number8))
document.writeln("<br>")

//task8
let number9 =[1,2,3,4,5]
document.write(number9.fill(0,0,3) )
document.writeln("<br>")

//task9
number10 =[1,2,3,4,5]
number11=number10.copyWithin (1,0,2)
document.write (number11.copyWithin(2,0,1))
document.writeln("<br>")
//task10
number12 =["Apple","banana","cherry"]
document.write(number12.sort())
document.writeln("<br>")
//task11
number13 =["Apple","banana","cherry"]
document.write(number13.reverse())
document.writeln("<br>")

//Advanced
//task 1
number14 =[1,2,3,4,5]
document.write(number14.map(num=>num*2) )
document.writeln("<br>")
//task12
number15 =[1,2,3,4,5]
document.write(number15.filter(num=>num%2===0))
document.writeln("<br>")
//task3
number15 =[1,2,3,4,5]
let number16 =number15.reduce((accumulator,current)=>accumulator+current,0) 
document.write( number16)