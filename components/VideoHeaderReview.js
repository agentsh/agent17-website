import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';

const VideoContent = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
`;

const TextContext = styled.div`
    padding-left: 40px;
    padding-right: 40px;

    .iframeContainer {
        position: relative;
        width: 100%;
        padding-bottom: 56.5%;
    }

    iframe {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
`;

const content = (
    <TextContext>
        <div className='container'>
            <div className='iframeContainer'>
                <iframe src='https://www.youtube.com/embed/UzdE2hcXF90'></iframe>
            </div>
        </div>
    </TextContext>
);

export default () => {
    return (
        <VideoContent>
            {content}
        </VideoContent>
    );

}
