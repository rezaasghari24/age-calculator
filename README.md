# My Project: Age Calculator

![Alt text](/design/image.png)

#### Video Demo: <https://www.youtube.com/watch?v=m7HbY0Qn9kA>

#### Live Demo: <https://rezaasghari24.github.io/age-calculator/>

Welcome to the Age Calculator web-based project. This project allows users to calculate their age in various time periods such as days, months, and years. It also includes a dark mode option for an enhanced user experience.

Technologies used:

-   HTML
-   CSS
-   JavaScript

## Features

-   Calculate age in days, months, and years
-   Responsive design for optimal user experience on various devices
-   Dark mode option for a more personalized experience

## Description:

1. Getting Current Date: I retrieve the current date and time using the 'Date' object in JavaScript. I extract the day, month, and year from the current date and store them in the 'currDate' array.

```js
const currentDate = new Date();
const currDay = currentDate.getDate();
const currMonth = currentDate.getMonth() + 1;
const currYear = currentDate.getFullYear();
```

2. resolveDateIssues(): The function is written for the purpose of ensuring that if the current date is less than the birthdate, the output is not negative. Instead, it subtracts one from the next unit of time (if the day is less than the birth day, it subtracts one month; if the month is less than the birth month, it subtracts one year).

```js
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
```

3. emptyCheck(): The function checks the input, and if it is empty or less than or equal to zero, it returns an error message.

![Alt text](/design/image-1.png)

![Alt text](/design/image-2.png)

```js
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
```

4.overDate(): The function is designed to validate that the input date is not greater than the maximum value allowed for each component (e.g., ensuring the day is not greater than 31). This is a validation mechanism to prevent entering invalid or unrealistic dates.

![Alt text](/design/image-3.png)

```js
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
```

5.Calculating Age: In the click event of button, I checked if emptyCheck() and overDate() functions are false (or we put a valid date) calculate the age.

```js
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
```

6.Changing Theme to Dark Mode: We add an event listener to the 'toggle' switch, which toggles the theme between light and dark modes. The 'body' element's class is updated to reflect the current theme.

![Alt text](/design/image-4.png)

```js
toggle.addEventListener('change', () => {
	body.classList.toggle('dark-mode');
});
```

7. ‌By using MediaQuery making this web application user-friendly and usable on all devices, such as PCs, laptops, tablets, and smartphones.

    ![Alt text](/design/image-5.png)
