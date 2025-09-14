const currentDate = new Date();

const date = document.querySelector('input[type="date"]');

const ageText = document.querySelector('.text-age');

function getAge() {
	console.log(ageText);

	console.log();
	const dateValue = new Date(date.value);
	const age = currentDate.getFullYear() - dateValue.getFullYear();
	ageText.textContent = age;
}

date.addEventListener('input', getAge);
