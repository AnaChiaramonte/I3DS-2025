import React from 'react'
import PromotionCard from './PromoCard'

const Promotion = () => {
  return (
    <div id='promotion'><h2>Promoções</h2>
    <div id='itensPromo'className='d-flex flex-wrap'></div>
    {/* inserir os cards de promoção  */}
    <PromotionCard />
    <PromotionCard />
    <PromotionCard />
    <PromotionCard />
    </div>
  )
}

export default Promotion