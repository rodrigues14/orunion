import React from 'react'
import { DonationGoalStyled } from './DonationGoal.style'

export default function DonationGoal({ 
  amountCollected, 
  amountRequired, 
  margin = 0,
  backgroundStyle = 'linear-gradient(269.87deg, #1F81E1 0.11%, #470E9C 102.6%)'
}) {
    
    /* Aqui e descoberto a porcentagem que já foi arrecadada */
    let widthAmountCollected = (Number(amountCollected) * 100) / Number(amountRequired);
    /* Aqui tem uma verificação, que se o valor for maior que 100%, atribuir o valor 100 */
    if (widthAmountCollected > 100) { widthAmountCollected = 100; } 

    return (
        <DonationGoalStyled
          style={{ margin: margin }}
        >
          <p title={'R$' + amountRequired}>R${amountRequired}</p>
          <div
            style={{ width: widthAmountCollected >= 12 ? widthAmountCollected + '%' : '12%', 
                     background: backgroundStyle }}
          >
            <p title={'R$' + amountCollected}>R${amountCollected}</p>
          </div>
        </DonationGoalStyled>
    )
}
