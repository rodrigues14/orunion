import { SelectStyled } from "./Select.style";

export default function Select() {
  return (
    <SelectStyled>
        <select name="filterOptions" title='Escolher filtragem' id='filterOptions'>
            <option value="maisVisualizados">Mais visualizados</option>
            <option value="novos">Novos</option>
            <option value="poucosDiasRestantes">Poucos dias restantes</option>
            <option value="quaseLá">Quase lá</option>
        </select>
    </SelectStyled>
  )
}
