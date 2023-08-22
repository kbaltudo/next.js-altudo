import Styles from "./promo.module.scss";
import Container from "../../PageStructure/Container/Container";
const Promo = ({ promodata }:any) => {
  const data = {
    Description: promodata.Description ? promodata.Description : "",
  };
  return (
    <div className={Styles.promo}>
      {/* Promo Content */}
      {promodata.map((promo:any) => (
        <div key={promo.id} className="col-12">
          <Container>
          <div className="body-copy" dangerouslySetInnerHTML={{__html:data.Description}} />
          </Container>
        </div>
      ))}
    </div>
  );
};

export default Promo;
