//Базовые задачи (1–10)

//массивы для задачек
const numbers = [1, 2, -3, 4, 5, -6, 100, 200];
const strings = ['apple', 'banana', 'cherry', 'date'];
const mixed = [1, '2', true, null, undefined, {}, []];
const nested = [[1, 2], [3, 4], [5, 6]];
const repeated = [1, 2, 2, 3, 3, 4, 4, 5];


//Преобразуй массив чисел в массив строк с использованием map.

let mapedArray = numbers.map((num) => `${num}`)
console.log(mapedArray)

//Отфильтруй из массива только чётные числа.

let onlyEvenNumbers = numbers.filter((num) => num % 2 === 0)
console.log(onlyEvenNumbers)

//Используй forEach, чтобы вывести в консоль каждый элемент массива.
strings.forEach(el => {
  console.log(el)
});

//Найди первый отрицательный элемент массива.
const firstNegativeElement = numbers.find((num) => num < 0)
console.log(firstNegativeElement)

//Проверь, есть ли в массиве хотя бы одно число больше 100.
const isAnyNumMoreThanHundred = numbers.some((num) => num > 100)
console.log(isAnyNumMoreThanHundred)

//Убедись, что все элементы массива — строки.
const isEveryArrayElementsTypeIsString = (array) => {
  let result = array.every((el) => typeof el === "string")
  console.log(result)
} 
isEveryArrayElementsTypeIsString(strings)
isEveryArrayElementsTypeIsString(mixed)
isEveryArrayElementsTypeIsString(numbers)

//Получи сумму всех чисел в массиве с помощью reduce.
const arrayElementsSum = numbers.reduce((accumulate, currentValue) => {
  return accumulate + currentValue
}, 0)
console.log(arrayElementsSum)

//Объедини два массива в один, не используя оператор ....
const combinedArrays = [...numbers, ...strings]
console.log(combinedArrays)

//Извлеки подмассив с помощью slice.
const subarray = nested.slice(0, 1)
console.log(subarray)

//Удали 3 элемента из середины массива с помощью splice.
const numbersToSplice = [...numbers]
const middleIndex = Math.floor(numbersToSplice.length / 2)

const arrayWithoutMiddle = numbersToSplice.splice(middleIndex, 3)
console.log(numbers)
console.log(numbersToSplice)
console.log(arrayWithoutMiddle)

//-------------------------------------------------------------------------------------------

//Средний уровень (11–30)

//массивы для задачек
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 32 },
  { name: 'Carol', age: 25 },
  { name: 'Dave', age: 40 }
];

const products = [
  { name: 'A', price: 30 },
  { name: 'B', price: 20 },
  { name: 'C', price: 50 }
];

const mixedNumbers = [4, -2, 0, 9, 3, -1, 10];
const withDuplicates = ['a', 'b', 'a', 'c', 'b', 'd'];
const arrayOfStrings = ['cat', 'elephant', 'dog', 'lion', 'bat'];
const nested2 = [ [1], [2, 3], [4, [5, 6]] ];
const charString = "mississippi".split('');
const objectsWithId = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "C" }
];

const names = ['John', 'Mary', 'Peter', 'Alice'];


//Преобразуй массив объектов {name, age} в массив имён.

//Получи средний возраст из массива пользователей.

//Отсортируй массив строк по алфавиту.

//Отсортируй массив объектов по полю price по убыванию.

//Создай массив, содержащий только уникальные значения из исходного.

//Используя flat, расплющи массив на два уровня.

//Преобразуй массив строк в массив их длин.

//Разверни массив наоборот, не меняя оригинал.

//Замени все отрицательные числа на 0 с помощью map.

//Сгенерируй массив длиной 10, заполненный значением "A".

//Используй reduce для подсчёта количества каждого символа в строке.

//Удали дубликаты из массива с помощью filter и indexOf.

//Используя flatMap, раздели каждую строку на символы и получи один массив всех символов.

//Найди индекс последнего элемента, равного заданному значению.

//Используй some, чтобы проверить наличие строки длиной больше 5.

//Используй every, чтобы проверить, являются ли все элементы числами.

//Преобразуй массив чисел в объект, где ключи — числа, а значения — их квадраты.

//Найди второй по величине элемент в массиве.

//Раздели массив на подмассивы по 3 элемента каждый.

//Создай массив пар [значение, индекс] с помощью map.

//-----------------------------------------------------------------------------------------

//Продвинутые задачи (31–50)

//массивы для задачек
const people = [
  { name: 'Anna', age: 23, category: 'A' },
  { name: 'Ben', age: 30, category: 'B' },
  { name: 'Cara', age: 23, category: 'A' },
  { name: 'Dan', age: 40, category: 'C' }
];

const wordCounts = ['dog', 'cat', 'dog', 'cat', 'dog', 'mouse'];

const posts = [
  { id: 1, title: 'Hello', tags: ['news', 'tech'] },
  { id: 2, title: 'World', tags: ['sports', 'tech'] },
  { id: 3, title: 'Today', tags: ['news', 'sports'] }
];

const matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];

const deepNested = [
  { type: 'folder', name: 'root', children: [
      { type: 'file', name: 'file1.txt' },
      { type: 'folder', name: 'sub', children: [
          { type: 'file', name: 'file2.txt' }
      ]}
  ]}
];

const stringArray = ['hello world', 'this is a test', 'camel case'];

const complex = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 10 },
  { id: 1, value: 15 }
];

const words = ['the', 'quick', 'brown', 'fox'];
const nestedWords = [['apple', 'banana'], ['banana', 'cherry'], ['apple']];


//Сгруппируй массив объектов по значению свойства (например, по category).

//Создай объект частотности значений массива ({значение: количество}).

//Извлеки все уникальные значения tag из массива объектов {name, tags: [...]}.

//Преобразуй двумерный массив в объект вида {rowIndex: [значения]}.

//Найди наибольшую возрастающую подпоследовательность.

//Реализуй собственную версию метода map.

//Реализуй собственную версию метода filter.

//Реализуй собственную версию метода reduce.

//Используя reduce, сгруппируй пользователей по возрасту.

//Создай массив, содержащий только уникальные объекты по какому-то полю (id).

//Используя sort, реализуй сортировку строк по длине, а затем по алфавиту.

//Получи массив всех значений указанного ключа в глубоко вложенном массиве объектов.

//Реализуй метод, возвращающий пересечение двух массивов.

//Реализуй метод, возвращающий разность двух массивов.

//Преобразуй массив строк в camelCase с помощью map.

//Используя reduce, объедини массив объектов в один объект.

//Реализуй функцию, переворачивающую порядок слов в строке (через split, reverse, join).

//Создай цепочку из filter → map → reduce для фильтрации, преобразования и подсчёта.

//Используя методы массивов, реализуй функцию "глубокой" фильтрации вложенного массива.

//Найди наиболее часто встречающееся значение в массиве.