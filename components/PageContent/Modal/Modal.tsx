import Title from '../../Elements/Title';
import Image from "next/image";
import { GetModals } from './GetModalData';
import Styles from "./Modal.module.scss";


const Modal = ({ content, provider, id, modalSize}:any) => {
  const returnData = GetModals(content, provider);
  return (
    <section className={Styles.modal}>
        <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false">
            <div className={modalSize + " modal-dialog"}>
              <div className="modal-content">
                <div className="modal-header">
                  <Title type="h5">{returnData.title}</Title>
                  <button type="button" className="btn-close btn btn-primary" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>                
                <div className="modal-body">
                  {returnData?.image?.url ?
                  <figure>
                    <Image src={returnData.image.url} alt={returnData.image.alt} width={returnData.image.width} height={returnData.image.height} className="mb-3" />
                  </figure> : ""}
                 {returnData?.description ?
                  <div className="body-copy" dangerouslySetInnerHTML={{__html:returnData.description}} /> :""}
                </div> 
                </div>
            </div>
        </div>
    </section>
  );
}

export default Modal;

Modal.defaultProps = {
  provider: "",
  content:"",
  modalSize:"modal-lg",
};