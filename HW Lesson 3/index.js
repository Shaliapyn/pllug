let emptyObj = {}; // Створити пустий об’єкт;

let emptyObj1 = Object.create(null); // Створити пустий об’єкт без прототипу;

// Додати до об’єкта будь які нові поля всіма відомими способами;
emptyObj.key = "amazing key";
emptyObj.isAmazingKey = true;
emptyObj['key2'] = "less amazing key";
emptyObj['age'] = 22; 

// Створити пустий масив;
let emptyArr = []; 

// Створити пустий масив довжиною 100500 елементів;
let anotherArr = [];
anotherArr.length = 100500; 

// Створити масив з декількома елементами; 
let arrNumbers = [22, 44, 34, 56]; 

// Зробити заповнений масив пустим;
let arrNumbers = []; 

// Дано масив, [1,2,3,4,5], потрібно створити функцію, яка видалить певний елемент з масиву за 
// його індексом та поверне новий масив(оновлений- після видалення);
let taskArr = [1, 2, 3, 4, 5];
function deleteByIndex(arr, index){
    arr.splice(index, 1)
    return arr
}
/* Створити функцію, яка приймає один масив у якості аргументу 
 та повертає булеве значення в залежності чи в неї передали пустий масив чи ні; */
 function verifyArrIsTrue(arr){
    return arr.length > 0 ? true : false
 }
 
/* Створити функцію, яка приймає один об’єкт у якості аргументу 
та повертає булеве значення в залежності чи в неї передали пустий об’єкт чи ні; */
function verifyObjIsTrue(obj){
   return Object.keys(obj).length == 0 ? false : true;
}

/*Створити функцію, яка обєднає два масиви в один та поверне його в якості результату;*/
function arrConcat(arr1 = [], arr2 = []){
    return arr1 = arr1.concat(arr2)
}

/* Створити функцію, яка приймає один масив чисел у якості аргументу та 
повертає новий масив, який складається з елементів попереднього в степені 3. 
Для прикладу, на вході: [1, 2, 3] ⇒ [1, 8, 27]; */
function arrNumbersPow(arr){
    let result = [];
    for (item of arr) {
        result.push(Math.pow(item, 3))
    }
    return result;
}

/* Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий 
масив, який складається з непарних елементів вхідного масиву; */
function arrFilterOdd(arr){
    let result = [];
    for (number of arr){
        if (number % 2 != 0) {
            result.push(number)
        }
    }
    return result;
}

/* Створити функцію, яка приймає один масив чисел у якості аргументу та повертає новий масив, який складається 
тільки з цілих елементів вхідного масиву; Для прикладу: [5, 3.14, 4.1, 10, 11, 20.1] ⇒ [5, 10, 11]; */
function verifyIsIndeger(arr){
    let result = [];
    for (item of arr){
       if (Number.isInteger(item)) {
           result.push(item)
       } 
    }
    return result;
}

/* Створити функцію, яка нічого не повертає; */
function returnNothing(){
    return undefined; 
}












