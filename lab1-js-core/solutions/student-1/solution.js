'use strict';

// ============================================================
// ЗАДАНИЕ 1: Базовые операции
// ============================================================

function simpleTask() {
    // 1.1 Объявляем переменные разных типов

    const studentNumber = 1;
    const studentName = "Студент №1";
    const isStudent = true;
    const averageMark = 4.5;
    const subjects = ["JavaScript", "Базы данных", "Программирование"];

    // 1.2 Выводим типы всех переменных

    console.log("Тип studentNumber:", typeof studentNumber);
    console.log("Тип studentName:", typeof studentName);
    console.log("Тип isStudent:", typeof isStudent);
    console.log("Тип averageMark:", typeof averageMark);
    console.log("Тип subjects:", typeof subjects);
}


// ============================================================
// ЗАДАНИЕ 2: Функции
// ============================================================

// 2.1 Функция определения номера ревьюера
function getReviewerNumber(number, lab) {
    return number + lab;
}


// 2.2 Функция определения номера варианта
function getVariant(number, variants) {
    return number % variants;
}


// 2.3 Функция-калькулятор
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
                throw new Error("Деление на ноль невозможно");
            }
            return a / b;

        default:
            throw new Error(`Неизвестная операция: ${operation}`);
    }
}


// 2.4 Функция определения площади фигур
function calculateArea(figure, ...params) {
    switch (figure) {
        case 'circle': {
            const [radius] = params;
            return Math.PI * radius * radius;
        }

        case 'rectangle': {
            const [width, height] = params;
            return width * height;
        }

        case 'triangle': {
            const [base, height] = params;
            return (base * height) / 2;
        }

        default:
            throw new Error(`Неизвестная фигура: ${figure}`);
    }
}


// 2.5 Стрелочные функции

// Переворачивает строку
const reverseString = (str) => {
    return str.split('').reverse().join('');
};


// Возвращает случайное целое число от min до max
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


// ============================================================
// ЗАДАНИЕ 3: Объекты
// ============================================================

// 3.1 Объект "книга"

const book = {
    title: "Война и мир",
    author: "Лев Толстой",
    year: 1869,
    pages: 1225,
    available: true,

    getInfo() {
        return `"${this.title}", автор: ${this.author}, год: ${this.year}, страниц: ${this.pages}`;
    },

    toggleAvailability() {
        this.available = !this.available;
        return this.available;
    }
};


// 3.2 Объект "студент"

const student = {
    name: "Анна Петрова",
    age: 20,
    course: 2,

    grades: {
        math: 90,
        programming: 95,
        history: 85
    },

    // Метод расчёта среднего балла
    getAverageGrade() {
        const grades = Object.values(this.grades);

        if (grades.length === 0) {
            return 0;
        }

        const sum = grades.reduce((total, grade) => total + grade, 0);

        return sum / grades.length;
    },

    // Метод добавления новой оценки
    addGrade(subject, grade) {
        this.grades[subject] = grade;
    }
};


// ============================================================
// ЗАДАНИЕ 4: Массивы
// ============================================================

