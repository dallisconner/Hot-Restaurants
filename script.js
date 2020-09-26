var customerArr = [];
var reservations = [];
var waitList = [];

class Customer {
    constructor(name, phone, email) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getPhone() {
        return this.phone;
    }

    getEmail() {
        return this.email;
    }

}

module.exports = Customer;

customerArr.push(new Customer("Example Name", "555-555-5555", "example@notareal.com"));

console.log(customerArr);