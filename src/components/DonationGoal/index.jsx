import React from 'react'
import { DonationGoalStyled } from './DonationGoal.style'

export default function DonationGoal({ amountCollected, amountRequired }) {
    
    /* Aqui e descoberto a porcentagem que já foi arrecadada */
    let widthAmountCollected = (Number(amountCollected) * 100) / Number(amountRequired);
    /* Aqui tem uma verificação, que se o valor for maior que 100%, atribuir o valor 100 */
    if (widthAmountCollected > 100) { widthAmountCollected = 100; } 

    return (
        <DonationGoalStyled>
          <p title={'R$' + amountRequired}>R${amountRequired}</p>
          <div
            style={{ width: widthAmountCollected >= 12 ? widthAmountCollected + '%' : '12%' }}
          >
            <p title={'R$' + amountCollected}>R${amountCollected}</p>
          </div>
        </DonationGoalStyled>
    )
}
