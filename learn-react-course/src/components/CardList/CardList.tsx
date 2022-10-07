import React, { Component } from 'react';
import { TGood } from '../../types/types';
import styles from './CardList.module.scss';
import { Card } from '../Card';

type TProps = {
  goods: TGood[];
};

class CardList extends Component<TProps> {
  constructor(props: TProps) {
    super(props);
  }

  render() {
    const data = this.props.goods;
    return (
      <div data-testid="card-list" className={styles.cards}>
        {data.map(({ id, title, price, category, image }) => (
          <Card key={id} title={title} price={price} category={category} image={image} />
        ))}
      </div>
    );
  }
}

export default CardList;
