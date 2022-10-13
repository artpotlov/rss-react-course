/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from 'react';
import TextField from '../FormElements/TextField/TextField';
import { css } from '@emotion/react';
import { BoxGroup, Date, File, FormCard, Radio, Select } from '../FormElements';
import CheckBox from '../FormElements/Checkbox/Checkbox';
import { Button } from '../Button';
import { TFormErrorFields, TFormStore } from '../../types/types';
import { CITIES } from '../../constants';
import { isValidForm } from '../../controllers/Form/form-validation';
import { getDataFromForm } from '../../controllers/Form/get-data';

const RegForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setErrorState] = useState<TFormErrorFields>({
    userName: {},
    email: {},
    phoneNumber: {},
    birthday: {},
    city: {},
    gender: {},
    cashback: {},
    file: {},
  });

  const [formStore, setFormStore] = useState<TFormStore[]>([]);
  const [isDisabledSubmit, setDisableSubmit] = useState(true);

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    if (!isValidForm(formRef.current, setErrorState)) {
      setDisableSubmit(true);
      return;
    }
    getDataFromForm(formRef.current, setFormStore);
    formRef.current.reset();
    setDisableSubmit(true);
  };

  return (
    <>
      <form
        noValidate
        data-testid="reg-form"
        ref={formRef}
        onSubmit={onSubmitForm}
        onChange={() => {
          setDisableSubmit(false);
        }}
        css={css`
          max-width: 1110px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-auto-rows: auto;
          gap: 16px;
        `}
      >
        <TextField
          css={css`
            grid-column-end: span 2;
          `}
          type="text"
          name="user-name"
          placeholder="First and last name"
          title="User"
          error={error.userName.error}
          helperText={error.userName.helperText}
          autoFocus
          required
        />
        <TextField
          type="email"
          error={error.email.error}
          helperText={error.email.helperText}
          name="email"
          placeholder="name@mail.com"
          title="E-mail"
          required
        />
        <TextField
          type="tel"
          error={error.phoneNumber.error}
          helperText={error.phoneNumber.helperText}
          placeholder="9991234567"
          title="Phone number"
          name="phone-number"
          required
        />
        <Date
          error={error.birthday.error}
          helperText={error.birthday.helperText}
          title="Birthday"
          name="birthday"
          required
        />
        <Select
          error={error.city.error}
          helperText={error.city.helperText}
          title="City"
          name="city"
          options={CITIES}
          required
        />
        <BoxGroup helperText={error.gender.helperText} title="Gender" required>
          <Radio error={error.gender.error} value="male" title="Male" name="gender" />
          <Radio error={error.gender.error} value="female" title="Female" name="gender" />
        </BoxGroup>
        <BoxGroup helperText={error.cashback.helperText} title="Cashback category">
          <CheckBox
            error={error.cashback.error}
            name="cashback"
            title="1% for everything"
            value="all"
          />
          <CheckBox
            error={error.cashback.error}
            name="cashback"
            title="5% for diamonds"
            value="diamonds"
          />
          <CheckBox
            error={error.cashback.error}
            name="cashback"
            title="10% for backpacks"
            value="backpacks"
          />
        </BoxGroup>
        <File
          error={error.file.error}
          helperText={error.file.helperText}
          title="Avatar's file"
          name="file"
          css={css`
            grid-column: span 2;
          `}
        />
        <Button type="submit" disabled={isDisabledSubmit}>
          Send
        </Button>
      </form>
      {formStore.length > 0 && (
        <>
          <h2
            css={css`
              margin-top: 32px;
            `}
          >
            Form&apos;s data
          </h2>
          <FormCard cards={formStore} />
        </>
      )}
    </>
  );
};

export default RegForm;
