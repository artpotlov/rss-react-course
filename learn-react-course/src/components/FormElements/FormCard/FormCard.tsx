import React from 'react';
import { TFormStore } from '../../../types/types';
import { FormCardItem, FormCardItems, FormCardWrapper } from './FormCard.styled';

type TProps = {
  cards?: TFormStore[];
  dataTestId?: string;
};

export const FormCard = ({ cards, dataTestId = 'form-card' }: TProps) => {
  return (
    <FormCardWrapper data-testid={dataTestId}>
      {cards?.map((card, index) => {
        return (
          <FormCardItems key={index}>
            {Boolean(card.userName) && (
              <FormCardItem>
                <b>user name:</b> {card.userName}
              </FormCardItem>
            )}
            {Boolean(card.email) && (
              <FormCardItem>
                <b>email:</b> {card.email}
              </FormCardItem>
            )}
            {Boolean(card.phoneNumber) && (
              <FormCardItem>
                <b>phone:</b> {card.phoneNumber}
              </FormCardItem>
            )}
            {Boolean(card.birthday) && (
              <FormCardItem>
                <b>birthday:</b> {card.birthday}
              </FormCardItem>
            )}
            {Boolean(card.city) && (
              <FormCardItem>
                <b>city:</b> {card.city}
              </FormCardItem>
            )}
            {Boolean(card.gender) && (
              <FormCardItem>
                <b>gender:</b> {card.gender}
              </FormCardItem>
            )}
            {Boolean(card.cashback?.length) && (
              <FormCardItem>
                <b>cashback:</b>{' '}
                {card.cashback?.map((cash, i, arr) => `${cash}${i !== arr.length - 1 ? ', ' : ''}`)}
              </FormCardItem>
            )}
            {Boolean(card.file?.length) && (
              <FormCardItem>
                <b>file:</b> {card.file && card.file[0].name}
              </FormCardItem>
            )}
          </FormCardItems>
        );
      })}
    </FormCardWrapper>
  );
};
