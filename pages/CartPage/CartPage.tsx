import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../../redux/slices/cartSlice';
import Styles from './CartPage.module.scss';
import Link from 'next/link';


const CartPage = () => {

  const cart = useSelector((state:any) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator: number, item: { quantity: number; field_price: number; }) => accumulator + item.quantity * item.field_price,
      0
    );
  };

  return (
    <div className={Styles.container}>
      {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
          <div className={Styles.header}>
            <div>Image</div>
            <div>Product Name</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.map((item:any) => (
            <div className={Styles.body} key={item.field_id}>
              <div className={Styles.image}>
                <Image src={item.field_product_image.items[0].field_image} height="90" width="65" alt="img"/>
              </div>
              <p>{item.title}</p>
              <p>$ {item.field_price}</p>
              <p>{item.quantity}</p>
              <div className={Styles.buttons}>
                <button onClick={() => dispatch(incrementQuantity(item.field_id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.field_id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.field_id))}>
                  x
                </button>
              </div>
              <p>$ {item.quantity * item.field_price}</p>
            </div>
          ))}
          <div className={Styles.footer_div}>
            <h2 className={Styles.total_price}>Grand Total: $ {getTotalPrice()}</h2>
            <div className={Styles.cart_buttons_container}>
              <Link href={"/"} className={Styles.Shop_btn}>Proceed to Payment</Link>
              <Link href={"../product-catalogue"} className={Styles.Shop_btn}>Continue Shopping</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;