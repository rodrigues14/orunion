import React from 'react'
import logo from '../../assets/logo.svg';
import wallet from '../../assets/wallet.svg';
import { HeaderStyled, List, NavStyled, ButtonWallet } from './Header.style';

export default function Header() {
    const routes = [
        {
            label: 'Nossa Carteira',
            to: ''
        },
        {
            label: 'Perguntas Frequentes',
            to: ''
        },
        {
            label: 'Favoritos',
            to: ''
        },
        {
            label: 'Minha Conta',
            to: ''
        },
    ]

  return (
    <HeaderStyled>
        <img src={logo} alt="Logo da Orunion" />
        <NavStyled>
            <List>
                {routes.map((route, index) => (
                    <li key={index}>
                        <a href={route.to}>
                            {route.label}
                        </a>
                    </li>
                ))}
            </List>
            <ButtonWallet>
                <img src={wallet} alt="Ícone de uma carteira" />
                CONECTAR CARTEIRA
            </ButtonWallet>
        </NavStyled>
    </HeaderStyled>
  )
}
