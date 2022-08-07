import React from 'react';
import Button from '../button/Button';
import classes from './ProductCard.module.scss';
const ProductCard = () => {
  return (
    <div className={classes.card}>
      <div className={classes['card__img']}></div>
      <div className={classes['card__product']}>
        <span className={classes['card__product-tag']}>Preview</span>
        <h1 className={classes['card__product-title']}>
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className={classes['card__product-details']}>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className={classes['card__product-price']}>
          <span className={classes['card__product-price-discount']}>
            $149.99
          </span>
          <span className={classes['card__product-price-original']}>
            $169.99
          </span>
        </div>
        <Button></Button>
      </div>
    </div>
  );
};

export default ProductCard;
