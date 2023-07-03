import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 3rem;
    height: 15rem;
    align-items: center;
`

const ImageContainer = styled.div`
    width: 50%;
    height: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
`

const InfoContainer = styled.div`
    width: 50%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Para = styled.p`
    font-size: 1.6rem;
    line-height: 1.5;
`

export const Item = ({img, title, desc, quantity}) =>{
    return(
        <Container style={{opacity: `${title === 'Pizza Salamino' ? '0.4' : '1'}`}}>
            <ImageContainer>
                <Image src={img} alt={title} />
            </ImageContainer>
            <InfoContainer>
                <Para style={{fontSize: '2.2rem', fontWeight: 'bold'}}>{title}</Para>
                <Para style={{fontStyle: 'italic'}}>{desc}</Para>
                <Para style={{fontWeight: 'bold'}}>{quantity}</Para>
            </InfoContainer>
        </Container>
    )
}