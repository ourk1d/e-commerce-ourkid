import styled from "styled-components"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useState } from "react";
import { sliderItems } from "../data";

const Container = styled.div`
    background-color: lightgray;
    width: 100%;
    height: 80vh;
    display: flex;
    overflow: hidden;
`;

const Arrow = styled.div`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto ;
    cursor: pointer;
    opacity: 0.6;
    z-index: 2;
    &:hover{
        opacity: 1;
    }
`;

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    transition: all 1.2s ease;
    transform: translateX(${props=> props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`;

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 30px;
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    padding: 0px 20px;
    height: 80%;
`;


const InfoContainer = styled.div`
    flex: 1;
    padding: 50px 0px;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button= styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    border-radius:18px;
    cursor:pointer;
`;


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction)=> {
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }
        else {
            setSlideIndex(slideIndex < 2? slideIndex + 1 : 0)
        }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ChevronLeftIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=> (           
            <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
            </Slide>))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ChevronRightIcon/>
        </Arrow>
    </Container>
)}

export default Slider