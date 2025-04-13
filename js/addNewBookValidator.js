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
        yearInput.setCustomValidity('Please enter a year');
        validator(isValidYear, false);
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
    return false;
};

const titleGroup = newBook.querySelector('.title-group');
const titleInput = titleGroup.querySelector('#book-title');
const isValidTitle = titleGroup.querySelector('[data-is-valid="none"]');

export const validatorTitle = function () {
    const title = titleInput.value.trim();

    if (title === '') {
        titleInput.setCustomValidity('Please enter a book title');
        validator(isValidTitle, false);
    } else if (title.length > 100) {
        titleInput.setCustomValidity('The max is 100 characters');
        validator(isValidTitle, false);
    } else {
        titleInput.setCustomValidity('');
        validator(isValidTitle, true);
        return title;
    }

    titleInput.reportValidity();
    return false;
};

const authorGroup = newBook.querySelector('.author-group');
const authorInput = authorGroup.querySelector('#book-author');
const isValidAuthor = authorGroup.querySelector('[data-is-valid="none"]');

export const validatorAuthor = function () {
    const author = authorInput.value.trim();

    if (author === '') {
        authorInput.setCustomValidity('Please enter an author name');
        validator(isValidAuthor, false);
    } else if (author.length > 50) {
        authorInput.setCustomValidity('The max is 50 characters');
        validator(isValidAuthor, false);
    } else { 
        authorInput.setCustomValidity('');
        validator(isValidAuthor, true);
        return author;
    }

    authorInput.reportValidity();
    return false;
};

const descriptionGroup = newBook.querySelector('.description-group');
const descriptionInput = descriptionGroup.querySelector('#book-description');
const isValidDescription = descriptionGroup.querySelector('[data-is-valid="none"]');

export const validatorDescription = function () {
    const description = descriptionInput.value.trim();

    if (description === '') {
        descriptionInput.setCustomValidity('Please enter a description:');
        validator(isValidDescription, false);
    } else if (description.length > 500) {
        descriptionInput.setCustomValidity('The max is 500 characters');
        validator(isValidDescription, false);
    } else {
        descriptionInput.setCustomValidity('');
        validator(isValidDescription, true);
        return description;
    }

    descriptionInput.reportValidity();
    return false;
}

const coverGroup = newBook.querySelector('.cover-group');
const coverInput = coverGroup.querySelector('#book-cover');
const isValidCover = coverGroup.querySelector('[data-is-valid="none"]');

export const validatorCover = function () {
    const cover = coverInput.value.trim();
    const coverRegex = /^https?:\/\//;

    if (cover === '') {
        coverInput.setCustomValidity('Please enter a cover image URL');
        validator(isValidCover, false);
    } else if (!coverRegex.test(cover)) {
        coverInput.setCustomValidity('Please enter a valid url starting with http or https');
        validator(isValidCover, false);
    } else {
        coverInput.setCustomValidity('');
        validator(isValidCover, true);
        return cover;
    }

    coverInput.reportValidity();
    return false;
};

const submissionHandler = function () {
    const isTitleValid = validatorTitle();
    const isAuthorValid = validatorAuthor();
    const isYearValid = validatorYear();
    const isDescriptionValid = validatorDescription();
    const isCoverValid = validatorCover();

    return (
        isTitleValid &&
        isAuthorValid &&
        isYearValid &&
        isDescriptionValid &&
        isCoverValid
    );
};

const resetValidationIndicator = function (isValid) {
    isValid.setAttribute('data-is-valid', 'none');
};

export const resetInput = function () {
    titleInput.value = '';
    authorInput.value = '';
    yearInput.value = '';
    descriptionInput.value = '';
    coverInput.value = '';

    titleInput.setCustomValidity('');
    authorInput.setCustomValidity('');
    yearInput.setCustomValidity('');
    descriptionInput.setCustomValidity('');
    coverInput.setCustomValidity('');

    resetValidationIndicator(isValidTitle);
    resetValidationIndicator(isValidAuthor);
    resetValidationIndicator(isValidYear);
    resetValidationIndicator(isValidDescription);
    resetValidationIndicator(isValidCover);

    titleInput.focus();
};

yearInput.addEventListener('input', validatorYear);
titleInput.addEventListener('input', validatorTitle);
authorInput.addEventListener('input', validatorAuthor);
descriptionInput.addEventListener('input', validatorDescription);
coverInput.addEventListener('input', validatorCover);
