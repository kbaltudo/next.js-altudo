//Product Catalogue Page: Item Listing
import Styles from "./CartItems.module.scss";
import Image from "next/image";
import Link from "next/link";
import { GetCartItemsData } from "./GetCartItemsData";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../../redux/slices/cartSlice";
import Description from "../../../../Elements/Description";

const CartItems = ({ content, provider }: any) => {
    const returnData = GetCartItemsData(content, provider);
    const dispatch = useDispatch();
    return (
        <li className={"component " + Styles.product + " list-unstyled bg-grey-primary shadow-reg mb-2 ol-lg-4 col-md-6 pb-3"}>
                <div className={Styles.product__photo}>
                    <div className={Styles.photo_container}>
                        <div className={Styles.photo_main}>
                            <div className={Styles.controls}>
                                <i className={Styles.material_icons}>share</i>
                                <i className={Styles.material_icons}>favorite</i>
                            </div>
                            <Link href={returnData.field_id}><Image src={returnData.field_product_image.items.field_image} width={400} height={400} alt="image" /></Link>     
                        </div>
                    </div>
                </div>
                <div className={Styles.product__info}>
                <div className={Styles.title}>
                    <h1>{returnData.title}</h1>
                    <span>{returnData.title}</span>
                </div>
                <div className={Styles.price}>
                    $<span>{returnData.field_price}</span>
                </div>
                <div className={Styles.variant}>
                    <h3>EXPLORE OTHER OPTIONS</h3>
                    <ul>
                        <li><Link href={returnData.self}><Image src={returnData.field_product_image.items.field_image} width={400} height={400} alt="Cart Product Image" /></Link></li>
                        <li><Link href={returnData.self}><Image src={returnData.field_product_image.items.field_image} width={400} height={400} alt="Cart Product Image" /></Link></li>
                    </ul>
                </div>
                <div className={Styles.description}>
                    <h3>SPECIFICATIONS</h3>
                    <Description className={Styles.prod_desc}>{returnData?.body}</Description>
                </div>
                <button
                    onClick={() => dispatch(addToCart(content))}
                    className={Styles.buy__btn}
                >
                    Add to Cart
                </button>
            </div>
        </li >
    )
}

export default CartItems;