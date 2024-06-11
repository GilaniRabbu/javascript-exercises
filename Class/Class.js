class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const HeroPerson = new Person("John", "Doe", 20000);

console.log(HeroPerson);

const FriendlyPerson = new Person("Murat", "Khan", 15000);

console.log(FriendlyPerson);