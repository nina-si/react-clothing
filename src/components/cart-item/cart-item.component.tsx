import { FC } from 'react';
import { CartItem } from '../../store/cart/cart.types';
import './cart-item.styles.scss';

type CartItemProps = {
  cartItem: CartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
