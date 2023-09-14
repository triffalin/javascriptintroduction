let age = 32;
let userName = 'Alin';
let hobbies = ['Sports', 'Cooking', 'Reading'];
let job = {
	title: 'Developer',
	place: 'New York',
	salary: 5000,
};

let adultYears;

function calculateAdultYears(userAge) {
	let result;
	result = userAge - 18;
	return result;
}

adultYears = calculateAdultYears(age);
alert(adultYears);

age = 45;
adultYears = calculateAdultYears(age);

alert(adultYears);

let person = {
	name: 'Max', // Property
	greet() {
		// Method
		alert('Hello!');
	},
};

person.greet();