function processArrays() {

    const numbers = [
        12, 45, 23, 67, 34,
        89, 56, 91, 27, 14
    ];

    const words = [
        "JavaScript",
        "программирование",
        "массив",
        "функция",
        "объект"
    ];

    const users = [
        {
            id: 1,
            name: "Анна",
            age: 25,
            isActive: true
        },
        {
            id: 2,
            name: "Борис",
            age: 30,
            isActive: false
        },
        {
            id: 3,
            name: "Виктория",
            age: 22,
            isActive: true
        },
        {
            id: 4,
            name: "Григорий",
            age: 35,
            isActive: true
        },
        {
            id: 5,
            name: "Дарья",
            age: 28,
            isActive: false
        }
    ];


    // 4.1 forEach
    console.log("Числа больше 50:");

    numbers.forEach(number => {
        if (number > 50) {
            console.log(number);
        }
    });


    // 4.2 map
    const squares = numbers.map(number => number * number);

    console.log("Квадраты чисел:", squares);


    // 4.3 filter
    const activeUsers = users.filter(user => user.isActive);

    console.log(
        "Активные пользователи:",
        activeUsers.map(user => user.name)
    );


    // 4.4 find
    const victoria = users.find(user => user.name === "Виктория");

    console.log("Найден пользователь:", victoria);


    // 4.5 reduce
    const sum = numbers.reduce(
        (total, number) => total + number,
        0
    );

    console.log("Сумма чисел:", sum);


    // 4.6 sort
    const sortedByAge = [...users].sort(
        (a, b) => b.age - a.age
    );

    console.log(
        "Пользователи по убыванию возраста:",
        sortedByAge.map(user => `${user.name} (${user.age})`)
    );


    // 4.7 every
    const allAdults = users.every(
        user => user.age > 18
    );

    console.log(
        "Все пользователи старше 18 лет:",
        allAdults
    );


    // 4.8 Цепочка методов
    const activeUserNames = users
        .filter(user => user.isActive)
        .map(user => user.name)
        .sort();

    console.log(
        "Имена активных пользователей:",
        activeUserNames
    );


    return {
        numbers,
        words,
        users,
        squares,
        activeUsers,
        victoria,
        sum,
        sortedByAge,
        allAdults,
        activeUserNames
    };
}// ============================================================
// ЗАДАНИЕ 5: Менеджер задач
// ============================================================

const taskManager = {

    tasks: [
        {
            id: 1,
            title: "Изучить JavaScript",
            completed: false,
            priority: "high"
        },
        {
            id: 2,
            title: "Сделать лабораторную работу",
            completed: true,
            priority: "high"
        },
        {
            id: 3,
            title: "Прочитать книгу",
            completed: false,
            priority: "medium"
        }
    ],


    // 5.1 Добавление задачи
    addTask(title, priority = "medium") {

        const newId = this.tasks.length > 0
            ? Math.max(...this.tasks.map(task => task.id)) + 1
            : 1;

        const newTask = {
            id: newId,
            title: title,
            completed: false,
            priority: priority
        };

        this.tasks.push(newTask);

        return newTask;
    },


    // 5.2 Отметка выполнения
    completeTask(taskId) {

        const task = this.tasks.find(
            task => task.id === taskId
        );

        if (!task) {
            return false;
        }

        task.completed = true;

        return true;
    },


    // 5.3 Удаление задачи
    deleteTask(taskId) {

        const index = this.tasks.findIndex(
            task => task.id === taskId
        );

        if (index === -1) {
            return false;
        }

        this.tasks.splice(index, 1);

        return true;
    },


    // 5.4 Получение задач по статусу
    getTasksByStatus(completed) {

        return this.tasks.filter(
            task => task.completed === completed
        );
    },


    // 5.5 Статистика
    getStats() {

        const total = this.tasks.length;

        const completed = this.tasks.filter(
            task => task.completed
        ).length;

        const pending = total - completed;

        const completionRate = total === 0
            ? 0
            : (completed / total) * 100;

        return {
            total,
            completed,
            pending,
            completionRate
        };
    }
};


// ============================================================
// ЗАДАНИЕ 6: Классы и наследование
// ============================================================

