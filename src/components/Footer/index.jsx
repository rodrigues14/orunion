import React from 'react'
import logo from '../../assets/logo.svg'
import iconInstagram from '../../assets/icons/instagram.svg';
import iconTwitter from '../../assets/icons/twitter.svg';
import iconyoutube from '../../assets/icons/youtube.svg';
import iconSend from '../../assets/icons/send.svg';
import { FooterStyled, LogoSection, OurLinks } from './Footer.style';

export default function Footer() {
  return (
    <FooterStyled>
        <div>
            <LogoSection>
                <img src={logo} alt="Logo da Orunion" />
                <p>Refreshing and pleasant lilies of the valley, intoxicating fragrance, awaken inner peace</p>
                <div>
                    <img src={iconInstagram} alt="Conheça o nosso Instagram" />
                    <img src={iconTwitter} alt="Conheça o nosso Twitter" />
                    <img src={iconyoutube} alt="Conheça o nosso canal no Youtube" />
                </div>
            </LogoSection>

            <OurLinks>
                <div>
                    <h4>Conta</h4>
                    <a href="">Minha conta</a>
                </div>
                <div>
                    <h4>Ajuda</h4>
                    <a href="">FAQ</a>
                    <a href="">Fale Conosco</a>
                </div>
                <div>
                    <h4>Legal</h4>
                    <a href="">Termos de serviço</a>
                    <a href="">Política e Privacidade</a>
                </div>
                <div>
                    <h4>Sobre</h4>
                    <a href="">Nossa carteira</a>
                    <a href="">Quem somos?</a>
                    <a href="">Blog</a>
                </div>
                <div className='seInscreva'>
                    <h4>Se inscreva</h4>
                    <div>
                        <input type="email" placeholder='Digite seu email' />
                        <button><img src={iconSend} alt="Cadastar e-mail" /></button>
                    </div>
                </div>
            </OurLinks>
        </div>
    </FooterStyled>
  )
}
