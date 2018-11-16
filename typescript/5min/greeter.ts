function greeter(greeter :string){
	return 'hello' + greeter
}

greeter('12312');



interface Person{
	firstName:string,
	lastName:string
}


function greeter2(person:Person){
	return 'hello ' + person.firstName + '  ' + person.lastName;
}

greeter2({firstName:'Tom',lastName:'Jackson'});


class Student{
	fullName:string;
	constructor(public firstName:string, middleInitial:string,public lastName:string){
		this.fullName =  firstName + ' ' + middleInitial + ' ' + lastName
	}
}

interface Person2{
	firstName:string,
	middleInitial:string,
	lastName:string
}

let user = new Student('Jane','M.','king');
console.log(greeter2(user))

document.body.innerHTML = greeter2(user)

