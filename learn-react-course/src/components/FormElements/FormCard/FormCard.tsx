import React from 'react';
import { TFormStore } from '../../../types/types';
import BaseCard from './BaseCard.styled';
import Item from './Item.styled';
import Wrapper from './Wrapper.styled';

type TProps = {
  cards?: TFormStore[];
} & React.ComponentPropsWithoutRef<'div'>;

const FormCard = ({ cards, className, ...props }: TProps) => {
  return (
    <Wrapper className={className} {...props}>
      {cards?.map((card, index) => {
        return (
          <BaseCard key={index}>
            {Boolean(card.userName) && (
              <Item>
                <b>user name:</b> {card.userName}
              </Item>
            )}
            {Boolean(card.email) && (
              <Item>
                <b>email:</b> {card.email}
              </Item>
            )}
            {Boolean(card.phoneNumber) && (
              <Item>
                <b>phone:</b> {card.phoneNumber}
              </Item>
            )}
            {Boolean(card.birthday) && (
              <Item>
                <b>birthday:</b> {card.birthday}
              </Item>
            )}
            {Boolean(card.city) && (
              <Item>
                <b>city:</b> {card.city}
              </Item>
            )}
            {Boolean(card.gender) && (
              <Item>
                <b>gender:</b> {card.gender}
              </Item>
            )}
            {Boolean(card.cashback?.length) && (
              <Item>
                <b>cashback:</b>{' '}
                {card.cashback?.map((cash, i, arr) => `${cash}${i !== arr.length - 1 ? ', ' : ''}`)}
              </Item>
            )}
            {Boolean(card.file) && (
              <Item>
                <b>file:</b> {card.file}
              </Item>
            )}
          </BaseCard>
        );
      })}
    </Wrapper>
  );
};

export default FormCard;
