/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import TextField from '../FormElements/TextField/TextField';
import { css } from '@emotion/react';
import { BoxGroup, Date, File, FormCard, Radio, Select } from '../FormElements';
import CheckBox from '../FormElements/Checkbox/Checkbox';
import { Button } from '../Button';
import { CITIES } from '../../constants';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TFormStore } from '../../types/types';
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
} from '../../utils/validation';
import FormContainer from './FormContainer.styled';

const RegForm = () => {
  const [formStore, setFormStore] = useState<TFormStore[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm({ mode: 'onBlur' });
  const onSubmit: SubmitHandler<TFormStore> = (data) => {
    setFormStore((prev) => [data, ...prev]);
    reset();
  };

  const gridFullLength = css`
    grid-column-end: span 2;
  `;

  return (
    <>
      <FormContainer noValidate data-testid="reg-form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          css={gridFullLength}
          {...register('userName', {
            required: isRequired('the user field is required'),
            validate: {
              isNotEmpty,
              isLengthMoreThanTwo,
              hasFirstAndLastName,
            },
          })}
          helperText={errors?.userName?.message as string}
          type="text"
          placeholder="First and last name"
          title="User"
          autoFocus
          required
        />
        <TextField
          {...register('email', {
            required: isRequired('the email field is required'),
            validate: {
              isNotEmpty,
              isEmail,
            },
          })}
          helperText={errors?.email?.message as string}
          type="email"
          placeholder="name@mail.com"
          title="E-mail"
          required
        />
        <TextField
          {...register('phoneNumber', {
            required: isRequired('the phone number field is required'),
            validate: {
              isNotEmpty,
              isPhoneNumber,
            },
          })}
          helperText={errors?.phoneNumber?.message as string}
          type="tel"
          placeholder="9991234567"
          title="Phone number"
          required
        />
        <Date
          {...register('birthday', {
            required: isRequired('the birthday field is required'),
            validate: {
              isNotEmpty,
              isDate,
              isNotToday,
            },
          })}
          helperText={errors?.birthday?.message as string}
          title="Birthday"
          required
        />
        <Select
          {...register('city', {
            required: isRequired('please chose your city name'),
          })}
          helperText={errors?.city?.message as string}
          title="City"
          options={CITIES}
          required
        />
        <BoxGroup helperText={errors?.gender?.message as string} title="Gender" required>
          <Radio
            {...register('gender', {
              required: isRequired('the gender is required'),
            })}
            value="male"
            title="Male"
          />
          <Radio
            {...register('gender', {
              required: isRequired('the gender is required'),
            })}
            value="female"
            title="Female"
          />
        </BoxGroup>
        <BoxGroup title="Cashback category">
          <CheckBox {...register('cashback')} title="1% for everything" value="all" />
          <CheckBox {...register('cashback')} title="5% for diamonds" value="diamonds" />
          <CheckBox {...register('cashback')} title="10% for backpacks" value="backpacks" />
        </BoxGroup>
        <File
          css={gridFullLength}
          {...register('file', {
            validate: {
              isImage,
            },
          })}
          helperText={errors?.file?.message as string}
          title="Avatar's file"
        />
        <Button type="submit" disabled={!isValid}>
          Send
        </Button>
      </FormContainer>
      {formStore.length > 0 && (
        <>
          <h2>Form&apos;s data</h2>
          <FormCard cards={formStore} />
        </>
      )}
    </>
  );
};

export default RegForm;
