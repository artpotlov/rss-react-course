/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { TextField } from '../FormElements/TextField';
import { css } from '@emotion/react';
import { CheckBox } from '../FormElements/Checkbox';
import { Button } from '../Button';
import { CITIES } from '../../shared/constants';
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
import { RegFormContainer } from './RegForm.styled';
import { Date } from '../FormElements/Date';
import { Select } from '../FormElements/Select';
import { BoxGroup } from '../FormElements/BoxGroup';
import { Radio } from '../FormElements/Radio';
import { File } from '../FormElements/File';
import { FormCard } from '../FormElements/FormCard';

type TProps = {
  dataTestId?: string;
};

export const RegForm = ({ dataTestId = 'reg-form' }: TProps) => {
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
      <RegFormContainer noValidate data-testid={dataTestId} onSubmit={handleSubmit(onSubmit)}>
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
      </RegFormContainer>
      {formStore.length > 0 && (
        <>
          <h2>Form&apos;s data</h2>
          <FormCard cards={formStore} />
        </>
      )}
    </>
  );
};
