import styled from 'styled-components';

import {Item} from './Item';

import {data} from '../data/data';

const {items} = data;

const Container = styled.div`
    margin: 4rem auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
`



export const Menu = () => {
    return(
        <Container>
            {
                items.map(item => <Item key={item.title} {...item} />)
            }
        </Container>
    )
}