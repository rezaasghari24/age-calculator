'use strict';

let birthDay = document.getElementById('input-date--0');
let birthMonth = document.getElementById('input-date--1');
let birthYear = document.getElementById('input-date--2');

let calcDay = document.getElementById('output-date--day');
let calcMonth = document.getElementById('output-date--month');
let calcYear = document.getElementById('output-date--year');

const toggle = document.getElementById('toggle-btn');
const body = document.getElementById('body');

/* Get data from Date object */
const currentDate = new Date();
const currDay = currentDate.getDate();
const currMonth = currentDate.getMonth() + 1;
const currYear = currentDate.getFullYear();

/* Store input date and current date and output date in arrays */
let birthDate = [
	Number(birthDay.value),
	Number(birthMonth.value),
	Number(birthYear.value),
];
const currDate = [currDay, currMonth, currYear];
let calcDate = [calcDay, calcMonth, calcYear];

const btn = document.querySelector('.btn');

/* Reset page values on refresh */
const init = function () {
	birthDay.value = null;
	birthMonth.value = null;
	birthYear.value = null;
	birthDate = [0, 0, 0];
};

/* change the colors when have invalid date and reset when the problem solved */
const colorChanger = function (i) {
	document.getElementById(`label--${i}`).style.color = '#e47b7f';
	document.getElementById(`input-date--${i}`).style.borderColor = '#e47b7f';
};
const colorReset = function (i) {
	document.querySelector(`.input-date__valid--${i}`).textContent = '';
	document.getElementById(`label--${i}`).style.color = 'var(--Smokey-grey)';
	document.getElementById(`input-date--${i}`).style.borderColor =
		'var(--Light-grey)';
};

/* Storing date immediately in arrays*/
const dayToArray = function (e) {
	birthDate[0] = Number(e);
};
const monthToArray = function (e) {
	birthDate[1] = Number(e);
};
const yearToArray = function (e) {
	birthDate[2] = Number(e);
};

/* Resolve date issues when ours birth date bigger than current date */
const resolveDateIssues = function () {
	for (let i = 0; i < birthDate.length - 1; i++) {
		if (birthDate[i] > currDate[i] && i === 0) {
			// Check day
			currDate[i + 1] -= 1;
			currDate[i] += 30;
		} else if (birthDate[i] > currDate[i] && i === 1) {
			// Check month
			currDate[i + 1] -= 1;
			currDate[i] += 12;
		}
	}
};

/* Give error when input box is empty */
const emptyCheck = function () {
	let conditionCheck = false;
	for (let i = 0; i < birthDate.length; i++) {
		if (birthDate[i] <= 0 || birthDate === NaN) {
			document.querySelector(`.input-date__valid--${i}`).textContent =
				'This field is required';
			colorChanger(i);
			conditionCheck = true;
		} else {
			colorReset(i);
		}
	}
	return conditionCheck;
};

/* Give error when we use bigger number for date */
const overDate = function () {
	let conditionCheck = false;
	for (let i = 0; i < birthDate.length; i++) {
		if (birthDate[i] > 31 && i === 0) {
			// For Day
			document.querySelector(`.input-date__valid--${i}`).textContent =
				'Must be a valid day';
			colorChanger(i);
			conditionCheck = true;
		} else if (birthDate[i] > 12 && i == 1) {
			// For Month
			document.querySelector(`.input-date__valid--${i}`).textContent =
				'Must be a valid month';
			colorChanger(i);
			conditionCheck = true;
		} else if (birthDate[i] > currDate[i] && i === 2) {
			// For Year
			document.querySelector(`.input-date__valid--${i}`).textContent =
				'Must be a valid year';
			colorChanger(i);
			conditionCheck = true;
		} else {
			colorReset(i);
		}
	}
	return conditionCheck;
};

btn.addEventListener('click', function () {
	emptyCheck();
	overDate();
	/* Check if two functions for validation are false do calculating data*/
	if (emptyCheck() === false && overDate() === false) {
		resolveDateIssues();
		for (let i = 0; i < birthDate.length; i++) {
			calcDate[i] = currDate[i] - birthDate[i];
		}
		calcDay.textContent = calcDate[0];
		calcMonth.textContent = calcDate[1];
		calcYear.textContent = calcDate[2];
	} else {
		calcDay.textContent = '--';
		calcMonth.textContent = '--';
		calcYear.textContent = '--';
	}
});

/* Change Theme to Dark mode */
toggle.addEventListener('change', () => {
	body.classList.toggle('dark-mode');
});

init();
