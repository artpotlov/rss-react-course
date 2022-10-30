export const isNotEmpty = (str: string) => {
  return str.trim().length > 0 || 'the field must not be empty';
};

export const hasFirstAndLastName = (userName: string) => {
  const pattern = new RegExp(/^[\p{L}-]+\s[\p{L}-]+$/imu);
  return pattern.test(userName.trim()) || 'the user must have a first name and last name';
};

export const isEmail = (email: string) => {
  const pattern = new RegExp(/^[\w._:$!%-]+@[\w.-]+.\w{2,}$/im);
  return pattern.test(email.trim()) || 'the email should look like user@mail.com';
};

export const isPhoneNumber = (phone: string) => {
  const pattern = new RegExp(/^\d{10}$/im);
  return pattern.test(phone.trim()) || 'the phone number should look like 9991234567';
};

export const isDate = (date: string) => {
  const pattern = new RegExp(/^\d{4}-\d{1,2}-\d{1,2}/im);
  return pattern.test(date.trim()) || "the birthday isn't correct";
};

export const isNotToday = (date: string) => {
  return Date.parse(date) < Date.now() || 'the date must not be more today';
};

export const isImage = (files: FileList) => {
  if (files.length === 0) return;
  const pattern = new RegExp(/.(png)|(jpg)|(webp)|(svg)$/im);
  return pattern.test(files[0].name) || 'the file must be an image';
};

export const isLengthMoreThanTwo = (str: string) => {
  return str.length > 2 || 'the text length must be more than 2 symbols';
};

export const isRequired = (message = 'the field is required') => {
  return {
    value: true,
    message,
  };
};
