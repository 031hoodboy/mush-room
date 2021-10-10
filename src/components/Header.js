import React from 'react';
import styled from 'styled-components'
import LogoImg from '../assets/psychedelic.png';
import Profileimg from '../assets/user.png';
import CartImg from '../assets/shopping-cart.png';

const Header = () => {
    return(
        <HeaderBlock>
            <Logo></Logo>
            <NavWrapper>
                <NavBar>
                    <Shop>
                        Shop
                    </Shop>
                    <LookBook>
                        Lookbook
                    </LookBook>
                    <StockList>
                        Stocklist
                    </StockList>
                    <Trip>
                        Trip
                    </Trip>
                </NavBar>
                <Profile/>
                <Cart/>
            </NavWrapper>
        </HeaderBlock>
    )    
}

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 8rem;
    z-index: 1;
`

const Logo = styled.div`
    width: 10rem;
  height: 10rem;
    border-radius: 5rem;
  background-image: url(${LogoImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.07);
  }
  `

const NavWrapper = styled.div`
    display: flex;
    align-items: center;
`

const NavBar = styled.div`
    display: flex;
`

const Shop = styled.div`
    padding: 0 5rem;
    &:hover{
        color: #3D3D3D;
        cursor: pointer;

    }
`

const LookBook = styled(Shop)`

`

const StockList = styled(Shop)`

`
const Trip = styled(Shop)`

`

const Profile = styled.div`
    width: 5rem;
    height: 5rem;
    margin: 0 5rem;
    background-image: url(${Profileimg});
background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.07);
  }
`

const Cart = styled(Profile)`
margin: 0;
    background-image: url(${CartImg});

`

export default Header;