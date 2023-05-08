import React from 'react'
import { CheckboxStyled } from './Checkbox.style'
import itemsCheckbox from './itemsCheckbox.json';

export default function Checkbox() {
  return (
    <CheckboxStyled>
        {itemsCheckbox.map(item => (
            <div key={item.id}>
                <label htmlFor={item.htmlFor}>{item.label}</label>
                <input type="checkbox" name={item.htmlFor} id={item.htmlFor} />
            </div>
        ))}
    </CheckboxStyled>
  )
}
