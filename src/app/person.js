export default class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    speak() {
        console.log(`Привет! Меня зовут ${this.name}, мне ${this.age} лет`)
    }
}