function taskClasses() {

    // --------------------------------------------------------
    // 6.1 Базовый класс Vehicle
    // --------------------------------------------------------

    class Vehicle {

        constructor(make, model, year) {
            this.make = make;
            this.model = model;

            // Используем setter для проверки года
            this.year = year;

            // Увеличиваем количество созданных автомобилей
            Vehicle.vehicleCount++;
        }


        // Вывод информации
        displayInfo() {
            console.log(
                `Марка: ${this.make}, Модель: ${this.model}, Год: ${this.year}`
            );
        }


        // Геттер возраста автомобиля
        get age() {
            return new Date().getFullYear() - this.year;
        }


        // Сеттер года выпуска
        set year(newYear) {

            const currentYear = new Date().getFullYear();

            if (newYear > currentYear) {
                throw new Error(
                    "Год выпуска не может быть больше текущего года"
                );
            }

            this._year = newYear;
        }


        // Геттер года
        get year() {
            return this._year;
        }


        // 6.4 Статический метод сравнения возраста
        static compareAge(vehicle1, vehicle2) {
            return vehicle1.age - vehicle2.age;
        }


        // Получение количества созданных транспортных средств
        static getTotalVehicles() {
            return Vehicle.vehicleCount;
        }
    }


    // Статическое свойство
    Vehicle.vehicleCount = 0;


    // --------------------------------------------------------
    // 6.2 Класс Car
    // --------------------------------------------------------

    class Car extends Vehicle {

        constructor(make, model, year, numDoors = 4) {

            // Обязательно вызываем конструктор родителя
            super(make, model, year);

            this.numDoors = numDoors;
        }


        // Переопределяем displayInfo()
        displayInfo() {

            super.displayInfo();

            console.log(
                `Количество дверей: ${this.numDoors}`
            );
        }


        // Звуковой сигнал
        honk() {
            console.log("Beep beep!");
        }
    }


    // --------------------------------------------------------
    // 6.3 Класс ElectricCar
    // --------------------------------------------------------

    class ElectricCar extends Car {

        constructor(
            make,
            model,
            year,
            numDoors = 4,
            batteryCapacity = 60
        ) {

            super(
                make,
                model,
                year,
                numDoors
            );

            this.batteryCapacity = batteryCapacity;
        }


        // Переопределяем displayInfo()
        displayInfo() {

            super.displayInfo();

            console.log(
                `Емкость батареи: ${this.batteryCapacity} кВт·ч`
            );
        }


        // Расчёт запаса хода
        calculateRange() {

            // 1 кВт·ч = 6 км
            return this.batteryCapacity * 6;
        }
    }


    // ========================================================
    // ЗАДАНИЕ 7: Каррирование
    // ========================================================

    // 7.1 Создание фабрики транспортных средств
    //
    // Функция получает тип транспорта,
    // а затем возвращает функцию,
    // которая создаёт объект этого типа.

    const createVehicleFactory = (vehicleType) => {

        return (make, model, year) => {

            // Для Car по условию задания
            // используем 4 двери по умолчанию.
            if (vehicleType === Car) {

                return new vehicleType(
                    make,
                    model,
                    year,
                    4
                );
            }


            // Для ElectricCar используем:
            // 4 двери и батарею 60 кВт·ч.
            if (vehicleType === ElectricCar) {

                return new vehicleType(
                    make,
                    model,
                    year,
                    4,
                    60
                );
            }


            // Для обычного Vehicle
            return new vehicleType(
                make,
                model,
                year
            );
        };
    };


    // Возвращаем классы и фабрику
    return {
        Vehicle,
        Car,
        ElectricCar,
        createVehicleFactory
    };
}// ============================================================
// ЗАДАНИЕ 8: Регулярные выражения
// Вариант 1
// ============================================================

/*
 * Вариант 1: Валидация email адреса
 *
 * Правила:
 * - Латиница
 * - Цифры
 * - Спецсимволы: ._%+-
 * - Обязательный символ @
 * - Доменная часть: латиница, цифры, точка
 * - Минимальная длина 5 символов
 */


function validateEmail(email) {

    const emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email);
}


// ============================================================
// ТЕСТИРОВАНИЕ
// ============================================================

