import React from 'react'
import { DonationGoalStyled } from './DonationGoal.style'

export default function DonationGoal({ amountCollected, amountRequired }) {
    
    const widthAmountCollected = (Number(amountCollected) * 100) / Number(amountRequired);

    return (
        <DonationGoalStyled>
            <div 
                className='amountCollected'
                style={{ width: widthAmountCollected >= 10 ? widthAmountCollected + '%' : '20%' }}
            >
                <p>R$<span>{amountCollected}</span></p>
            </div>
            <div 
                className='amountRequired' 
                style={ 
                    Number(amountCollected) >= Number(amountRequired) ? { display: 'none' } : {  } 
                }
            >
                <p>R$<span>{amountRequired}</span></p>
            </div>
        </DonationGoalStyled>
    )
}
