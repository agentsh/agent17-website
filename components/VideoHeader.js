import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';

const VideoContent = styled.div`
    position:relative;
    margin-top: 100px;
    clear:both;
    overflow:hidden;
    @media (max-width: 900px) {
        margin-top:50px;
        height:600px;
        background: url('./static/img/speaker-mobile.jpg') no-repeat center bottom;
        background-size: cover;
    }
`;

const TextContext = styled.div`
    position:absolute;
    top:0;
    left:0;
    padding-top:70px;
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

const Video = styled.video`
    height: auto;
    width: 100%;
    display:block;

    @media (max-width: 900px) {
       display:none;
     }
`;

const Headline = styled.div`
    font-size: 70px;
    line-height: 75px;
    color: white;
    font-weight: bold;
    &.grey {
        color: #999;
    }
     @media (max-width: 900px) {
       font-size: 55px;
     }
`;
const Headline2 = styled.div`
    font-size: 18px;
    color: white;
    font-weight: bold;
    padding-top: 20px;
`;

const content = (
    <TextContext>
        <Headline>Product</Headline>
        <Headline>Engineers</Headline>
        <Headline className='grey'>Conf.</Headline>

        <Headline2>2 Days of Technology</Headline2>
        <p>14 Talks, Networking and Fun<br />
            January 20-21, 2017
                </p>
        <Headline2>2 Days of Skiing in Lech</Headline2>
        <p>January 22-23, 2017</p>
    </TextContext>
);

export default () => {
    return (
        <VideoContent>
            <Video id="background-video" loop autoPlay >
                <source src={'./static/video/header_2016.mp4'} type="video/mp4" />
                <source src={'./static/video/header_2016.mp4'} type="video/ogg" />
                Your browser does not support the video tag.
            </Video>
            {content}
        </VideoContent>
    );

}
