import { CardStyled } from "./Card.style";

export default function Card({ src, alt, titulo, texto}) {
    return (
        <CardStyled>
            <img src={src} alt={alt} />
            <div>
                <h2>{titulo}</h2>
                <p>{texto}</p>
            </div>
        </CardStyled>
    )
}