function runTests() {

    console.log("=== ТЕСТИРОВАНИЕ ===");


    // ========================================================
    // ЗАДАНИЕ 1
    // ========================================================

    console.log("\n--- Задание 1 ---");

    simpleTask();


    // ========================================================
    // ЗАДАНИЕ 2
    // ========================================================

    console.log("\n--- Задание 2 ---");


    // 2.1 Получение номера ревьюера

    console.log(
        "2.1 Номер ревьюера:",
        getReviewerNumber(5, 1)
    );


    // 2.2 Получение номера варианта

    console.log(
        "2.2 Номер варианта для студента №1:",
        getVariant(1, 4)
    );


    // 2.3 Калькулятор

    console.log(
        "2.3 Сложение 10 + 5:",
        calculate(10, 5, '+')
    );

    console.log(
        "2.3 Вычитание 10 - 5:",
        calculate(10, 5, '-')
    );

    console.log(
        "2.3 Умножение 10 * 5:",
        calculate(10, 5, '*')
    );

    console.log(
        "2.3 Деление 10 / 5:",
        calculate(10, 5, '/')
    );


    // 2.4 Площади фигур

    console.log(
        "2.4 Площадь круга (r = 5):",
        calculateArea("circle", 5)
    );

    console.log(
        "2.4 Площадь прямоугольника (5 x 10):",
        calculateArea("rectangle", 5, 10)
    );

    console.log(
        "2.4 Площадь треугольника (основание 5, высота 10):",
        calculateArea("triangle", 5, 10)
    );


    // 2.5 Стрелочные функции

    console.log(
        "2.5 Перевёрнутая строка:",
        reverseString("JavaScript")
    );

    console.log(
        "2.5 Случайное число от 1 до 10:",
        getRandomNumber(1, 10)
    );


    // Проверка основных функций задания 2

    console.assert(
        getReviewerNumber(5, 1) === 6,
        "Тест 2.1 провален"
    );

    console.assert(
        calculate(10, 5, '+') === 15,
        "Тест 2.3 провален"
    );


    // ========================================================
    // ЗАДАНИЕ 3
    // ========================================================

    console.log("\n--- Задание 3 ---");


    // 3.1 Книга

    console.log(
        "3.1 Информация о книге:",
        book.getInfo()
    );

    console.log(
        "3.1 Доступность книги до изменения:",
        book.available
    );

    book.toggleAvailability();

    console.log(
        "3.1 Доступность книги после изменения:",
        book.available
    );


    // 3.2 Студент

    console.log(
        "3.2 Студент:",
        student.name
    );

    console.log(
        "3.2 Средний балл:",
        student.getAverageGrade()
    );

    student.addGrade("physics", 88);

    console.log(
        "3.2 Оценки после добавления physics:",
        student.grades
    );

    console.log(
        "3.2 Новый средний балл:",
        student.getAverageGrade()
    );


    // ========================================================
    // ЗАДАНИЕ 4
    // ========================================================

    console.log("\n--- Задание 4 ---");

    processArrays();


    // ========================================================
    // ЗАДАНИЕ 5
    // ========================================================

    console.log("\n--- Задание 5 ---");


    // 5.1 Добавление задачи

    const newTask = taskManager.addTask(
        "Повторить функции JavaScript",
        "medium"
    );

    console.log(
        "5.1 Добавленная задача:",
        newTask
    );


    // 5.2 Выполнение задачи

    taskManager.completeTask(newTask.id);

    console.log(
        "5.2 Выполненная задача:",
        taskManager.tasks.find(
            task => task.id === newTask.id
        )
    );


    // 5.3 Удаление задачи

    const deletedTask = taskManager.deleteTask(
        newTask.id
    );

    console.log(
        "5.3 Задача удалена:",
        deletedTask
    );


    // 5.4 Получение задач по статусу

    console.log(
        "5.4 Выполненные задачи:",
        taskManager.getTasksByStatus(true)
    );

    console.log(
        "5.4 Невыполненные задачи:",
        taskManager.getTasksByStatus(false)
    );


    // 5.5 Статистика

    const stats = taskManager.getStats();

    console.log(
        "5.5 Статистика:",
        stats
    );


    console.assert(
        stats.total === 3,
        "Тест задания 5.5 провален"
    );


    // ========================================================
    // ЗАДАНИЕ 6
    // ========================================================

    console.log("\n--- Задание 6 ---");

    const {
        Vehicle,
        Car,
        ElectricCar,
        createVehicleFactory
    } = taskClasses();


    // 6.1 Vehicle

    const vehicle = new Vehicle(
        "Toyota",
        "Corolla",
        2016
    );

    console.log("6.1 Vehicle:");

    vehicle.displayInfo();

    console.log(
        `6.1 Возраст автомобиля: ${vehicle.age} лет`
    );


    // 6.2 Car

    const car = new Car(
        "Kia",
        "Rio",
        2021,
        4
    );

    console.log("\n6.2 Car:");

    car.displayInfo();

    car.honk();


    // 6.3 ElectricCar

    const electricCar = new ElectricCar(
        "Tesla",
        "Model 3",
        2022,
        4,
        60
    );

    console.log("\n6.3 ElectricCar:");

    electricCar.displayInfo();

    console.log(
        `6.3 Запас хода: ${electricCar.calculateRange()} км`
    );


    // 6.4 Статические методы

    const vehicle2 = new Vehicle(
        "BMW",
        "X5",
        2018
    );

    console.log(
        "\n6.4 Разница в возрасте:",
        Vehicle.compareAge(vehicle, vehicle2)
    );

    console.log(
        "6.4 Всего создано транспортных средств:",
        Vehicle.getTotalVehicles()
    );


    // Проверка возраста

    const testVehicle = new Vehicle(
        "Test",
        "Model",
        2010
    );

    console.assert(
        testVehicle.age ===
        (new Date().getFullYear() - 2010),
        "Тест возраста провален"
    );


    // ========================================================
    // ЗАДАНИЕ 7
    // ========================================================

    console.log("\n--- Задание 7 ---");


    // 7.1 Создаём фабрику автомобилей

    const createCarFactory =
        createVehicleFactory(Car);


    // 7.2 Используем полученную функцию

    const myNewCar = createCarFactory(
        "BMW",
        "320i",
        2023
    );


    // 7.3 Проверяем созданный автомобиль

    console.log(
        "7.3 Создан автомобиль через фабрику:"
    );

    myNewCar.displayInfo();


    // Проверяем, что двери больше не undefined

    console.assert(
        myNewCar.numDoors === 4,
        "Тест задания 7 провален: количество дверей должно быть 4"
    );


    // ========================================================
    // ЗАДАНИЕ 8: Вариант 1
    // ========================================================

    console.log("\n--- Задание 8: вариант 1 ---");


    // 8.1 Корректный email

    console.log(
        "8.1 test@example.com:",
        validateEmail("test@example.com")
    );


    // 8.2 Email с цифрами

    console.log(
        "8.2 user123@test.com:",
        validateEmail("user123@test.com")
    );


    // 8.3 Email со специальными символами

    console.log(
        "8.3 user.name+test@example.com:",
        validateEmail("user.name+test@example.com")
    );


    // 8.4 Email без @

    console.log(
        "8.4 testexample.com:",
        validateEmail("testexample.com")
    );


    // 8.5 Email без доменной зоны

    console.log(
        "8.5 test@example:",
        validateEmail("test@example")
    );


    // 8.6 Email с кириллицей

    console.log(
        "8.6 тест@example.com:",
        validateEmail("тест@example.com")
    );


    // Проверки варианта 1

    console.assert(
        validateEmail("test@example.com") === true,
        "Тест 8.1 провален"
    );

    console.assert(
        validateEmail("user123@test.com") === true,
        "Тест 8.2 провален"
    );

    console.assert(
        validateEmail("user.name+test@example.com") === true,
        "Тест 8.3 провален"
    );

    console.assert(
        validateEmail("testexample.com") === false,
        "Тест 8.4 провален"
    );

    console.assert(
        validateEmail("test@example") === false,
        "Тест 8.5 провален"
    );

    console.assert(
        validateEmail("тест@example.com") === false,
        "Тест 8.6 провален"
    );


    // ========================================================
    // ФИНАЛ
    // ========================================================

    console.log("\n=================================");
    console.log("Все тесты пройдены! ✅");
    console.log("Номер студента: 1");
    console.log("Вариант: 1");
    console.log("=================================");
}


// ============================================================
// ЗАПУСК
// ============================================================

runTests();