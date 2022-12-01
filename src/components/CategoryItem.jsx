import styled from "styled-components"

const Container = styled.div`
    border: 1px solid black;
    flex: 1;
    margin: 5px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    letter-spacing: 3px;
    color: white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    font-size: 16px;
    border: none;
    padding: 10px;
    background-color: white;
    color: grey;
    font-weight: 600;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW! </Button>
        </Info>
    </Container>
  )
}

export default CategoryItem