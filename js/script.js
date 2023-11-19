'use strict';

const birthDay = Number(document.getElementById('input-date--day').value);
const birthMonth = Number(document.getElementById('input-date--month').value);
const birthYear = Number(document.getElementById('input-date--year').value);

const calcDay = document.getElementById('output-date--day');
const calcMonth = document.getElementById('output-date--month');
const calcYear = document.getElementById('output-date--year');

const currentDate = new Date();
const currDay = currentDate.getDate();
const currMonth = currentDate.getMonth() + 1;
const currYear = currentDate.getFullYear();

const birthDate = [birthDay,birthMonth,birthYear];
const currDate = [currDay,currMonth,currYear];
const calcDate = [calcDay,calcMonth,calcYear];

const btn = document.querySelector('.btn');

const resolveDateIssues = function () {
    for (let i = 0 ; i < birthDate.length - 1; i++) {
        if(birthDate[i] > currDate[i] && i === 0) {
            currDate[i + 1] -= 1;
            currDate[i] += 30;
        } else if (birthDate[i] > currDate[i] && i === 1) {
                currDate[i + 1] -= 1;
                currDate[i] += 12;
            }
    }
}

resolveDateIssues();
btn.addEventListener('click', function() {   
    for (let i = 0; i < birthDate.length; i++) {
        calcDate[i] = currDate[i] - birthDate[i];
    }

    calcDay.textContent = calcDate[0];
    calcMonth.textContent = calcDate[1];
    calcYear.textContent = calcDate[2];
})