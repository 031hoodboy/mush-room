import React from 'react';
import styled from 'styled-components'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    return(
        <PageBlock>
            <Header/>
            <ShopNav>
                <NavContent>all</NavContent>
                <NavContent>new</NavContent>
                <NavContent>top</NavContent>
                <NavContent>bottom</NavContent>
                <NavContent>outerwear</NavContent>
                <NavContent>accessories</NavContent>
            </ShopNav>
            <ProductWrapper>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </ProductWrapper>
            <Footer/>
        </PageBlock>
    )    
}


const PageBlock = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
`

const ShopNav = styled.div`
    margin: 20rem auto 20rem auto;
    display: flex;
    justify-content: center;
`;

const NavContent = styled.div`
    padding: 5rem 10rem;


    cursor: pointer;  
    &:hover{
        color: #3D3D3D;
    }
`;

const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Product = styled.div`
    background: #999;
    width: 20vw;
    max-width: 300px;
    height: 20vw;
    max-height: 300px;
    margin-bottom: 3%;
    @media screen and (max-width: 840px) {

  }
`;

export default Home;