import React from 'react'
import Styles from './CardBlock.module.scss'
import TitleDescription from '../../Molecule/TitleDescription/TitleDescription'
import { GetCardBlockData } from './GetCardBlockData'
import Card from '../Cards/Card/Card'
import ContentCardHorizontal from '../Cards/Card/ContentCardHorizontal/ContentCardHorizontal'
import Section from '../../PageStructure/Container/Section'
import ContentCard from '../Cards/Card/ContentCard/ContentCard'



const CardBlock = ({ content, provider }: any) => {
  const cardBlockData = GetCardBlockData(content, provider);
  const cardSetting = {
    variant: cardBlockData?.variant ? cardBlockData.variant : 1,
    roundedImage: cardBlockData?.roundedImage ? cardBlockData.roundedImage : false,
    cardGrid: (1==cardBlockData?.grid)? "col-12" : (2==cardBlockData?.grid)? "col-md-6" : (3==cardBlockData?.grid)? "col-md-4" : (4==cardBlockData?.grid)? "col-md-3" : (6==cardBlockData?.grid)? "col-md-2" : "col-auto"
  }

  return (
    <>
      <Section replaceclass className={Styles.cardblock} style={{ backgroundImage: `url(${cardBlockData?.backgroundImage ? cardBlockData.backgroundImage : ""})` }}>
        {cardBlockData?.title ?
          <Section replaceclass className={Styles.heading + " pt-4"}>
            <div className="container">
              <TitleDescription type={'h3'} title={cardBlockData?.title} description={cardBlockData?.description} />
            </div>
          </Section> : ""
        }
        {cardBlockData?.cards ?
          <Section replaceclass className={Styles.cardgroup + " img-responsive"} data-round-image={cardSetting.roundedImage}>
            {1 === cardSetting.variant ?
              <div className="container" >
                {cardBlockData?.cards ? cardBlockData.cards.map((cardList: any, index: any) => (
                  <ContentCardHorizontal key={index} content={cardList} provider={provider} />
                )) : ""}
              </div> :
              <>
                {2 === cardSetting.variant ?
                  <div className={"row " + Styles.content_card +" bg-grey-primary"}>
                    {cardBlockData?.cards ? cardBlockData.cards.map((cardList: any, index: any) => (
                      <div key={index} className={cardSetting.cardGrid + " p-0"}>
                        <ContentCard content={cardList} provider={provider} />
                      </div>
                    )) : ""}
                  </div> :
                  <>
                    <div className="container" >
                      <div className="row">
                        {cardBlockData?.cards ? cardBlockData.cards.map((cardList: any, index: any) => (
                          <div key={index} className={cardSetting.cardGrid}>
                            <Card content={cardList} provider={provider} variant={cardSetting.variant} />
                          </div>

                        )) : ""}
                      </div>
                    </div>
                  </>

                }
              </>
            }
          </Section> : ""
        }
      </Section>

    </>
  )
}

export default CardBlock;
CardBlock.defaultProps = {
  variant: 1,
  provider: ""
};