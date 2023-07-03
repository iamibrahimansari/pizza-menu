import styled from 'styled-components';

import {data} from '../data/data';

const {time, order} = data;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
`

const Span = styled.span`
    font-size: 1.4rem;
    letter-spacing: 2px;
`

const Button = styled.button`
    background-color: #edc84b;
    border: none;
    padding: 1.3rem 3rem;
    cursor: pointer;
    color: #444;
    font-size: 1.4rem;
    font-weight: bold;
`

export const Footer = () => {
    return(
        <Container>
            <Span>{time}</Span>
            <Button type="button">{order}</Button>
        </Container>
    )
}