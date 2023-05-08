import React from 'react'
import DonationGoal from '../DonationGoal'
import { NftCardStyled } from './NftCard.style'

export default function NftCard({ title, description, amountCollected, amountRequired, srcNft, altNft }) {
  return (
    <NftCardStyled>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className='progress'>
                <DonationGoal 
                    amountCollected={amountCollected}
                    amountRequired={amountRequired}
                    backgroundStyle='linear-gradient(269.87deg, rgba(255, 0, 0, 0.63) 0.11%, #1F81E1 14.85%, #470E9C 102.6%)'
                />
            </div>
        </div>
        <img src={srcNft} alt={altNft} />
    </NftCardStyled>
  )
}
