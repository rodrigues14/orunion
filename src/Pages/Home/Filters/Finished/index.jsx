import { FinishedStyled } from "./Finished.style";

export default function Finished() {
  return (
    <FinishedStyled>
      <p>Finalizados</p>

      <div>
        <label htmlFor="nao">NÃO</label>
        <input type="radio" name="finalizados" id="nao" />
      </div>

      <div>
        <label htmlFor="sim">SIM</label>
        <input type="radio" name="finalizados" id="sim" />
      </div>
    </FinishedStyled>
  )
}
