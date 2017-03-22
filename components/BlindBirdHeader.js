import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';

const ImageContent = styled.div`
    position:relative;
    margin-top: 100px;
    clear:both;
    overflow:hidden;
    height: 500px;
    background: url('./static/img/agent17.jpg') no-repeat center bottom;
    background-size: cover;

    @media (max-width: 900px) {
        margin-top:50px;
    }
`;

const P = styled.p`
    padding-top: 30px;
`;

const TextContext = styled.div`
    position:absolute;
    top:0;
    left:0;
    padding-top:90px;
    padding-left:20px;
    z-index:50;
    color:white;
    text-transform: uppercase;
    @media (min-width: 1600px) {
        padding-top:180px;
        padding-left: 180px;
    }
    @media (min-width: 1200px) and (max-width: 1599px) {
        padding-top:130px;
        padding-left: 130px;
    }
    @media (min-width: 1024px) and (max-width: 1199px) {
        padding-top:70px;
        padding-left: 70px;
    }
`;

const Headline = styled.div`
    font-size: 60px;
    line-height: 65px;
    color: white;
    font-weight: bold;
    &.grey {
        color: #999;
    }
    @media (max-width: 900px) {
       font-size: 50px;
    }
`;

const Headline2 = styled.div`
    font-size: 18px;
    color: white;
    font-weight: bold;
    padding-top: 20px;
`;

const Correction = styled.span`
    &.line-through {
        text-decoration: line-through;
    }
`;

const content = (
    <TextContext>
        <Headline2>AgentConf 2018</Headline2>
        <Headline className='grey'>Get tickets now!</Headline>

        <P>
            <Correction className='line-through'>We don't know when, but</Correction> <b>25th & 26th January</b>. It will be good. Agent Conf. 2018<br />
        </P>
    </TextContext>
);

export default () => {
    return (
        <ImageContent>
            {content}
        </ImageContent>
    );
}
