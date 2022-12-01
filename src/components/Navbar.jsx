import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 60px ;
  background-color: black;
`; 

const Wrapper = styled.div`
  width: 80%;
  padding: 10px 20px ;
  color: white;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
display: flex;
align-items: center;
flex:1;
`;

const Language = styled.span`
font-size: 14px;
cursor:pointer;
`;

const SearchContainer = styled.div`
cursor: pointer;
background-color: black;
border: 1px solid white;
border-radius: 16px;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;

const Input = styled.input`
font-weight: lighter;
padding: 5px;
color: white;
background-color: black;
border:none;
 &:active{
  border:none;
 }
 &:focus{
  border:none;
  outline:none;
 }
`;

const Center = styled.div`
  flex:1;
`;

const Logo = styled.h1`
  font-weight:bold;
  text-align: center;
`

const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;


`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`



const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
            <SearchIcon style={{fontSize:20,}} />
            </SearchContainer>
        </Left>
        <Center>
          <Logo>IRIDA.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon style={{fontSize:22,} } />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar