import React from 'react';
import { TFormStore } from '../../types/types';

export const getDataFromForm = (
  formElement: HTMLFormElement,
  setFormStore: React.Dispatch<React.SetStateAction<TFormStore[]>>
) => {
  const store: TFormStore = {};
  const form = new FormData(formElement);
  const userName = form.get('user-name');
  const email = form.get('email');
  const phoneNumber = form.get('phone-number');
  const birthday = form.get('birthday');
  const city = form.get('city');
  const gender = form.get('gender');
  const cashback = form.getAll('cashback');
  const file = form.get('file');

  typeof userName === 'string' ? (store.userName = userName) : (store.userName = '');
  typeof email === 'string' ? (store.email = email) : (store.email = '');
  typeof phoneNumber === 'string' ? (store.phoneNumber = phoneNumber) : (store.phoneNumber = '');
  typeof birthday === 'string' ? (store.birthday = birthday) : (store.birthday = '');
  typeof city === 'string' ? (store.city = city) : (store.city = '');
  typeof gender === 'string' ? (store.gender = gender) : (store.gender = '');
  cashback.every((cash) => typeof cash === 'string') ? (store.cashback = cashback as string[]) : [];
  file instanceof File ? (store.file = file.name) : '';

  setFormStore((prev) => [store, ...prev]);
};
