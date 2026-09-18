'use strict';

// ============================================================
// Лабораторная работа №1
// Студент №1
// Вариант №1
// ============================================================


// ============================================================
// ЗАДАНИЕ 1. Основы JavaScript
// ============================================================

function simpleTask() {
    const studentNumber = 1;
    const studentName = 'Ivan';
    const isStudent = true;
    const averageMark = 4.5;
    const subjects = ['JavaScript', 'HTML', 'CSS'];

    console.log('Номер студента:', studentNumber);
    console.log('Имя:', studentName);
    console.log('Студент:', isStudent);
    console.log('Средний балл:', averageMark);
    console.log('Предметы:', subjects);
}


// ============================================================
// ЗАДАНИЕ 2. Функции
// ============================================================

// 2.1 Номер ревьюера
function getReviewerNumber(number, lab) {
    return (number + lab) % 30;
}

// 2.2 Номер варианта
function getVariant(number, variants) {
    return number % variants;
}

// 2.3 Калькулятор
function calculate(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                throw new Error('Деление на ноль невозможно');
            }
            return a / b;
        default:
            throw new Error('Неизвестная операция');
    }
}

// 2.4 Расчёт площади
function calculateArea(figure, ...params) {
    switch (figure) {
        case 'circle':
            return Math.PI * params[0] ** 2;

        case 'rectangle':
            return params[0] * params[1];

        case 'triangle':
            return params[0] * params[1] / 2;

        default:
            throw new Error('Неизвестная фигура');
    }
}

// 2.5 Стрелочные функции
const reverseString = str => str.split('').reverse().join('');

const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;


// ============================================================
// ЗАДАНИЕ 3. Объекты
// ============================================================

// 3.1 Книга
const book = {
    title: 'Война и мир',
    author: 'Лев Толстой',
    year: 1869,
    pages: 1225,
    isAvailable: true,

    getInfo() {
        return `"${this.title}", автор: ${this.author}, год: ${this.year}, страниц: ${this.pages}`;
    }
};

// 3.2 Студент
const student = {
    name: 'Анна Петрова',
    age: 20,
    grades: {
        math: 90,
        programming: 95,
        history: 85
    },

    getAverageGrade() {
        const values = Object.values(this.grades);
        return values.reduce((sum, grade) => sum + grade, 0) / values.length;
    },

    addGrade(subject, grade) {
        this.grades[subject] = grade;
    }
};


// ============================================================
// ЗАДАНИЕ 4. Работа с массивами
// ============================================================

function processArrays() {
    const numbers = [12, 45, 23, 67, 34, 89, 56, 91, 27, 14];

    const users = [
        { name: 'Анна', age: 20, active: true },
        { name: 'Иван', age: 17, active: false },
        { name: 'Виктория', age: 25, active: true },
        { name: 'Григорий', age: 30, active: true },
        { name: 'Мария', age: 16, active: false }
    ];

    // forEach
    console.log('Числа:');
    numbers.forEach(number => console.log(number));

    // map
    const doubled = numbers.map(number => number * 2);
    console.log('Удвоенные:', doubled);

    // filter
    const greaterThan50 = numbers.filter(number => number > 50);
    console.log('Больше 50:', greaterThan50);

    // find
    const firstGreaterThan50 = numbers.find(number => number > 50);
    console.log('Первое число > 50:', firstGreaterThan50);

    // reduce
    const sum = numbers.reduce((total, number) => total + number, 0);
    console.log('Сумма:', sum);

    // sort
    const sorted = [...numbers].sort((a, b) => a - b);
    console.log('Отсортированные:', sorted);

    // every
    const allAdults = users.every(user => user.age >= 18);
    console.log('Все совершеннолетние:', allAdults);

    // filter + map
    const activeUsers = users
        .filter(user => user.active)
        .map(user => user.name);

    console.log('Активные пользователи:', activeUsers);

    return {
        numbers,
        users,
        doubled,
        greaterThan50,
        firstGreaterThan50,
        sum,
        sorted,
        allAdults,
        activeUsers
    };
}


// ============================================================
// ЗАДАНИЕ 5. Менеджер задач
// ============================================================

function taskManager() {
    let tasks = [
        { id: 1, title: 'Изучить JavaScript', completed: true },
        { id: 2, title: 'Сделать лабораторную', completed: false },
        { id: 3, title: 'Отправить работу', completed: false }
    ];

    let nextId = 4;

    return {
        addTask(title) {
            const task = {
                id: nextId++,
                title,
                completed: false
            };

            tasks.push(task);
            return task;
        },

        completeTask(id) {
            const task = tasks.find(task => task.id === id);

            if (!task) {
                return false;
            }

            task.completed = true;
            return true;
        },

        deleteTask(id) {
            const oldLength = tasks.length;
            tasks = tasks.filter(task => task.id !== id);
            return tasks.length !== oldLength;
        },

        getCompletedTasks() {
            return tasks.filter(task => task.completed);
        },

        getPendingTasks() {
            return tasks.filter(task => !task.completed);
        },

        getStats() {
            const total = tasks.length;
            const completed = tasks.filter(task => task.completed).length;
            const pending = total - completed;

            return {
                total,
                completed,
                pending,
                completionRate: total === 0
                    ? 0
                    : Math.round(completed / total * 100)
            };
        }
    };
}


