import {
  hasFirstAndLastName,
  isDate,
  isEmail,
  isImage,
  isLengthMoreThanTwo,
  isNotEmpty,
  isNotToday,
  isPhoneNumber,
  isRequired,
} from '../validation';

describe('Validation tests', () => {
  describe('isNotEmpty function tests', () => {
    it('the function isNotEmpty should be return true value if the string line is not empty', () => {
      expect(isNotEmpty('testString')).toBe(true);
    });

    it('the function isNotEmpty should be return error text message if the string line is empty', () => {
      expect(typeof isNotEmpty('')).toBe('string');
    });
  });

  describe('hasFirstAndLastName function tests', () => {
    it('when a first name and last name are entered only should return true', () => {
      expect(hasFirstAndLastName('Ivan Ivanov')).toBe(true);
    });

    it('when one word is entered should return an error message', () => {
      expect(typeof hasFirstAndLastName('name')).toBe('string');
    });

    it('when three words entered should return an error message', () => {
      expect(typeof hasFirstAndLastName('one two three')).toBe('string');
    });
  });

  describe('isEmail function tests', () => {
    it('when email@email.com is entered should return true value', () => {
      expect(isEmail('email@email.com')).toBe(true);
    });

    it('when qwefs@123.c is entered should return an error message', () => {
      expect(typeof isEmail('qwefs@123.c')).toBe('string');
    });

    it('when qwe$123.com is entered should return an error message', () => {
      expect(typeof isEmail('qwe$123.com')).toBe('string');
    });
  });

  describe('isPhoneNumber tests', () => {
    it('when phone number length to equals 10 and includes only digit symbols shoul return true value', () => {
      expect(isPhoneNumber('9991234567')).toBe(true);
    });

    it('when phone number length less then 10 should be return an error message', () => {
      expect(typeof isPhoneNumber('999123')).toBe('string');
    });

    it('when phone number includes non digit symbols should return an error message', () => {
      expect(typeof isPhoneNumber('999abc')).toBe('string');
    });
  });

  describe('isDate function tests', () => {
    it('when valid date entered should return true value', () => {
      expect(isDate('1999-12-12')).toBe(true);
    });

    it('when invalid date entered should return an error message', () => {
      expect(typeof isDate('12-12-1999')).toBe('string');
    });
  });

  describe('isNotToday function tests', () => {
    it('when date is today should return an error message', () => {
      expect(typeof isNotToday(Date.now().toString())).toBe('string');
    });

    it('when date is not today should return true value', () => {
      expect(isNotToday('1999-12-12')).toBe(true);
    });

    it('when date is more then valid date should return an error message', () => {
      expect(typeof isNotToday(`${new Date().getFullYear() + 1000}-12-12`)).toBe('string');
    });
  });

  describe('isImage function tests', () => {
    const fileElement = document.createElement('input');
    const files: FileList = Object.create(fileElement.files);

    it('when file is image should return true value', () => {
      files[0] = new File([], 'test-image.png');
      expect(isImage(files)).toBe(true);
    });

    it('when file is not image should return an error message', () => {
      files[0] = new File([], 'test-file.pdf');
      expect(typeof isImage(files)).toBe('string');
    });
  });

  describe('isLengthMoreThen2 function tests', () => {
    it('when the string line is empty should return an error message', () => {
      expect(typeof isLengthMoreThanTwo('')).toBe('string');
    });

    it('when the string line has one symbol should return an error message', () => {
      expect(typeof isLengthMoreThanTwo('a')).toBe('string');
    });

    it('when the string line has two symbols should return an error message', () => {
      expect(typeof isLengthMoreThanTwo('ab')).toBe('string');
    });

    it('when the string line has more two symbols should return true value', () => {
      expect(isLengthMoreThanTwo('abc')).toBe(true);
    });
  });

  describe('isRequired function tests', () => {
    it('when the function is called should return true value in onject', () => {
      expect(isRequired()).toHaveProperty('value', true);
    });

    it('when input value has message should return the same message in object', () => {
      expect(isRequired('test message text')).toHaveProperty('message', 'test message text');
    });
  });
});
