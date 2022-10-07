import React, { Component } from 'react';
import styles from './Card.module.scss';

type TProps = {
  title: string;
  price: number;
  category: string;
  image: string;
};

class Card extends Component<TProps> {
  constructor(props: TProps) {
    super(props);
  }

  render() {
    return (
      <div data-testid="card" className={styles.card}>
        <div>
          <img src={this.props.image} alt={this.props.title} className={styles.image} />
          <span className={styles.title}>{this.props.title}</span>
          <span className={styles.category}>{this.props.category}</span>
        </div>
        <span className={styles.price}>$ {this.props.price}</span>
      </div>
    );
  }
}

export default Card;
