import React from "react";
import Section from "../../PageStructure/Container/Section";
import { GetProductsData } from "./GetProductData";
import CartItems from "../Cards/Card/CartItems/CartItems";

const Products = ({ content, provider }: any) => { 
  const returnData = GetProductsData(content, provider);
  return (
    <Section className="component">
      {returnData.products ?
        <ul className="d-flex flex-wrap ps-0">
          {returnData.products ? returnData.products.map((product: any) => (
            <div className="col-md-6 col-12 pb-2 pb-md-5 pe-md-3" key={product.field_id}>
              <CartItems content={product} provider={provider} />
            </div>
          )) : ""}         
      </ul> : ""}
    </Section>
  );
};

export default Products;
