class Person {
    constructor(name = "Anonymous", age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I'm ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() { //overrides parent information
        let description = super.getDescription(); //super to get parent info
        if(this.hasMajor()){
            description += ` Their major is ${this.major}`; 
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, home) {
        super(name, age);
        this.home = home;
    }
    hasHome() {
        return !!this.home;
    }
    getGreeting() {
        let greet = super.getGreeting();
        if(this.hasHome()){
            greet +=  `I'm visiting from ${home}!`;
        }
        return greet;
    }
}

const me = new Student("Andrew Michaelis", 26, "Computer Sci");
console.log(me);

const other = new Student();
console.log(other);

const Bilbo = new Traveler("Bilbo Baggins", 100, "The Shire");
console.log(Bilbo.getGreeting());