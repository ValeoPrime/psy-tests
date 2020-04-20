import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)


ReactDOM.render(app, document.getElementById('root'));


serviceWorker.unregister();

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// function camelize(string) {
//     const arr = string.split('')
//     arr.forEach((elem, index) => {
//         if (elem === '-') {
//             arr[index + 1] = arr[index + 1].toUpperCase(arr[index + 1])
//             arr.splice(index, 1)
//         }

//     });
//     return arr.join('')
// }


// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

// Функция должна возвращать новый массив и не изменять исходный.


// let arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr, a, b){

//     arr.forEach((elem, index) => {
//         if(elem <= a || elem >= b){
//             arr.splice(index, 1)
//         }
//     })
//     return arr 
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr) {
//     let newArr = [...arr]

//     return newArr.sort()
    
// }
// console.log(copySorted(arr))