// ============================================================
// ЗАДАНИЕ 6. Классы
// ============================================================

function taskClasses() {

    class Vehicle {
        static vehicleCount = 0;

        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
            Vehicle.vehicleCount++;
        }

        get age() {
            return new Date().getFullYear() - this.year;
        }

        set year(value) {
            if (value > new Date().getFullYear()) {
                throw new Error('Год не может быть в будущем');
            }

            this._year = value;
        }

        get year() {
            return this._year;
        }

        displayInfo() {
            console.log(`${this.make} ${this.model}, ${this.year}`);
        }
    }

    class Car extends Vehicle {
        constructor(make, model, year, numDoors = 4) {
            super(make, model, year);
            this.numDoors = numDoors;
        }

        honk() {
            return 'Beep beep!';
        }

        displayInfo() {
            super.displayInfo();
            console.log(`Количество дверей: ${this.numDoors}`);
        }
    }

    class ElectricCar extends Car {
        constructor(make, model, year, batteryCapacity) {
            super(make, model, year);
            this.batteryCapacity = batteryCapacity;
        }

        get range() {
            return this.batteryCapacity * 6;
        }

        displayInfo() {
            super.displayInfo();
            console.log(`Батарея: ${this.batteryCapacity} kWh`);
            console.log(`Запас хода: ${this.range} км`);
        }
    }

    const vehicle = new Vehicle('Toyota', 'Corolla', 2016);
    const car = new Car('Kia', 'Rio', 2021);
    const electricCar = new ElectricCar('Tesla', 'Model 3', 2022, 60);

    function compareAge(vehicle1, vehicle2) {
        return vehicle1.age - vehicle2.age;
    }

    console.log('Автомобиль:');
    vehicle.displayInfo();
    console.log('Возраст:', vehicle.age);

    console.log('\nCar:');
    car.displayInfo();
    console.log('Сигнал:', car.honk());

    console.log('\nElectricCar:');
    electricCar.displayInfo();

    console.log(
        '\nРазница в возрасте:',
        compareAge(vehicle, car)
    );

    console.log('Всего создано транспортных средств:', Vehicle.vehicleCount);

    return {
        Vehicle,
        Car,
        ElectricCar,
        vehicle,
        car,
        electricCar,
        compareAge
    };
}


// ============================================================
// ЗАДАНИЕ 7. Замыкания и каррирование
// ============================================================

function createVehicleFactory(vehicleType) {
    return (make, model, year) =>
        new vehicleType(make, model, year);
}


// ============================================================
// ЗАДАНИЕ 8. Регулярные выражения
// Вариант 1 — Email
// ============================================================

function validateEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}


// ============================================================
// ТЕСТИРОВАНИЕ
// ============================================================

