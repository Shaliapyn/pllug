let i = 3; 
for (let i = 0; i > 2; i++) {
    console.log("Browser is doing wzzhhhh")
}

// Створити функцію яка б отримувала параметром масив з елементів різних типів 
// (строки, масиви, числа, об’єкти і т.д), на виході має повернути строку у camel 
// case (приклад строки у camel case: thisIsExampleOfTheCamelCase), яка б 
// поєднувала в собі всі елементи масиву які є строками.
function createCamelStr(arr=[]){
    let arrResult = [];
    let strResult = "";
    arrResult = arr.filter((item)=>{
       return typeof item === "string" 
    })
    for (let i = 0; i < arrResult.length; i++){
      arrResult[i] = (arrResult[i]).toLowerCase()
    }
    for (let i = 0; i < arrResult.length; i++){
      strResult += arrResult[i][0].toUpperCase() + arrResult[i].slice(1);;
    }
    let finalResult = strResult[0].toLowerCase() + strResult.slice(1);
    return  finalResult
  
}
let array = ['Some', 2, 3, 'great', 'string']
console.log(createCamelStr(array))



// Створити функцію яка отримує параметром масив цілих чисел 1 <= value <= 26, і повертала б масив
// у якому кожен елемент масиву є літерою англійського алфавіту відповідний конкретному елементу масива 
// (наприклад 1 = a, 2 = b, 3 = c, 4 = d, …). Приклад [4, 3, 22, 11] - в результаті маємо отримати [d, c, v, k]

function getLetter(arr=[]){
  let arrResult = [];
  let alpha='abcdefghijklmnopqrstuvwxyz'.split('');
  for (let i = 0; i < alpha.length; i++) {
    if (arr.includes(i)) {
      arrResult.push(alpha[i-1])
    }
  }
  return arrResult
}
let array2 = [3,1,2, 22]
console.log(getLetter(array2)) // Видає правильні букви, тільки якщо аргументами є цифри по порядку, сподіваюсь що встигну переписати 

// Створити функцію яка параметром отримує об’єкт (наприклад {a: 22, b: -11.35, c: 41.2, d: ‘hello’}) 
// і повертає новий об’єкт у який містить тільки числа більші рівні 0.
function changeObj(obj){
  let newArr = [];
  let entries = Object.entries(obj)
    entries.forEach((item)=>{
      if (item[1] >= 0) {
        newArr.push(item)
      }
  })
  newArr = Object.fromEntries(newArr)
  return newArr
}
let obj = {
  a: 22, 
  b: -11.35, 
  c: 41.2, 
  d: 'hello'
}
console.log(changeObj(obj))

let date = new Date();
console.log(new Date())


