import styled from "styled-components";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const Info = styled.div` 
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: end;
    justify-content: center;
    z-index: 2;
    transition: all 0.3s ease-in;
`;

const Container = styled.div`
    margin: 5px;
    min-width: 300px; 
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #99b5c96f;
    position: relative;
    &:hover ${Info}{
        opacity:1;
    }
    `;

const Image = styled.img`
    height: 75%;
    z-index: 2; `;



const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    opacity: 70%;
    transition: all 0.5s ease;
    cursor:pointer;

    &:hover{
        opacity: 100%;
        transform: scale(1.1);
    }
`;



const Product = ({item}) => {
  return (
    <Container>
        
        <Image src={item.img}/>
        <Info>
            <Icon>
            <ShoppingCartIcon />
            </Icon>
            <Icon>
            <SearchIcon />
            </Icon>
            <Icon>
            <FavoriteBorderIcon />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product