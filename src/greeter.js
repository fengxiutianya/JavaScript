class Student {
    constructor(firstName, middle, lastName) {
        this.firstName = firstName;
        this.middle = middle;
        this.lastName = lastName;
        this.fullName = firstName + " " + middle + " " + lastName;
    }
}
function greeter(person) {
    return "hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