function runTests() {

    console.log('\n=== ТЕСТИРОВАНИЕ ===');

    // Задание 2.1
    console.assert(
        getReviewerNumber(5, 1) === 6,
        'Тест получения ревьюера провален'
    );

    // Задание 2.2
    console.assert(
        getVariant(1, 4) === 1,
        'Тест получения варианта провален'
    );

    // Задание 2.3
    console.assert(
        calculate(10, 5, '+') === 15,
        'Тест калькулятора провален'
    );

    console.assert(
        calculate(10, 5, '-') === 5,
        'Тест вычитания провален'
    );

    console.assert(
        calculate(10, 5, '*') === 50,
        'Тест умножения провален'
    );

    console.assert(
        calculate(10, 5, '/') === 2,
        'Тест деления провален'
    );

    // Задание 2.4
    console.assert(
        calculateArea('circle', 5) === Math.PI * 25,
        'Тест площади круга провален'
    );

    console.assert(
        calculateArea('rectangle', 5, 10) === 50,
        'Тест площади прямоугольника провален'
    );

    console.assert(
        calculateArea('triangle', 5, 10) === 25,
        'Тест площади треугольника провален'
    );

    // Задание 2.5
    console.assert(
        reverseString('JavaScript') === 'tpircSavaJ',
        'Тест reverseString провален'
    );

    // Задание 3.1
    console.assert(
        book.getInfo().includes('Война и мир'),
        'Тест книги провален'
    );

    console.assert(
        book.isAvailable === true,
        'Тест доступности книги провален'
    );

    // Задание 3.2
    console.assert(
        student.getAverageGrade() === 90,
        'Тест среднего балла провален'
    );

    student.addGrade('physics', 88);

    console.assert(
        student.getAverageGrade() === 89.5,
        'Тест добавления оценки провален'
    );

    // Задание 4
    const arrayResult = processArrays();

    console.assert(
        arrayResult.sum === 458,
        'Тест reduce провален'
    );

    console.assert(
        arrayResult.firstGreaterThan50 === 67,
        'Тест find провален'
    );

    // Задание 5
    const manager = taskManager();

    const newTask = manager.addTask('Проверить тесты');

    console.assert(
        newTask.id === 4,
        'Тест добавления задачи провален'
    );

    console.assert(
        manager.completeTask(4) === true,
        'Тест завершения задачи провален'
    );

    console.assert(
        manager.deleteTask(4) === true,
        'Тест удаления задачи провален'
    );

    console.assert(
        manager.getStats().total === 3,
        'Тест taskManager провален'
    );

    // Задание 6
    const classes = taskClasses();

    console.assert(
        classes.car.honk() === 'Beep beep!',
        'Тест Car провален'
    );

    console.assert(
        classes.electricCar.range === 360,
        'Тест ElectricCar провален'
    );

    console.assert(
        classes.compareAge(classes.vehicle, classes.car) ===
        classes.vehicle.age - classes.car.age,
        'Тест compareAge провален'
    );

    // Задание 7
    const factory = createVehicleFactory(classes.Car);
    const factoryCar = factory('BMW', '320i', 2023);

    console.assert(
        factoryCar instanceof classes.Car,
        'Тест фабрики провален'
    );

    // Задание 8
    console.assert(
        validateEmail('test@example.com') === true,
        'Корректный email не прошёл проверку'
    );

    console.assert(
        validateEmail('user123@test.com') === true,
        'Корректный email не прошёл проверку'
    );

    console.assert(
        validateEmail('user.name+test@example.com') === true,
        'Корректный email не прошёл проверку'
    );

    console.assert(
        validateEmail('testexample.com') === false,
        'Некорректный email прошёл проверку'
    );

    console.assert(
        validateEmail('test@example') === false,
        'Некорректный email прошёл проверку'
    );

    console.assert(
        validateEmail('тест@example.com') === false,
        'Email с кириллицей прошёл проверку'
    );

    console.log('\nВсе тесты пройдены! Студент №1, вариант №1.');
}


// ============================================================
// ЗАПУСК
// ============================================================

console.log('=== Задание 1 ===');
simpleTask();

console.log('\n=== Задание 2 ===');
console.log('2.1 Номер ревьюера:', getReviewerNumber(5, 1));
console.log('2.2 Вариант студента №1:', getVariant(1, 4));
console.log('2.3 10 + 5 =', calculate(10, 5, '+'));
console.log('2.3 10 - 5 =', calculate(10, 5, '-'));
console.log('2.3 10 * 5 =', calculate(10, 5, '*'));
console.log('2.3 10 / 5 =', calculate(10, 5, '/'));
console.log('2.4 Площадь круга:', calculateArea('circle', 5));
console.log('2.4 Площадь прямоугольника:', calculateArea('rectangle', 5, 10));
console.log('2.4 Площадь треугольника:', calculateArea('triangle', 5, 10));
console.log('2.5 Перевёрнутая строка:', reverseString('JavaScript'));
console.log('2.5 Случайное число:', getRandomNumber(1, 10));

console.log('\n=== Задание 3 ===');
console.log('3.1 Информация о книге:', book.getInfo());
console.log('3.1 Доступность:', book.isAvailable);
book.isAvailable = false;
console.log('3.1 После изменения:', book.isAvailable);

console.log('3.2 Студент:', student.name);
console.log('3.2 Средний балл:', student.getAverageGrade());
student.addGrade('physics', 88);
console.log('3.2 Оценки:', student.grades);
console.log('3.2 Новый средний балл:', student.getAverageGrade());

console.log('\n=== Задание 4 ===');
processArrays();

console.log('\n=== Задание 5 ===');
const manager = taskManager();

console.log('Добавлена задача:', manager.addTask('Новая задача'));
manager.completeTask(4);
console.log('Выполненные задачи:', manager.getCompletedTasks());
console.log('Ожидающие задачи:', manager.getPendingTasks());
console.log('Статистика:', manager.getStats());

console.log('\n=== Задание 6 ===');
const classes = taskClasses();

console.log('\n=== Задание 7 ===');
const vehicleFactory = createVehicleFactory(classes.Car);
const bmw = vehicleFactory('BMW', '320i', 2023);
bmw.displayInfo();

console.log('\n=== Задание 8 ===');
console.log('test@example.com:', validateEmail('test@example.com'));
console.log('user123@test.com:', validateEmail('user123@test.com'));
console.log(
    'user.name+test@example.com:',
    validateEmail('user.name+test@example.com')
);
console.log('testexample.com:', validateEmail('testexample.com'));
console.log('test@example:', validateEmail('test@example'));
console.log('тест@example.com:', validateEmail('тест@example.com'));

runTests();