import styled from "styled-components"

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
 height: 30px;
 background-color: #859b4a; 
 color:white; 
 font-size: 14px;
 text-align:center;
 font-weight:500; `

const Announcement = () => {
  return (
    <Container>
        Super deal! Free shipping on orders over $100
    </Container>
  )
}

export default Announcement