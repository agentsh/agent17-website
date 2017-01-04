import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';

const Div = styled.div`
    background: url('${props => props.imageUrl}') center right no-repeat;
    background-size: cover;
    height: 500px;
    @media (max-width: 900px) {
    }
`;

export default ({imageUrl}) => {
    return (
        <Div imageUrl={imageUrl} />
    );

}
