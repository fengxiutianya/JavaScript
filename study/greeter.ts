class Student {
    fullName: string;
    constructor(public firstName, public middle, public lastName) {
        this.fullName = firstName + " " + middle + " " + lastName;
    }
}
interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person: Person) {
    return "hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);