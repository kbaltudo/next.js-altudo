import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/slices/cartSlice";
import Styles from "./CartPage.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

const CartPage = () => {
  const cart = useSelector((state: any) => state.cart);
  //console.log(cart,"cart");
  const [cartItems, setCartItems] = useState(cart);
  //console.log(cartItems, "ci")
  const dispatch = useDispatch();
  useEffect(() => {
    const cartItem = window.localStorage.getItem("cartValue");
    if (cartItem !== null) setCartItems(JSON.parse(cartItem));
    console.log(cartItem, "sci");
  }, []);
  useEffect(() => {
    window.localStorage.setItem("cartValue", JSON.stringify(cartItems));
  }, [cartItems]);
  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator: number, item: { quantity: number; field_price: number }) =>
        accumulator + item.quantity * item.field_price,
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
            <div>Quantity</div>
            <div>Price</div>
          </div>
          {cart.map((item: any) => (
            <div className={Styles.body} key={item.field_id}>
              <div className={Styles.image}>
                <Image
                  src={item.field_product_image.items[0].field_image}
                  height="90"
                  width="65"
                  alt="img"
                />
              </div>
              <p>{item.title}</p>
              <div className={Styles.buttons}>
                <button
                  onClick={() => dispatch(incrementQuantity(item.field_id))}
                >
                  +
                </button>
                <p className={Styles.prod__quantity}>{item.quantity}</p>
                <button
                  onClick={() => dispatch(decrementQuantity(item.field_id))}
                >
                  -
                </button>
                
                  <button className={Styles.cta_remove}
                    onClick={() => dispatch(removeFromCart(item.field_id))}
                  >
                    Remove
                  </button>
                
              </div>

              <p>$ {item.quantity * item.field_price}</p>
            </div>
          ))}
          <div className={Styles.footer_div}>
            <p className={Styles.total_price}>
              Grand Total: $ {getTotalPrice()}
            </p>
          </div>
          <div className={Styles.cart_buttons_container}>
            <Link href={"/"} className={Styles.Shop_btn}>
              Proceed to Payment
            </Link>
            <Link href={"../product-catalogue"} className={Styles.Shop_btn}>
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
