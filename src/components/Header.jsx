import styled from 'styled-components';

import {data} from '../data/data';

const {title, subTitle, tagLine} = data;

const Container = styled.div``

const H1 = styled.h1`
    color: #edc84b;
    font-size: 5rem;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;
`

const Span = styled.span`
    letter-spacing: 7px;
`

const H2 = styled.h2`
    margin: 6rem auto 5rem;
    font-size: 3rem;
    text-align: center;
`

const Desc = styled.p`
    margin: auto;
    text-align: center;
    font-size: 1.6rem;
    width: 70%;
    word-spacing: 0.5rem;
    line-height: 1.5;
`

export const Header = () => {
    const spanWidthHight = {
        width: '5rem',
        height: '0.5rem',
        backgroundColor: '#edc84b'
    }
    return(
        <Container>
            <H1>
                <Span style={spanWidthHight}>{}</Span>
                <Span>{title}</Span>
                <Span style={spanWidthHight}></Span>
            </H1>
            <H2>
                <Span style={{padding: '1rem 0', borderTop: '2px solid', borderBottom: '2px solid'}}>
                    {subTitle}
                </Span>
            </H2>
            <Desc>{tagLine}</Desc>
        </Container>
    )
}