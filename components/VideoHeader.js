import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';

const SliderElement = styled.div`
    background: url(${(props) => props.img});
    backgroundSize: cover;
    height: 100vh;
    position: relative;
    display: flex;
`;
const SliderContentBlock = styled.div`
    display:flex;
    align-self:center;
    flex:1;
    flex-direction: column;
`;


const H2 = styled.h2`
    font-size: 40px;
    font-weight: 300;
    text-align:center;
    padding-Top: 120px;
    margin-bottom:0;
    padding-left:20px;
    padding-right: 20px;
    @media (max-width: 480px) {
        font-size:30px;
    }
`;

const H3 = styled.h3`
    font-size: 25px;
    font-weight: 300;
    text-align:center;
    padding: 20px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 0px;
`;

const VideoContent = styled.div`
    height: 90vh;
    position:relative;
    margin-top:80px;
`;

const TextContext = styled.div`
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    padding-top:120px;
    padding-left:120px;
    overflow: hidden;
    z-index:50;
    color:white;

    @media (max-width: 480px) {
        padding-top: 40px;
        padding-left:40px;
    }

`;

const Headline = styled.div`
    font-size: 70px;
    line-height: 75px;
    color: white;
    font-weight: bold;
    &.grey {
        color: #d3d3d3;
    }
`;
const Headline2 = styled.div`
    font-size: 18px;
    color: white;
    font-weight: bold;
    padding-top: 20px;
`;

export default () => {
    return (
        <VideoContent>
            <iframe
                src='https://www.youtube.com/embed/1aWeH6dR7dU?controls=0&showinfo=0&rel=0&autoplay=1&loop=1'
                frameBorder='0'
                style={{ height: '90vh', width: '100%' }}
                allowFullScreen>
            </iframe>

            <TextContext>
                <Headline>Product</Headline>
                <Headline>Engineers</Headline>
                <Headline className='grey'>Conf.</Headline>

                <Headline2>2 Days of Technology</Headline2>
                <p>14 Talks, Networking, Fun<br />
                    January 20-21, 2017
                </p>
                <Headline2>2 Days of Skiing in Lech</Headline2>
                <p>January 22-23, 2017</p>

            </TextContext>

        </VideoContent >
    );

}
