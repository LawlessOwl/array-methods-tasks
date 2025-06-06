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
const nestedStrings = [['orange', 'banana'], ['apple', 'pear']]

const names = ['John', 'Mary', 'Peter', 'Alice'];


//Преобразуй массив объектов {name, age} в массив имён.
const namesArray = users.map(user => user.name)
console.log(namesArray)

//Получи средний возраст из массива пользователей.
const averageUserAge = users.reduce((sum, user) => sum + user.age, 0) / users.length
console.log(averageUserAge)

//Отсортируй массив строк по алфавиту.
const sortedStringsArray = [...arrayOfStrings].sort((a, b) => a.localeCompare(b, "en", {sensitivity: "base"}))
console.log(sortedStringsArray)
console.log(arrayOfStrings)

//Отсортируй массив объектов по полю price по убыванию.
const sortedPriceArray = [...products].sort((a, b) => b.price - a.price)
console.log(sortedPriceArray)
console.log(products)

//Создай массив, содержащий только уникальные значения из исходного.
const onlyUniqArray = withDuplicates.filter((el, id, array) => array.indexOf(el) === id)
console.log(onlyUniqArray)
console.log(withDuplicates)

//Используя flat, расплющи массив на два уровня.
const notANestedArray = nested2.flat(2)
console.log(notANestedArray)
console.log(nested2)

//Преобразуй массив строк в массив их длин.
const arrayOfStringsLength = names.map((el) => el.length)
console.log(arrayOfStringsLength)
console.log(names)

//Разверни массив наоборот, не меняя оригинал.
const reversedArray = [...names].reverse()
console.log(reversedArray)
console.log(names)

//Замени все отрицательные числа на 0 с помощью map.
const arrayWithoutNegativeNumbers = mixedNumbers.map((el) => el < 0 ? 0 : el)
console.log(arrayWithoutNegativeNumbers)
console.log(mixedNumbers)

//Сгенерируй массив длиной 10, заполненный значением "A".
const tenAArray = Array(10).fill("A")
console.log(tenAArray)

//Используй reduce для подсчёта количества каждого символа в строке.
const allCharsCount = arrayOfStrings.join('').split('').reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1
  return acc
}, {})

console.log(allCharsCount)

//Удали дубликаты из массива с помощью filter и indexOf.
const arrayWithoutDuplicates = withDuplicates.filter((elem, id, array) => array.indexOf(elem) === id)
console.log(arrayWithoutDuplicates)
console.log(withDuplicates)

//Используя flatMap, раздели каждую строку на символы и получи один массив всех символов.
const symbolsFromNestedArray = nestedStrings.flatMap(array => array)
.flatMap((string) => string.split(''))
console.log(symbolsFromNestedArray)

//Найди индекс последнего элемента, равного заданному значению.
const lastIndexOfRequestedValue = mixedNumbers.findLastIndex(value => value === 10)
console.log(lastIndexOfRequestedValue)

//Используй some, чтобы проверить наличие строки длиной больше 5.
const isStringLengthMoreThanFive = arrayOfStrings.some(element => element.length > 5)
console.log(isStringLengthMoreThanFive)

//Используй every, чтобы проверить, являются ли все элементы числами.
const isEveryElementIsNum = (array) => {
  const result = array.every(el => typeof el === "number")
  console.log(result)
}

isEveryElementIsNum(arrayOfStrings)
isEveryElementIsNum(numbers)

//Преобразуй массив чисел в объект, где ключи — числа, а значения — их квадраты.
const numbersSqrtObj = numbers.reduce((acc, val) => {
  acc[val] = Math.sqrt(val)
  return acc
}, {})

console.log(numbersSqrtObj)

//Найди второй по величине элемент в массиве.
const secondLargestElement = (arr) => {
  let result
    if (arr.every((val) => typeof val === "string")) {
    const sortedStr = [...arr].sort((a, b) => b.localeCompare(a))
    result = sortedStr[1]
    } else if (arr.every((val) => typeof val === "number")) {
    const withoutNegative = arr.filter((val) => val > 0)
    const sortedNum = [...withoutNegative].sort((a, b) => b - a)
    result = sortedNum[1]
  }
  console.log(result)
}

secondLargestElement(names)
secondLargestElement(numbers)

//Раздели массив на подмассивы по 3 элемента каждый.
const arraySlicer = (arr, subarrayLength = 3) => {
  const result = []
  for (let i = 0; i < arr.length; i += subarrayLength) {
    result.push(arr.slice(i, i + subarrayLength))
  }
  return result
}

arrayOfStrings.push("whale", "crocodile")
const subarrays = arraySlicer(arrayOfStrings)
console.log(subarrays)

//Создай массив пар [значение, индекс] с помощью map.
const keyValueArray = arrayOfStrings.map((val, id) => [val, id])
console.log(keyValueArray)

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
const arrayFromRequestedProperty = (array, property) => {
  return array.reduce((acc, item) => {
    const key = item[property]
    if(!acc[key]) {
      acc[key] = []
    }
    acc[key].push(item)
    return acc
  }, {})
};

const propArray = arrayFromRequestedProperty(posts, "tags")
console.log(propArray)

//Создай объект частотности значений массива ({значение: количество}). 

const getFreq = (arr) => {
  const withoutNegative = arr.filter((val) => val > 0)

  const result =  withoutNegative.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1
    return acc
  }, {})

  Object.keys(result).forEach(key => {
    result[key] = result[key] / withoutNegative.length
  })

  return result
}

const frequency = getFreq(numbers)
console.log(frequency)

//Извлеки все уникальные значения tag из массива объектов {name, tags: [...]}.
const extractUniqueValue = (arr, key) => {
 return arr.flatMap(obj => obj[key]).filter((elem, id, arr) => {
    return arr.indexOf(elem) === id
  })
} 

const uniqueValue = extractUniqueValue(posts, "tags")
console.log(uniqueValue)

//Преобразуй двумерный массив в объект вида {rowIndex: [значения]}.
const matrixObj = matrix.reduce((acc, val, id) => {
  acc[`rowIndex${id}`] = val 
  return acc
}, {})

console.log(matrixObj)
console.log(matrix)

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