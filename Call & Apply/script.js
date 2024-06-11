// Call & Apply

const normalPerson = {
    firstName: "Murat",
    LastName: "Khan",
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount) {
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    },
};

const heroPerson = {
    firstName: "John",
    lastName: "Doe",
    salary: 25000,
};

const friendlyPerson = {
    firstName: "Mark",
    lastName: "Wood",
    salary: 20000,
};

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson); // bind

heroChargeBill(3000);
heroChargeBill(5000);

console.log(heroPerson.salary);
console.log(normalPerson.salary);

normalPerson.chargeBill.call(friendlyPerson, 1000, 500, 1500); // call
normalPerson.chargeBill.apply(friendlyPerson, [500, 500, 1000]); // apply
console.log(friendlyPerson.salary);