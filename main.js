const text = document.getElementById("input");
const button = document.getElementById("button");

// Сначала был написан код для задачи №3, далее добавлено условие про слово "google"
// из задачи №4. Позже, по условию задачи №5, я второй сторокой в alert вывел значение
// свойства name первого объекта в массиве.
// И в самом конце добавил setTimeout из задачи №10, с помощью которого мы выводим
// alert через 3 секунды.

button.addEventListener( "click" , () => {
    if (text.value == "google") {
        setTimeout( () => alert (`Yandex круче. Но это не точно\n${arr[0].name}`), 3000);
    } else {
        setTimeout( () => alert(`${text.value}\n${arr[0].name}`), 3000);
    };
});

// Массив для задачи №5

let arr = [{
    name: "Igor",
    age: 27
    },
    {
    name: "Ivan",
    age: 32
    },
    {
    name: "Anna",
    age: 18
}];

// Функция из задачи №6

let superSum = (x, y) => {
    alert (x + y);
};

// Задача №7

let arr2 = [2, 98, 367, 65, 35, 894, 29, 84, 2786, 61, 128, 68, 5689, 19, 5];
let minElem = arr2[0],
    maxElem = minElem;

for (let i = 0; i < arr2.length; i++) {
    if (minElem > arr2[i]) {
        minElem = arr2[i];
    }
}

for (let i = 0; i < arr2.length; i++) {
    if (maxElem < arr2[i]) {
        maxElem = arr2[i];
    }
}

console.log("Максимальный элемент в массиве:" + " " + maxElem);
console.log("Минимальный элемент в массиве:" + " " + minElem);

// Задача №8

let a = 261; 
let b = 39;
let c = b;

b = a, 
a = c; 

console.log(a); // то что было изначально в b
console.log(b); // то что было изначально в a

// Задача №9 

let findMax = (someArr) => {
    let maxElemOfArr = someArr[0];
    for (let i = 0; i < someArr.length; i++) {
        if (maxElemOfArr < someArr[i]) {
            maxElemOfArr = someArr[i];
        }
    }
    return maxElemOfArr;
};

// Задачу №10 реализовал в самом начале кода
