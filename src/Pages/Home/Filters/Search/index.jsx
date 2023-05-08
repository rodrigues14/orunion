import magnifier from '../../../../assets/icons/magnifier.svg'; 
import { SearchStyled } from './Search.style';

export default function Search({ placeholder }) {
  return (
    <SearchStyled>
        <button>
            <img src={magnifier} alt="Pesquisar" />
        </button>
        <input
            type="text"
            name="search"
            id="search"
            placeholder={placeholder}
        />
    </SearchStyled>
  )
}
