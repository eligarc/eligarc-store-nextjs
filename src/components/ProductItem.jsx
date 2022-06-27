import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      <Image src={product.images[0]} alt={product.title} width={240} height={240} />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure
          className={styles['more-clickable-area']}
          onClick={() => handleClick(product)}
          onKeyPress={() => handleClick(product)}
          aria-hidden="true"
        >
          {state.cart.find((p) => p.id === product.id)
            ? <Image className={(styles.disabled, styles['add-to-cart-btn'])} src={addedToCartImage} width={50} height={50} alt='added to cart' />
            : <Image className={(styles['add-to-cart-btn'], styles.pointer)} src={addToCartImage} alt='add to cart' />}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
