// TODO: Write code to define and export the Employee class

// The first class is an `Employee` parent class with the following properties:
//   * name
//   * id
//   * email
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
// and methods:
//  * getName()
//  * getId()
//  * getEmail()
//  * getRole() // Returns 'Employee'

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

// The other three classes will extend `Employee`.
module.exports = Employee; 