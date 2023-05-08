import React from 'react'
import { CheckboxStyled } from './Checkbox.style'
import itemsCheckbox from './itemsCheckbox.json';

export default function Checkbox() {
  return (
    <CheckboxStyled>
      <h3>SELECIONE O TIPO DE CAUSA</h3>
      {itemsCheckbox.map(item => (
        <div key={item.id}>
          <label htmlFor={item.htmlFor}>{item.label}</label>
          <input type="checkbox" name={item.htmlFor} id={item.htmlFor} />
        </div>
      ))}
    </CheckboxStyled>
  )
}
