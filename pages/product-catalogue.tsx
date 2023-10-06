import React, { useEffect, useState } from 'react'
import Layout from '../components/PageStructure/Container/Layout'
import { productsRouter } from '../lib/provider/mapper'
import Title from '../components/Elements/Title'
import Section from '../components/PageStructure/Container/Section'
import Loader from '../components/PageContent/Loader/Loader'
import Products from '../components/Composits/Products/Products'
import { useSelector } from 'react-redux'
import Link from 'next/dist/client/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const ProductsList = ({ pageResponse, provider, pageTemplate }: any) => {
  const [productsdata, setProductsdata] = useState(pageResponse.products)
  const [isLoading, setIsLoading] = useState(false);
  const cart = useSelector((state:any) => state.cart);
  
  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator: any, item: { quantity: any }) => accumulator + item.quantity, 0);
  };
  return (
      <Layout header={pageTemplate} provider={provider}>
      <>
        <Section className="products-list">
          <Title className={'text-center'} type={'h2'}>{pageResponse?.title ? pageResponse.title : "Product Catalogue"}</Title>
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <Link href={"/CartPage/CartPage"}>
                <div className="cart">
                  <span className="count">{getItemsCount()}</span>
                  <FontAwesomeIcon icon={faCartPlus} />
                </div>
              </Link> 
              {isLoading ? (
                <div className="loader_api position-relative ">
                  <Loader />
                </div>
              ) : (
                <>
                  {
                    productsdata
                      ? <Products content={productsdata} provider={provider} />
                      : <p className='lead'> Loading Products... Please wait.  </p>
                  }
                </>
              )}
            </div>
          </div>
        </Section>
      </>
    </Layout>
  )
}


export default ProductsList;

export async function getStaticProps() {
  const pageResponse = (await productsRouter()) ?? [];
  return {
    props: {
      pageTemplate: pageResponse.pagetemplate,
      pageResponse: pageResponse.data,
      provider: pageResponse.provider
    }
  }
}

