import React, {useState} from 'react';
import styled, {css, keyframes} from 'styled-components';
import Cancle from '../assets/user2.png';import { Link } from "react-router-dom";
import LogoImg from '../assets/mushroom.png';
import Profileimg from '../assets/user.png';
import CartImg from '../assets/shopping-cart.png';


const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    display: none;
    justify-content: space-between;
    ${props => props.open && css`
        display:flex;
    `}
    position: fixed;
    z-index: 2;
    top: 0;
`;
 
const Fadein = keyframes`
  0% {
    left: -200px;
  }
  100% {
    left: 0px;
  }
`;
const Fadeout = keyframes`
  0% {
    left: 0px;
  }
  100% {
    left: -200px;
  }
`;

const Appear = keyframes`
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
`;

const ModalWrapper = styled.div`
    width: 200px;
    height: 100vh;
    background-color: #fff;
    z-index: 3;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    animation: ${Fadein} 500ms ;
    ${props => props.open && css`
        display:flex;
        animation: ${Fadeout} 2s;
    `}
`;



const ModalOpacity = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #000;
    position: absolute;
    top: 0;
    opacity: 0.1;
    z-index: 2;
`;

const CancleButton = styled.div`
    width: 30px;
    height: 30px;
    background-image: url(${Cancle});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    left: 20px;
    top: 20px;
    &:hover{
        opacity: 0.4;
    }
`;

const Menu2 = styled.div`
    position: absolute;
    top: 70px;
    justify-content: center;
    cursor: pointer;
`;

const MenuContent = styled.div`
    margin-top: 20px;
    font-size: 15px;
    &:hover{
        color: #666;
    }
    width: 150px;
`;


const Header = () => {


    const [open, setOpen] = useState(false);
    const onToggle = () => {
        setOpen(!open)
    }

    return(
        <HeaderBlock>
            <Link to="/" >
                <Logo/>
            </Link>
            <NavWrapper>
                <NavBar>
                    <Link to="/shop" style={{ textDecoration: "none", color: "#000" }}>
                        <Shop>Shop</Shop>
                    </Link>
                    <LookBook>
                        Lookbook
                    </LookBook>
                    <StockList>
                        Stocklist
                    </StockList>
                    <Trip>
                    <a href="http://iacopoapps.appspot.com/hopalongwebgl/" style={{ textDecoration: "none", color: "#000" }}>

                        Trip
                        </a>
                    </Trip>
                </NavBar>
                <Link to="/login" style={{ textDecoration: "none", color: "#000" }}>
                    <Profile/>
                </Link>
                <Cart onClick={onToggle} />
            </NavWrapper>
            <Wrapper open={open}>
                <ModalWrapper>
                    <CancleButton onClick={onToggle}/>
                    <Menu2>
                    <Link to="/" style={{textDecoration: 'none', color: "#000"}}>
                        <MenuContent>HOME</MenuContent>    
                    </Link>
                    <Link to='/shop' style={{textDecoration: 'none', color: "#000"}}>
                        <MenuContent>SHOP</MenuContent>
                    </Link>
                    <Link to="/about" style={{textDecoration: 'none', color: "#000"}}>
                        <MenuContent>ABOUT</MenuContent>    
                    </Link>
{/*                     
                    <Link to="/notice" style={{textDecoration: 'none', color: "#000"}}>
                        <MenuContent>NOTICE</MenuContent>        
                    </Link>
                     */}
                    <Link to="contact" style={{textDecoration: 'none', color: "#000"}}>
                        <MenuContent>CONTACT</MenuContent>
                    </Link>
                    </Menu2>
                </ModalWrapper>
                <ModalOpacity onClick={onToggle}/>
            </Wrapper>
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