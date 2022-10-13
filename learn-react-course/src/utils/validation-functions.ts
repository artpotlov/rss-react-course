export const isValidEmpty = (str: string) => {
  return str.trim().length > 0;
};

export const isValidUserName = (userName: string) => {
  const pattern = new RegExp(/^\w\D+\s\w\D+$/i);
  return pattern.test(userName.trim());
};

export const isValidEmail = (email: string) => {
  const pattern = new RegExp(/^[\w\d._:$!%-]+@[\w\d.-]+.[\w\d]{2,}$/i);
  return pattern.test(email.trim());
};

export const isValidPhoneNum = (phone: string) => {
  const pattern = new RegExp(/^\d{10}$/i);
  return pattern.test(phone.trim());
};

export const isValidBirthday = (birthday: string) => {
  const pattern = new RegExp(/^\d{4}-\d{1,2}-\d{1,2}/i);
  return pattern.test(birthday.trim());
};

export const isValidImage = (path: string) => {
  const pattern = new RegExp(/.(png)|(jpg)|(webp)|(svg)$/i);
  return pattern.test(path.trim());
};
