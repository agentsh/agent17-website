import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';


const VideoContent = styled.div`
    position:relative;
    height:auto;
    margin-top: 80px;
    clear:both;
    background: #212121;
    @media (max-width: 900px) {
        height:100vh;
        background: url('./static/img/speaker-mobile.jpg') no-repeat center bottom;
        background-size: cover;
    }
`;

const TextContext = styled.div`
    position:absolute;
    top:0;
    left:0;
    padding-top:120px;
    padding-left:120px;
    z-index:50;
    color:white;

    @media (max-width: 600px) {
        padding-top: 100px;
        padding-left:40px;
        iframe{
            display:none;
        }
    }
`;

const Video = styled.video`
    height: auto;
    width: 100%;
    float: left;
    top: 0;
    padding: 0;
    // position: fixed;

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
        color: #d3d3d3;
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

export default () => {
    return (
        <VideoContent>
            <Video id="background-video" loop autoPlay>
                <source src={'./static/video/header_2016.mp4'} type="video/mp4" />
                <source src={'./static/video/header_2016.mp4'} type="video/ogg" />
                Your browser does not support the video tag.
            </Video>
            )
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
