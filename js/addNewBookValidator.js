const newBook = document.querySelector('.new-book');

// universal validator
const validator = function (element, check) {
    if (check === true) {
        element.setAttribute('data-is-valid', true);
    } else if (check === false) {
        element.setAttribute('data-is-valid', false);
    } else {
        element.setAttribute('data-is-valid', 'none');
    }
};

const isInvalidYear = function (yearNumber, year) {
    return year === '' || yearNumber < 0 || yearNumber > 2025;
};

const yearGroup = newBook.querySelector('.year-group');
const yearInput = yearGroup.querySelector('#book-year');
const isValidYear = yearGroup.querySelector('[data-is-valid="none"]');

export const validatorYear = function () {
    const year = yearInput.value.trim();
    const yearNumber = parseInt(year);
    const yearRegex = /^\d+$/;

    if (year === '') {
        yearInput.setCustomValidity('');
        validator(isValidYear, null);
    } else if (!yearRegex.test(year)) {
        yearInput.setCustomValidity('Please enter a valid year (numbers only)');
        validator(isValidYear, false);
    } else if (isInvalidYear(yearNumber, year)) {
        yearInput.setCustomValidity('Please enter a valid year (between 0 and 2025)');
        validator(isValidYear, false);
    } else {
        yearInput.setCustomValidity('');
        validator(isValidYear, true);
        return year;
    }

    yearInput.reportValidity();
};