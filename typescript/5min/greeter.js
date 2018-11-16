function greeter(greeter) {
    return 'hello' + greeter;
}
greeter('12312');
function greeter2(person) {
    return 'hello ' + person.firstName + '  ' + person.lastName;
}
greeter2({ firstName: 'Tom', lastName: 'Jackson' });
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
var user = new Student('Jane', 'M.', 'king');
console.log(greeter2(user));
document.body.innerHTML = greeter2(user);
