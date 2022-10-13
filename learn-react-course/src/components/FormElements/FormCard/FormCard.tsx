import React from 'react';
import styled from '@emotion/styled';
import { TFormStore } from '../../../types/types';

type TProps = {
  cards: TFormStore[];
} & React.ComponentPropsWithoutRef<'div'>;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const BaseCard = styled.ul`
  margin: 0;
  width: 300px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid #cfd3d5;
  border-radius: 16px;
`;

const Item = styled.li`
  font-size: 14px;
`;

const FormCard = ({ cards, className }: TProps) => {
  return (
    <Wrapper className={className}>
      {cards.map((card, index) => {
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
