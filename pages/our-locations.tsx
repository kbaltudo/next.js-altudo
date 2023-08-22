import Head from "next/head";
import Layout from "../components/PageStructure/Container/Layout";
import LocationSidebar from "../components/Composits/Location/LocationSidebar";
import LocationMap from "../components/Composits/Location/LocationMap";
import { OurLocationsRouter } from "../lib/provider/mapper";
import ContainerFluid from "../components/PageStructure/Container/ContainerFluid";
import { useState, useEffect } from "react";

const OurLocation = ({ pageResponse, locationResponse , pageTemplate }:any) => {
  const [lattitude, setLattitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const updateMapData = ( lat:any, long:any ) => {
    setLattitude(lat);
    setLongitude(long);
  }
  useEffect(() => {
    const location = locationResponse ? locationResponse[0] : "";
    updateMapData(location.lattitude,location.longitude);
  }, [locationResponse])

  const data = {      
    title : (pageResponse?.Title) ? pageResponse.Title : "Locations Page"
  } 

  return (
    <Layout header={pageTemplate} provider={'drupal'} >
      <Head>
        <title>{data.title}</title>
      </Head>
      <ContainerFluid>
        <div className="row">
        <LocationSidebar locations={locationResponse} updateMapData={updateMapData} title={pageResponse.subTitle} />
        <LocationMap locations={locationResponse} lattitude={lattitude} longitude={longitude} />
        </div>
      </ContainerFluid>
    </Layout>
  );
};

export default OurLocation;

export async function getStaticProps() {
  const pageResponse = (await OurLocationsRouter()) ?? [];
  return {
    props: {
      pageTemplate: pageResponse.pagetemplate,
      pageResponse: pageResponse.data,
      locationResponse: pageResponse.locations,
      provider: pageResponse.provider
    }
  }
}