let age = 32;
let userName = 'Alin';
let hobbies = ['Sports', 'Cooking', 'Reading'];
let job = {
	title: 'Developer',
	place: 'New York',
	salary: 5000,
};

let adultYears;

function calculateAdultYears() {
	return age - 18;
}

adultYears = calculateAdultYears();
alert(adultYears);

age = 45;
adultYears = calculateAdultYears();

alert(adultYears);
