import React from 'react';
import { TFormErrorFields } from '../../types/types';
import {
  isValidBirthday,
  isValidEmail,
  isValidEmpty,
  isValidImage,
  isValidPhoneNum,
  isValidUserName,
} from '../../utils/validation-functions';

const validateUserName = (
  userNameElement: HTMLInputElement,
  setErrorState: React.Dispatch<React.SetStateAction<TFormErrorFields>>
) => {
  const userNameVal = userNameElement.value.trim();

  if (!isValidEmpty(userNameVal)) {
    setErrorState((prev) => {
      prev.userName.error = true;
      prev.userName.helperText = 'the user must not be empty ';
      return { ...prev };
    });
    userNameElement.value = '';
    return false;
  }

  if (!isValidUserName(userNameVal)) {
    setErrorState((prev) => {
      prev.userName.error = true;
      prev.userName.helperText = 'the user must have a first name and last name';
      return { ...prev };
    });
    userNameElement.value = '';
    return false;
  }

  setErrorState((prev) => {
    prev.userName.error = false;
    prev.userName.helperText = '';
    return { ...prev };
  });

  return true;
};

const validatePhoneNumber = (
  phoneElement: HTMLInputElement,
  setErrorState: React.Dispatch<React.SetStateAction<TFormErrorFields>>
) => {
  const phoneVal = phoneElement.value.trim();

  if (!isValidEmpty(phoneVal)) {
    setErrorState((prev) => {
      prev.phoneNumber.error = true;
      prev.phoneNumber.helperText = 'the phone number must not be empty';
      return { ...prev };
    });
    phoneElement.value = '';
    return false;
  }

  if (!isValidPhoneNum(phoneVal)) {
    setErrorState((prev) => {
      prev.phoneNumber.error = true;
      prev.phoneNumber.helperText = 'the phone number should look like 9991234567';
      return { ...prev };
    });
    phoneElement.value = '';
    return false;
  }

  setErrorState((prev) => {
    prev.phoneNumber.error = false;
    prev.phoneNumber.helperText = '';
    return { ...prev };
  });

  return true;
};

const validateEmail = (
  emailElement: HTMLInputElement,
  setErrorState: React.Dispatch<React.SetStateAction<TFormErrorFields>>
) => {
  const emailVal = emailElement.value.trim();

  if (!isValidEmpty(emailVal)) {
    setErrorState((prev) => {
      prev.email.error = true;
      prev.email.helperText = 'the email must not be empty';
      return { ...prev };
    });
    emailElement.value = '';
    return false;
  }

  if (!isValidEmail(emailVal)) {
    setErrorState((prev) => {
      prev.email.error = true;
      prev.email.helperText = 'the email should look like user@mail.com';
      return { ...prev };
    });
    emailElement.value = '';
    return false;
  }

  setErrorState((prev) => {
    prev.email.error = false;
    prev.email.helperText = '';
    return { ...prev };
  });

  return true;
};

const validateBirthday = (
  birthdayElement: HTMLInputElement,
  setErrorState: React.Dispatch<React.SetStateAction<TFormErrorFields>>
) => {
  const birthdayVal = birthdayElement.value.trim();

  if (!isValidEmpty(birthdayVal)) {
    setErrorState((prev) => {
      prev.birthday.error = true;
      prev.birthday.helperText = 'the birthday must not be empty';
      return { ...prev };
    });
    birthdayElement.value = '';
    return false;
  }

  if (!isValidBirthday(birthdayVal)) {
    setErrorState((prev) => {
      prev.birthday.error = true;
      prev.birthday.helperText = "the birthday isn't correct";
      return { ...prev };
    });
    birthdayElement.value = '';
    return false;
  }

  if (Date.parse(birthdayVal) > Date.now()) {
    setErrorState((prev) => {
      prev.birthday.error = true;
      prev.birthday.helperText = 'the date of birthday must not be more today';
      return { ...prev };
    });
    birthdayElement.value = '';
    return false;
  }

  setErrorState((prev) => {
    prev.birthday.error = false;
    prev.birthday.helperText = '';
    return { ...prev };
  });

  return true;
};

const validateGender = (
  genderElements: RadioNodeList,
  setErrorState: React.Dispatch<React.SetStateAction<TFormErrorFields>>
) => {
  const isChecked = genderElements.value;
  if (!isChecked) {
    setErrorState((prev) => {
      prev.gender.error = true;
      prev.gender.helperText = 'please chose the gender';
      return { ...prev };
    });
    return false;
  }

  setErrorState((prev) => {
    prev.gender.error = false;
    prev.gender.helperText = '';
    return { ...prev };
  });

  return true;
};

const validateFile = (
  fileElement: HTMLInputElement,
  setErrorState: React.Dispatch<React.SetStateAction<TFormErrorFields>>
) => {
  if (fileElement.value.length === 0) {
    setErrorState((prev) => {
      prev.file.error = false;
      prev.file.helperText = '';
      return { ...prev };
    });
    return true;
  }

  if (!isValidImage(fileElement.value)) {
    setErrorState((prev) => {
      prev.file.error = true;
      prev.file.helperText = 'the file must be a image';
      return { ...prev };
    });
    fileElement.value = '';
    return false;
  }

  setErrorState((prev) => {
    prev.file.error = false;
    prev.file.helperText = '';
    return { ...prev };
  });
  return true;
};

const validateCity = (
  city: HTMLSelectElement,
  setErrorState: React.Dispatch<React.SetStateAction<TFormErrorFields>>
) => {
  if (!city) {
    setErrorState((prev) => {
      prev.city.error = true;
      prev.city.helperText = 'the city must not be empty';
      return { ...prev };
    });
    return false;
  }

  setErrorState((prev) => {
    prev.city.error = false;
    prev.city.helperText = '';
    return { ...prev };
  });

  return true;
};

export const isValidForm = (
  form: HTMLFormElement,
  setErrorState: React.Dispatch<React.SetStateAction<TFormErrorFields>>
) => {
  let valid = true;

  const userNameElement = form.elements.namedItem('user-name');

  if (
    !(userNameElement instanceof HTMLInputElement) ||
    !validateUserName(userNameElement, setErrorState)
  ) {
    valid = false;
  }

  const emailElement = form.elements.namedItem('email');
  if (!(emailElement instanceof HTMLInputElement) || !validateEmail(emailElement, setErrorState)) {
    valid = false;
  }

  const phoneElement = form.elements.namedItem('phone-number');

  if (
    !(phoneElement instanceof HTMLInputElement) ||
    !validatePhoneNumber(phoneElement, setErrorState)
  ) {
    valid = false;
  }

  const birthdayElement = form.elements.namedItem('birthday');

  if (
    !(birthdayElement instanceof HTMLInputElement) ||
    !validateBirthday(birthdayElement, setErrorState)
  ) {
    valid = false;
  }

  const cityElement = form.elements.namedItem('city');
  if (!(cityElement instanceof HTMLSelectElement) || !validateCity(cityElement, setErrorState)) {
    valid = false;
  }

  const genderElements = form.elements.namedItem('gender');

  if (
    !(genderElements instanceof RadioNodeList) ||
    !validateGender(genderElements, setErrorState)
  ) {
    valid = false;
  }

  const fileElement = form.elements.namedItem('file');

  if (!(fileElement instanceof HTMLInputElement) || !validateFile(fileElement, setErrorState)) {
    valid = false;
  }
  return valid;
};
